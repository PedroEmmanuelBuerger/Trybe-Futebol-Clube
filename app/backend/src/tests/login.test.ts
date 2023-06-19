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

const customError = new Error('Token verification failed');

describe('teste de integração funcionalidade: Login', () => {
    beforeEach(function () { sinon.restore(); });
    describe('teste da rota de login', () => {
        describe('teste de funcionamento correto', () => {
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
        })
        describe('teste de erros', () => {
            it('verifica se ao mandar uma requesição sem email da erro', async () => {
                const httpRequestBody = userMocks.userLoginErr;

                const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

                expect(httpResponse.status).to.equal(400);
                expect(httpResponse.body).to.be.deep.equal(userMocks.loginWithoutEmail);
            });
            it('verifica se ao mandar uma requesição sem senha da erro', async () => {
                const httpRequestBody = userMocks.userLoginOutPass;

                const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

                expect(httpResponse.status).to.equal(400);
                expect(httpResponse.body).to.be.deep.equal(userMocks.loginWithoutEmail);
            })
            it('verifica se ao mandar uma requesição com senha errada da erro', async () => {
                const httpRequestBody = userMocks.errorPass;

                const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

                expect(httpResponse.status).to.equal(401);
                expect(httpResponse.body).to.be.deep.equal(userMocks.loginError);
            })
            it('verifica se ao mandar uma requesição com email errado da erro', async () => {
                const httpRequestBody = userMocks.errorE;

                const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

                expect(httpResponse.status).to.equal(401);
                expect(httpResponse.body).to.be.deep.equal(userMocks.loginError);
            })
            it('verifica se ao não encontrar usuario no banco retorna erro', async () => {
                const httpRequestBody = userMocks.userLogin;

                sinon.stub(userModel, 'findOne').resolves(null);

                const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

                expect(httpResponse.status).to.equal(401);
                expect(httpResponse.body).to.have.deep.equal(userMocks.loginError);
            })
            it('verifica se a senha fornecida não bater com a do banco da erro', async () => {
                const httpRequestBody = userMocks.userLogin;

                const mockFindOneReturn = userModel.build(userMocks.user);
                sinon.stub(userModel, 'findOne').resolves(mockFindOneReturn);
                sinon.stub(bcrypt, 'compare').resolves(false);

                const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

                expect(httpResponse.status).to.equal(401);
                expect(httpResponse.body).to.have.deep.equal(userMocks.loginError);
            })
        })
    });
    describe('teste da rota de login/role', () => {
        describe('teste de funcionamento correto', () => {
            it('verifica se ao logar corretamente retorna tudo ok', async () => {
    
                const mockFindOneReturn = userModel.build(userMocks.user);
                sinon.stub(userModel, 'findOne').resolves(mockFindOneReturn);
                sinon.stub(jwt, 'verify').resolves();

                const httpResponse = await chai.request(app).get('/login/role').set('Authorization', '123456');

                expect(httpResponse.status).to.equal(200);
                expect(httpResponse.body).to.have.deep.equal({ role: 'admin' })
            })
        })
        describe('testes de erros', () => {
            it('verifica se fizer a requesiçao sem token da erro', async () => {

                const httpResponse = await chai.request(app).get('/login/role');

                expect(httpResponse.status).to.equal(401);
                expect(httpResponse.body).to.have.deep.equal({ message: 'Token not found' })
            });
            it('verifica se fizer a requesiçao com token errado da erro', async () => {

                sinon.stub(jwt, 'verify').throws(customError);

                const httpResponse = await chai.request(app).get('/login/role').set('Authorization', '123456');

                expect(httpResponse.status).to.equal(401);
                expect(httpResponse.body).to.have.deep.equal({ message: 'Token must be a valid token' })
            });
            it('verifica se ao não achar o usuario da erro', async () => {

                sinon.stub(jwt, 'verify').resolves();
                sinon.stub(userModel, 'findOne').resolves(null);

                const httpResponse = await chai.request(app).get('/login/role').set('Authorization', '123456');

                expect(httpResponse.status).to.equal(401);
                expect(httpResponse.body).to.have.deep.equal({ message: 'USER_NOT_FOUND' })
            });
        })
    })
});
