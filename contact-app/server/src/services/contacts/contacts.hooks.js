

const { setNow } = require('feathers-hooks-common');
const validateContact = require('../../hooks/validate-contact')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setNow('updatedAt'),validateContact()],
    update: [setNow('updatedAt'),validateContact()],
    patch: [setNow('updatedAt'),validateContact()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
