var Sequelize = require("sequelize")

var sequelize = new Sequelize('postgres://ubuntu@localhost:5432/msg_app');

var Msg = sequelize.define('msg',{
    
    title: Sequelize.STRING,
    body: Sequelize.STRING,
    created: Sequelize.DATE
})

module.exports = Msg;