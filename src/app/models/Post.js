import Sequelize, { Model } from 'sequelize';

class Post extends Model {
  static init(sequelize) {
    super.init({
      url: Sequelize.STRING,
      text: Sequelize.STRING
    }, {
      sequelize,
    });
  }
}
export default Post;