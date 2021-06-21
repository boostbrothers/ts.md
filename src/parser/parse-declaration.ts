import * as ts from 'typescript';
import parseEnum from './parse-enum';
import parseInterface from './parse-interface';
import parseTypeAlias from './parse-type-alias';

export default (node: ts.Node) => {
  if (ts.isInterfaceDeclaration(node)) {
    return parseInterface(node);
  }

  if (ts.isEnumDeclaration(node)) {
    return parseEnum(node);
  }

  if (ts.isTypeAliasDeclaration(node)) {
    return parseTypeAlias(node);
  }
};
