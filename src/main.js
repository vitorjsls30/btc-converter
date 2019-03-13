#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description('Convert bitcoin to any currency defined')
  .parse(process.argv);
