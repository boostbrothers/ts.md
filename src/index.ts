#!/usr/bin/env node
import * as ts from 'typescript';
import readSourceFile from './read-source-file';
import handlebars from './utils/handlebars';

const args = {
  configfile: ts.sys.args[1] || './sgenconfig.json',
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
  depth
);

const schemata = schemataFiles.map(readSourceFile).map(handlebars);
ts.sys.writeFile(out, schemata.join('\n\n'));
