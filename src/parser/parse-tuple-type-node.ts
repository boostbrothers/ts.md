import ts = require('typescript');
import parseNode from './parse-node';

export default (node: ts.TupleTypeNode) => {
  const elements = node.elements.map(parseNode);

  return {
    kind: node.kind,
    elements,
  };
};
