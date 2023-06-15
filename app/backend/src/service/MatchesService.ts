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
}
