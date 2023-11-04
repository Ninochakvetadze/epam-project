import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addSkill } from './skillsReducer';

function SkillForm({ isSkillFormOpen }) {
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const initialValues = {
    skillName: '',
    skillRange: '',
  };

  const validate = (values) => {
    const errors = {};

    if (!values.skillName) {
      errors.skillName = 'Skill name is a required field';
    }

    if (!values.skillRange) {
      errors.skillRange = 'Skill range must be a number';
    } else if (isNaN(values.skillRange)) {
      errors.skillRange = 'Skill range must be a number';
    } else if (values.skillRange < 10) {
      errors.skillRange = 'Skill range must be greater than or equal to 10';
    } else if (values.skillRange > 100) {
      errors.skillRange = 'Skill range must be less than or equal to 100';
    }

    setIsButtonDisabled(Object.keys(errors).length > 0);

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addSkill({ language: values.skillName, level: values.skillRange }));

    const skillsData = JSON.parse(localStorage.getItem('skills')) || [];
    skillsData.push({ language: values.skillName, level: values.skillRange });
    localStorage.setItem('skills', JSON.stringify(skillsData));

    resetForm();
  };

  const formStyles = isSkillFormOpen ? { border: '2px solid #26C17E' } : {};

  return (
    <div className="skillsForm" style={formStyles}>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ isValid }) => (
          <Form>
            <div className='formInput'>
              <label htmlFor="skillName">Skill Name</label>
              <Field type="text" id="skillName" name="skillName" required />
              <ErrorMessage name="skillName" component="div" className="error" />
            </div>

            <div className='formInput'>
              <label htmlFor="skillRange">Skill Range</label>
              <Field
                type="number"
                id="skillRange"
                name="skillRange"
                required
                min="10"
                max="100"
              />
              <ErrorMessage name="skillRange" component="div" className="error" />
            </div>

            <button type="submit" className={isButtonDisabled || !isValid ? '' : 'button-enabled'} disabled={isButtonDisabled || !isValid}>
              Add Skill
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SkillForm;
