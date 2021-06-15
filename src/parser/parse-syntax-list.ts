import * as ts from 'typescript';
import parseNode from './parse-node';

export default (node: ts.SyntaxList) => {
  const members = node.getChildren();

  return members.map(parseNode);
};
