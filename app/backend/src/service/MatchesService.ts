import { ICRUDModel } from '../Interfaces/IMatchesModels';
import MatchesModel from '../model/MatchesModel';
import { IMatches } from '../Interfaces/IMatches';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(
    private MatchsModel: ICRUDModel = new MatchesModel(),
  ) { }

  public async getAllMatchs(): Promise<ServiceResponse<IMatches[]>> {
    const allMatchs = await this.MatchsModel.findAll();
    return { status: null, data: allMatchs };
  }
}
