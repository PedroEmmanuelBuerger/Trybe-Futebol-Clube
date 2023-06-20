import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import teamModel from '../database/models/SequelizeTeams';

const { expect } = chai;
chai.use(chaiHttp);

import teamMocks from './mocks/TeamMocks';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

describe('teste de integração funcionalidade: Team', () => {
    beforeEach(function () { sinon.restore(); });
    describe('teste da rota de teams', () => {
        describe('testes de sucesso', () => {
            it('verifica se é possivel listar todos times', async () => {

                const mockFindOneReturn = teamModel.build(teamMocks.teamsArr[0]);

                sinon.stub(teamModel, 'findAll').resolves([mockFindOneReturn]);

                const httpResponse = await chai.request(app).get('/teams').send();

                expect(httpResponse.status).to.equal(200);
                expect(httpResponse.body).to.have.deep.equal(teamMocks.teamsArr);
            })
        })
    })
    describe('teste da rota de teams:id', () => {
        describe('testes de sucesso', () => {
            it('verifica se é possivel listar um time', async () => {
                const mockFindOneReturn = teamModel.build(teamMocks.teamsArr[0]);

                sinon.stub(teamModel, 'findByPk').resolves(mockFindOneReturn);

                const httpResponse = await chai.request(app).get('/teams/1').send();

                expect(httpResponse.status).to.equal(200);
                expect(httpResponse.body).to.have.deep.equal(teamMocks.teamsArr[0]);
            });
        })
        describe('testes de erro', () => {
            it('verifica se ao não encotrar o usuario de erro', async () => {

                sinon.stub(teamModel, 'findByPk').resolves(null);

                const httpResponse = await chai.request(app).get('/teams/999').send();

                expect(httpResponse.status).to.equal(404);
                expect(httpResponse.body).to.have.deep.equal(teamMocks.notfound);
            });
        })
    })
});
