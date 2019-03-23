const assert = require('assert');
const app = require('../../src/app');

describe('\'hours\' service', () => {
  it('registered the service', () => {
    const service = app.service('hours');

    assert.ok(service, 'Registered the service');
  });
});
