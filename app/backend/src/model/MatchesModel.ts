import { ICRUDModel } from '../Interfaces/IMatchesModels';
import SequelizeMatchs from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import { IMatchesInclude } from '../Interfaces/IMatchesInclude';

export default class MatchsModel implements ICRUDModel {
  private model = SequelizeMatchs;

  async findAll(): Promise<IMatchesInclude[]> {
    const matches = await this.model.findAll({
      include: [{ model: SequelizeTeams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches as unknown as IMatchesInclude[];
  }

  async finishMatch(id: number): Promise<void> {
    await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
  }
}
