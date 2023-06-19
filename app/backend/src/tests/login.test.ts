import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import userModel from '../database/models/SequelizeUsers';

const { expect } = chai;
chai.use(chaiHttp);

import userMocks from './mocks/UserMocks';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

describe('teste de integração funcionalidade: Login', () => {
    beforeEach(function () { sinon.restore(); });
  it('verifica se é possivel logar', async () => {

    const httpRequestBody = userMocks.userLogin;

    const mockFindOneReturn = userModel.build(userMocks.user);
    sinon.stub(userModel, 'findOne').resolves(mockFindOneReturn);
    sinon.stub(bcrypt, 'compare').resolves(true);
    sinon.stub(jwt, 'verify').resolves();

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });
});
