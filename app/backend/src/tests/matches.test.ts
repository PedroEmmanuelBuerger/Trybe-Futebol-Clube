import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import matchModel from '../database/models/SequelizeMatches';
import TeamsModel from '../database/models/SequelizeTeams';

const { expect } = chai;
chai.use(chaiHttp);


import * as jwt from 'jsonwebtoken';
import MatchsMocks from './mocks/MatchMocks';

describe('teste de integração funcionalidade: Matches', () => {
    beforeEach(function () { sinon.restore(); });
    describe('teste da rota de matches', () => {
        describe('testes de sucesso', () => {
            it('verifica se pega todas as partidas sem nenhuma query', async () => {

                sinon.stub(matchModel, 'findAll').resolves(MatchsMocks.matches as any);

                const httpResponse = await chai.request(app).get('/matches').send();

                expect(httpResponse.status).to.equal(200);
                expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.matches);
            });
            it('verifica se é possivel adicionar uma nova match', async () => {
                const t1 = TeamsModel.build(MatchsMocks.teamone);
                const t2 = TeamsModel.build(MatchsMocks.teamtwo);
                const match = matchModel.build(MatchsMocks.newMatchRes);

                sinon.stub(TeamsModel, 'findByPk')
                    .onFirstCall().resolves(t1)
                    .onSecondCall().resolves(t2);
                sinon.stub(matchModel, 'create').resolves(match);
                sinon.stub(jwt, 'verify').resolves();

                const httpResponse = await chai.request(app).post('/matches')
                    .send(MatchsMocks.reqPost).set('Authorization', '123456');

                expect(httpResponse.status).to.equal(201);
                expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.newMatchRes);
            });
        });
        describe('teste de erros', () => {
            it('verifica se ao fazer uma requesição com o mesmo teamid ele retorna erro', async () => {
                sinon.stub(jwt, 'verify').resolves();

                const httpResponse = await chai.request(app).post('/matches')
                    .send(MatchsMocks.reqpostError).set('Authorization', '123456');

                expect(httpResponse.status).to.equal(422);
                expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.errorMsg);
            });
            it('verifica se ao fazer uma requesição e não achar o 1 usuario da erro', async () => {
                const t2 = TeamsModel.build(MatchsMocks.teamtwo);

                sinon.stub(jwt, 'verify').resolves();
                sinon.stub(TeamsModel, 'findByPk')
                    .onFirstCall().resolves(null)
                    .onSecondCall().resolves(t2);

                const httpResponse = await chai.request(app).post('/matches')
                    .send(MatchsMocks.reqPost).set('Authorization', '123456');

                expect(httpResponse.status).to.equal(404);
                expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.noUserMsg);
            });
            it('verifica se ao fazer uma requesição e não achar o 2 usuario da erro ', async () => {
                const t1 = TeamsModel.build(MatchsMocks.teamone);

                sinon.stub(jwt, 'verify').resolves();
                sinon.stub(TeamsModel, 'findByPk')
                    .onFirstCall().resolves(t1)
                    .onSecondCall().resolves(null);

                const httpResponse = await chai.request(app).post('/matches')
                    .send(MatchsMocks.reqPost).set('Authorization', '123456');

                expect(httpResponse.status).to.equal(404);
                expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.noUserMsg);
            });
            it('verifica se ao fazer uma requesição sem token da erro', async () => {
                const httpResponse = await chai.request(app).post('/matches')
                .send(MatchsMocks.reqPost);

            expect(httpResponse.status).to.equal(401);
            expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.tokenmsg);
            });
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
        });
    });
    describe('teste da rota de matches/id', () => {
        describe('testes de sucesso', () => {
            it('verifica se é possivel alterar uma match', async () => {
                sinon.stub(matchModel, 'update').resolves();
                sinon.stub(jwt, 'verify').resolves();

                const httpResponse = await chai.request(app).patch('/matches/1')
                    .send(MatchsMocks.updateMatch).set('Authorization', '123456');

                expect(httpResponse.status).to.equal(200);
                expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.sucessNewMsg);
            });
        })
    });
    describe('teste da rota de matches/id/finish', () => {
        describe('testes de sucesso', () => {
            it('verifica se é possivel finalizar uma partida', async () => {
                sinon.stub(matchModel, 'update').resolves();
                sinon.stub(jwt, 'verify').resolves();

                const httpResponse = await chai.request(app).patch('/matches/1/finish')
                    .send().set('Authorization', '123456');

                expect(httpResponse.status).to.equal(200);
                expect(httpResponse.body).to.have.be.deep.equal(MatchsMocks.finishMsg);
            });
        });
    });
});
