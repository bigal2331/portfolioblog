var Sequelize = require("sequelize")

// var sequelize = new Sequelize('postgres://ubuntu@localhost:5432/msg_app');
var sequelize = new Sequelize({
    username: 'postgres',
    password: 'Letmeinnow!',
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'blog'
});

var Msg = sequelize.define('msg',{
    
    title: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    body: { 
        type: Sequelize.STRING,
        allowNull: false
    },
});

Msg.sync()

module.exports = Msg;