import * as ts from 'typescript';
import parseNode from './parse-node';

export default (node: ts.SourceFile) => {
  const [statement] = node.getChildren();

  const syntaxList = parseNode(statement);

  return {kind: node.kind, syntaxList};
};
