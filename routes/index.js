const pageRoute = require('./web/page');

const userApiRoute = require('./api/user');

const routers = (app) => {
    app.use('/', pageRoute);

    app.use('/api', userApiRoute);
}

module.exports = routers;