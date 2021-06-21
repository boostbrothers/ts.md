import * as ts from 'typescript';
import {getMetadata} from '../utils';
import parseJsdoc from './parse-jsdoc';
import parseNode from './parse-node';

export default (node: ts.InterfaceDeclaration): any => {
  const {name, jsdocs} = getMetadata(node);
  const jsdoc = jsdocs.map(parseJsdoc);
  const properties = node.members.map(parseNode);
  const typeParameters = node.typeParameters?.map(parseNode);

  return {kind: node.kind, name, jsdoc, properties, typeParameters};
};
