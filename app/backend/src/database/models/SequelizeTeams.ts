import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class SequelizeTeams extends Model<InferAttributes<SequelizeTeams>,
InferCreationAttributes<SequelizeTeams>> {
  declare id: CreationOptional<number>;
  declare teamName: string;
}

SequelizeTeams.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default SequelizeTeams;
