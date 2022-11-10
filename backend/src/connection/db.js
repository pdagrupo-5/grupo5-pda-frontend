const Sequelize = require('sequelize');
console.log("db")
console.log(process.env.DATABASE_NAME_TESTE)
console.log(__dirname)       
if(process.env.ENVIRONMENT !== "systemcar"){
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
        {
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
             },
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
        }
    );
    module.exports = sequelize;

} else {
    
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME_TESTE,
        process.env.DATABASE_USERNAME_TESTE,
        process.env.DATABASE_PASSWORD_TESTE,
        {
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
             },
            host: process.env.DATABASE_HOST_TESTE,
            port: process.env.DATABASE_PORT_TESTE,
        }
    );
    module.exports = sequelize;
    // const sequelize = new Sequelize(
    //     process.env.DATABASE_NAME_TESTE,
    //     process.env.DATABASE_USERNAME_TESTE,
    //     process.env.DATABASE_PASSWORD_TESTE,
    //     {
    //         dialect: 'postgres',
    //         host: process.env.DATABASE_HOST_TESTE,
    //         port: process.env.DATABASE_PORT_TESTE,
    //     }
    // );
    // module.exports = sequelize;
}

