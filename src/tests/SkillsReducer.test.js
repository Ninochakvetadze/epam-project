import { addSkill, removeSkill, initializeSkillsFromLocalStorage } from '../features/skills/skillsReducer';
import skillsReducer from '../features/skills/skillsReducer';

describe('skillsSlice', () => {
  it('should handle adding a skill', () => {
    const initialState = {
      skills: [],
    };
    const newSkill = { id: 1, name: 'HTML' };
    const action = addSkill(newSkill);
    const state = skillsReducer(initialState, action);

    expect(state.skills).toHaveLength(1);
    expect(state.skills[0]).toEqual(newSkill);
  });

  it('should handle removing a skill', () => {
    const initialState = {
      skills: [
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'JavaScript' },
      ],
    };
    const skillToRemove = { id: 2, name: 'CSS' };
    const action = removeSkill(skillToRemove);
    const state = skillsReducer(initialState, action);

    expect(state.skills).toHaveLength(2);
    expect(state.skills).not.toContainEqual(skillToRemove);
  });

  it('should handle initializing skills from local storage', () => {
    const initialState = {
      skills: [],
    };
    const storedSkills = [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
    ];
    const action = initializeSkillsFromLocalStorage(storedSkills);
    const state = skillsReducer(initialState, action);

    expect(state.skills).toHaveLength(2);
    expect(state.skills).toEqual(storedSkills);
  });

  it('should not modify state for unknown action', () => {
    const initialState = {
      skills: [
        { id: 1, name: 'HTML' },
      ],
    };
    const action = { type: 'UNKNOWN_ACTION' }; 
    const state = skillsReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
