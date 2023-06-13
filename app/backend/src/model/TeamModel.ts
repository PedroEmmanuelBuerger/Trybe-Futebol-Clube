import { ICRUDModel } from '../Interfaces/ITeamsModel';
import SequelizeTeams from '../database/models/SequelizeTeams';
import { ITeams } from '../Interfaces/ITeams';

export default class TeamModel implements ICRUDModel {
  private model = SequelizeTeams;

  async findAll(): Promise<ITeams[]> {
    const teams = await this.model.findAll();
    return teams.map(({ id, teamName }) => (
      { id, teamName }
    ));
  }

  async findById(id: ITeams['id']): Promise<ITeams | null> {
    const team = await this.model.findByPk(id);
    if (!team) {
      return null;
    }
    const { teamName }: ITeams = team;
    return { id, teamName };
  }
}
