import ts = require('typescript');
import parseNode from './parse-node';

export default (node: ts.ArrayTypeNode) => {
  const elementType = parseNode(node.elementType);
  return {
    kind: node.kind,
    elementType,
  };
};
