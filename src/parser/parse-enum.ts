import * as ts from 'typescript';
import * as hbs from 'handlebars';
import * as path from 'path';
import {getMetadata} from '../utils';
import parseJsdoc from './parse-jsdoc';
import parseNode from './parse-node';

const filepath = path.resolve(__dirname, '../..', 'templates/enum.hbs');
const templateFile = ts.sys.readFile(filepath);
const template = hbs.compile(templateFile);

export default (node: ts.EnumDeclaration) => {
  const {name, jsdoc} = getMetadata(node);
  const {comments} = parseJsdoc(jsdoc);
  const members = node.members.map(parseNode);

  return template({ name, comments, members });
};
