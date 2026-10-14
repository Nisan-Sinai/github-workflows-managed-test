const pc = require('picocolors');

if (!pc.isColorSupported && typeof pc.green !== 'function') {
  throw new Error('Yarn dependency was not loaded');
}
