#!/usr/bin/env node
import * as _ from 'lodash';
import * as ts from 'typescript';
import parseSchema from './parser/parse-schema';

const args = {
  configfile: ts.sys.args[0] || './sgenconfig.json',
};
const config = ts.sys.readFile(args.configfile);
const {
  path = '',
  extensions = undefined,
  exclude = undefined,
  include = undefined,
  depth = undefined,
  out = './docs/schemata.md',
} = config ? JSON.parse(config) : {};

const schemataFiles = ts.sys.readDirectory(
  path,
  extensions,
  exclude,
  include,
  depth,
);

const schemata = parseSchema(schemataFiles);
ts.sys.writeFile(out, schemata);
