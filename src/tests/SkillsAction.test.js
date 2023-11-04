import { fetchSkillsData } from '../features/skills/SkillsAction';

it('should create a correct fetchSkillsData action', () => {
  const action = fetchSkillsData.pending();
  expect(action.type).toBe(fetchSkillsData.pending.type);
});

it('should create a correct fulfilled action', () => {
  const mockData = ['Skill1', 'Skill2'];
  const action = fetchSkillsData.fulfilled(mockData);
  expect(action.type).toBe(fetchSkillsData.fulfilled.type);
  expect(action.payload).toEqual(mockData);
});

it('should create a correct rejected action', () => {
  const error = new Error('Failed to fetch skills data');
  const action = fetchSkillsData.rejected(error);
  expect(action.type).toBe(fetchSkillsData.rejected.type);
  expect(action.error.message).toEqual('Failed to fetch skills data');
});
