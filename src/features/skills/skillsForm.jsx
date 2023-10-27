import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addSkill } from './skillsSlice';

function SkillForm() {
  const dispatch = useDispatch();

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
      errors.skillRange = 'Skill range is a required field';
    } else if (isNaN(values.skillRange)) {
      errors.skillRange = 'Skill range must be a number';
    } else if (values.skillRange < 10) {
      errors.skillRange = 'Skill range must be greater than or equal to 10';
    } else if (values.skillRange > 100) {
      errors.skillRange = 'Skill range must be less than or equal to 100';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted skill:', values);
    dispatch(addSkill({ language: values.skillName, level: values.skillRange }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="skillName">Skill Name</label>
          <Field type="text" id="skillName" name="skillName" required />
          <ErrorMessage name="skillName" component="div" className="error" />
        </div>

        <div>
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

        <button type="submit" disabled={!Formik.isValid}>
          Add Skill
        </button>
      </Form>
    </Formik>
  );
}

export default SkillForm;
