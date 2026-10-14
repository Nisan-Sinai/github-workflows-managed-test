const pc = require('picocolors');

if (typeof pc.green !== 'function') {
  throw new Error('pnpm dependency was not loaded');
}
