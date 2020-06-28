import Sequelize from 'sequelize';
import datbaseConfig from "../config/database";
import Post from '../app/models/Post';

const models = [
  Post,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(datbaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
