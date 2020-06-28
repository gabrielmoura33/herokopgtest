
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post');
  }
};
