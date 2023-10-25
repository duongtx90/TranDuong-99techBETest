import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/data.db'
  });


import {initModels} from './init-models'
const models = initModels(sequelize);
export async function connect(){
    await sequelize.authenticate()
    await sequelize.sync();
}
export default models;