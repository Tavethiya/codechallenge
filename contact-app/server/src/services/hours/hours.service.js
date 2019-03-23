// Initializes the `hours` service on path `/hours`
const createService = require('feathers-sequelize');
const createModel = require('../../models/hours.model');
const hooks = require('./hours.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/hours', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('hours');

  service.hooks(hooks);
};
