import ts = require('typescript');
import parseNode from './parse-node';

export default (node: ts.TypeParameterDeclaration) => {
  const name = parseNode(node.name);
  const constraint = parseNode(node.constraint);
  const defaults = parseNode(node.default);

  return {kind: node.kind, constraint, name, default: defaults};
};
