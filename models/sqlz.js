var Sequelize = require("sequelize")

// var sequelize = new Sequelize('postgres://ubuntu@localhost:5432/msg_app');
var sequelize = new Sequelize({
    username: 'rjlqooaqnaiitl',
    password: '8f3ea1f41a135811503cf57d7bbe737f9cff9a5a14787145e195d91747b9f89c',
    dialect: 'postgres',
    host: 'ec2-54-221-198-206.compute-1.amazonaws.com',
    port: 5432,
    database: 'ddr1276qdtnvo8'
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