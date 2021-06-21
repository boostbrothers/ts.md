import ts = require('typescript');
import { getMetadata } from '../utils';
import parseJsdoc from './parse-jsdoc';
import parseNode from './parse-node';

export default (node: ts.PropertySignature) => {
  const {name, jsdocs} = getMetadata(node);
  const jsdoc = jsdocs.map(parseJsdoc);
  const questionToken = node.questionToken;
  const type = parseNode(node.type);

  return {
    kind: node.kind,
    name,
    type,
    jsdoc,
    questionToken,
  };
};
