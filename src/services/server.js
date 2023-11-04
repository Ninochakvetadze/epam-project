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
        date: '2013-2017',
        title: 'Bachelor of Science',
      });
      server.create('education', {
        date: '2017-2019',
        title: 'Master of Science',
      });
      server.create('skill', {
        name: 'HTML',
        level: 90,
      });
      server.create('skill', {
        name: 'CSS',
        level: 80,
      });
      server.create('skill', {
        name: 'React',
        level: 70,
      });
      server.create('skill', {
        name: 'JS',
        level: 60,
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
