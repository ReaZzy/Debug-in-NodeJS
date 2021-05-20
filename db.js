const {DataTypes} = require('sequelize');
const Sequelize = require('sequelize');


const sequelize = new Sequelize('gamedb', 'postgres', 'Nebela2005', {
    host: 'localhost',
    dialect: 'postgres',
    port:5433,
    operatorsAliases: false
})

const Game = require("./models/game")(sequelize, DataTypes)
const User = require("./models/user")(sequelize, DataTypes)


sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

module.exports = {
    sequelize,
    Game,
    User
}
