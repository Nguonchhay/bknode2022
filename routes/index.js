const pageRoute = require('./web/page');

const userPostgresApiRoute = require('./api/userPostgres');
const userMongoApiRoute = require('./api/userMongo');

const routers = (app) => {
    app.use('/', pageRoute);

    app.use('/api/postgres', userPostgresApiRoute);
    app.use('/api/mongo', userMongoApiRoute);
}

module.exports = routers;