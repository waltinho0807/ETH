const routes = require('next-routes')();

routes
.add('/lottery/new', '/lottery/new')
.add('/lottery/:address', '/lottery/show');

module.exports = routes;


