const contacts = require('./contacts/contacts.service.js');
const admin = require('./admin/admin.service.js');
const hours = require('./hours/hours.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contacts);
  app.configure(admin);
  app.configure(hours);
};
