import { ICRUDModel } from '../Interfaces/IMatchesModels';
import MatchesModel from '../model/MatchesModel';
import { IMatches } from '../Interfaces/IMatches';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(
    private MatchsModel: ICRUDModel = new MatchesModel(),
  ) { }

  public async getAllMatchs(query: string | null): Promise<ServiceResponse<IMatches[]>> {
    const allMatchs = await this.MatchsModel.findAll();
    if (!query) {
      return { status: null, data: allMatchs };
    }
    if (query === 'true') {
      const newMatchs = allMatchs.filter((match) => match.inProgress === true);
      return { status: null, data: newMatchs };
    }
    const newMatchs = allMatchs.filter((match) => match.inProgress === false);
    return { status: null, data: newMatchs };
  }

  public async attFInishMatch(id: number): Promise<ServiceResponse<object>> {
    await this.MatchsModel.finishMatch(id);

    return { status: null, data: { message: 'finished' } };
  }

  public async attMatch(id: number, homeG: number, awayG:number)
    : Promise<ServiceResponse<object>> {
    await this.MatchsModel.updateMatch(id, homeG, awayG);

    return { status: null, data: { message: 'Update' } };
  }

  public async addMatch(hid: number, aid: number, hg: number, ag: number)
    : Promise<ServiceResponse<IMatches>> {
    const newMatch = await this.MatchsModel.addMatch(hid, aid, hg, ag);

    return { status: null, data: newMatch };
  }
}
