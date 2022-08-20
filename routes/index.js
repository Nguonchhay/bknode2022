const pageRoute = require('./web/page');

const userPostgresApiRoute = require('./api/userPostgres');

const routers = (app) => {
    app.use('/', pageRoute);

    app.use('/api/postgres', userPostgresApiRoute);
}

module.exports = routers;