import * as ts from 'typescript';
import parseIdentifier from './parse-identifier';
import parseNode from './parse-node';

export default (node: ts.TypeReferenceNode) => {
  const typeName = ts.isIdentifier(node.typeName)
    ? parseIdentifier(node.typeName)
    : `${parseNode(node.typeName.left)}.${parseNode(node.typeName.right)}`;
  const typeArguments = node.typeArguments?.map(parseNode);

  return {
    kind: node.kind,
    typeName,
    typeArguments,
  };
};
