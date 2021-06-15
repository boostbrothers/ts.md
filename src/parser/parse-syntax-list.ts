import {parse} from 'path';
import * as ts from 'typescript';
import parseNode from './parse-node';

export default (node: ts.SyntaxList) => {
  const members = node.getChildren();

  return members.reduce<string[]>((members, member) => {
    const syntaxList = parseNode(member);

    if (syntaxList) {
      return [...members, syntaxList];
    }

    return members;
  }, []);
};
