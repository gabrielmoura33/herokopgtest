module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarberDois',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
