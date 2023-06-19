import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import matchModel from '../database/models/SequelizeMatches';

const { expect } = chai;
chai.use(chaiHttp);

import MatchsMocks from './mocks/MatchMocks';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

describe('teste de integração funcionalidade: Login', () => {
    beforeEach(function () { sinon.restore(); });
    describe('teste da rota de matches', () => {
        describe('testes de sucesso', () => {
            it('verifica se pega todas as partidas sem nenhuma query', async () => {

                sinon.stub(matchModel, 'findAll').resolves(MatchsMocks.matches as any);

                const httpResponse = await chai.request(app).get('/matches').send();

                expect(httpResponse.status).to.equal(200);
                expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.matches);
            });
        });
        describe('teste da rota de matches/inProgress', () => {
            describe('testes de sucesso', () => {
                it('verifica se retorna todas as partidas em andamento', async () => {

                    sinon.stub(matchModel, 'findAll').resolves(MatchsMocks.finishMatch as any);

                    const httpResponse = await chai.request(app).get('/matches?inProgress=true').send();

                    expect(httpResponse.status).to.equal(200);
                    expect(httpResponse.body).to.have.be.deep.equal([MatchsMocks.finishMatch[1]]);
                });
                it('verifica se retorna todas as partidas finalizadas', async () => {

                    sinon.stub(matchModel, 'findAll').resolves(MatchsMocks.finishMatch as any);

                    const httpResponse = await chai.request(app).get('/matches?inProgress=false').send();

                    expect(httpResponse.status).to.equal(200);
                    expect(httpResponse.body).to.have.be.deep.equal([MatchsMocks.finishMatch[0]]);
                });
            })
        });
    })
});
