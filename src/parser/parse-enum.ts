import * as ts from 'typescript';
import {getMetadata} from '../utils';
import parseJsdoc from './parse-jsdoc';
import parseNode from './parse-node';

export default (node: ts.EnumDeclaration) => {
  const {name, jsdocs} = getMetadata(node);
  const jsdoc = jsdocs.map(parseJsdoc);
  const members = node.members.map(parseNode);

  return {kind: node.kind, name, jsdoc, members};
};
