import ts = require('typescript');
import parseNode from './parse-node';

export default (node: ts.TypeLiteralNode) => {
  const members = node.members.map(parseNode);
  return {
    kind: node.kind,
    members,
  };
};
