import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      education: Model,
      skill: Model,
    },

    seeds(server) {
      server.create('education', {
        date: '2021-2022',
        title: 'Bachelor of Science',
      });

      server.create('skill', {
        name: 'JavaScript',
        range: 80,
      });
    },

    logging: true,

    routes() {
      this.get('/api/education', (schema, request) => {
        return schema.educations.all();
      }, { timing: 3000 });

      this.get('/api/skills', (schema, request) => {
        return schema.skills.all();
      }, { timing: 3000 });

      this.post('/api/skills', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.skills.create(attrs);
      });
    },
  });


  return server;
}
