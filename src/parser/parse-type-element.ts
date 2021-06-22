import * as ts from 'typescript';
import {getMetadata, hasJSDocDeprecatedTag} from '../utils';
import parseJsdoc from './parse-jsdoc';
import parseNode from './parse-node';

export default (node: ts.TypeElement) => {
  const {name, jsdocs} = getMetadata(node);
  const jsdoc = jsdocs.map(parseJsdoc);
  const isRequired = !node.questionToken;
  const type = parseNode(node['type']);
  const isDeprecated = jsdocs.some(hasJSDocDeprecatedTag);

  return {
    kind: node.kind,
    name,
    type,
    isRequired,
    jsdoc,
    isDeprecated,
  };
};
