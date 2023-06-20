import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import matchModel from '../database/models/SequelizeMatches';
import teamModel from '../database/models/SequelizeTeams';

const { expect } = chai;
chai.use(chaiHttp);

import leaderMocks from './mocks/LeaderMocks';

describe('teste de integração funcionalidade: LeaderBoard', () => {
    beforeEach(function () { sinon.restore(); });
    describe('testes da rota de /leaderBoard', () => {
        describe('testes de sucesso', () => {
            it('verifica se é possivel listar todos os times em uma tabela de pontos', async () => {
                const match = matchModel.build(leaderMocks.matches[0]);
                const t1 = teamModel.build(leaderMocks.teamsArr[0]);
                const t2 = teamModel.build(leaderMocks.teamsArr[1]);

                sinon.stub(teamModel, 'findAll').resolves([t1, t2]);
                sinon.stub(matchModel, 'findAll').resolves([match]);

                const httpResponse = await chai.request(app).get('/leaderboard').send();

                expect(httpResponse.status).to.equal(200);
                expect(httpResponse.body).to.have.deep.equal(leaderMocks.orderResult);
            });
        });
    });
    describe('testes da rota de /leaderBoard/home', () => {
        it('verifica se é possivel listar times de casa em uma tabela de pontos', async () => {
            const match = matchModel.build(leaderMocks.matches[0]);
            const match2 = matchModel.build(leaderMocks.matches[1]);
            const t1 = teamModel.build(leaderMocks.teamsArr[0]);
            const t2 = teamModel.build(leaderMocks.teamsArr[1]);

            sinon.stub(teamModel, 'findAll').resolves([t1, t2]);
            sinon.stub(matchModel, 'findAll').resolves([match, match2]);

            const httpResponse = await chai.request(app).get('/leaderboard/home').send();

            expect(httpResponse.status).to.equal(200);
            expect(httpResponse.body).to.have.deep.equal(leaderMocks.orderResultHome);
        });
    });
    describe('testes da rota de /leaderBoard/away', () => {
        it('verifica se é possivel listar times de fora em uma tabela de pontos', async () => {
            const match = matchModel.build(leaderMocks.matches[0]);
            const match2 = matchModel.build(leaderMocks.matches[1]);
            const match3 = matchModel.build(leaderMocks.matches[2]);
            const t1 = teamModel.build(leaderMocks.teamsArr[0]);
            const t2 = teamModel.build(leaderMocks.teamsArr[1]);

            sinon.stub(teamModel, 'findAll').resolves([t1, t2]);
            sinon.stub(matchModel, 'findAll').resolves([match, match2, match3]);

            const httpResponse = await chai.request(app).get('/leaderboard/away').send();

            expect(httpResponse.status).to.equal(200);
            expect(httpResponse.body).to.have.deep.equal(leaderMocks.orderResultAway);
        });
    });
});