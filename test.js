const assert = require('node:assert/strict');
const get = require('lodash/get');

assert.equal(get({ managed: { centrally: true } }, 'managed.centrally'), true);
console.log('central management pilot passed');
