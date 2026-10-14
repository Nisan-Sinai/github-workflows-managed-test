import pc from 'picocolors';

if (typeof pc.green !== 'function') {
  throw new Error('Bun dependency was not loaded');
}
