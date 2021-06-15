import * as ts from 'typescript';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import {getMetadata} from '../utils';
import parseJsdoc from './parse-jsdoc';
import parseNode from './parse-node';
import joinHelper from '../utils/join.helper';

const filepath = path.resolve(__dirname, '../..', 'templates/interface.hbs');
const templateFile = ts.sys.readFile(filepath);
const template = Handlebars.compile(templateFile);

export default (node: ts.InterfaceDeclaration): any => {
  const {name, jsdoc} = getMetadata(node);
  const {comments} = parseJsdoc(jsdoc);
  const properties = node.members.map(parseNode);

  return template({name, comments, properties}, { helpers: {
     join: joinHelper,
  }});
};
