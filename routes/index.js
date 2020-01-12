'use strict';

module.exports = function (app) {
    app.use('/', require('../modules/home/routes/home.route'));
    app.use('/api', require('../modules/test_api/routes/test_api.route'));    
}
