import ts = require('typescript');

export default (node: ts.TupleTypeNode) => {
  return {
    kind: node.kind,
  };
};
