const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Task API', () => {
  it('should create a task', (done) => {
    chai.request(app)
      .post('/api/tasks')
      .send({ title: 'Test task' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('title');
        done();
      });
  });
});
