import { makeServer } from '../services/server';
import { Server } from 'miragejs';


let server;

beforeEach(() => {
  server = makeServer();
});

afterEach(() => {
  server.shutdown();
});

test('it sets up the MirageJS server with models and routes', () => {
  expect(server instanceof Server).toBe(true);

  const educationResponse = server.get('/api/education');
  const skillsResponse = server.get('/api/skills');
  const postSkillsResponse = server.post('/api/skills');

  expect(educationResponse).toBeTruthy();
  expect(skillsResponse).toBeTruthy();
  expect(postSkillsResponse).toBeTruthy();

});
