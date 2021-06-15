import * as ts from 'typescript';
import parseEnum from './parse-enum';
import parseEnumMember from './parse-enum-member';
import parseInterface from './parse-interface';
import parseSourceFile from './parse-source-file';
import parseSyntaxList from './parse-syntax-list';
import parseTypeElement from './parse-type-element';

export default (node: ts.Node) => {
  if (ts.isTypeElement(node)) {
    return parseTypeElement(node);
  }

  if (ts.isInterfaceDeclaration(node)) {
    return parseInterface(node);
  }

  if (ts.isEnumMember(node)) {
    return parseEnumMember(node);
  }

  if (ts.isEnumDeclaration(node)) {
    return parseEnum(node);
  }

  if (node.kind === ts.SyntaxKind.SyntaxList) {
    return parseSyntaxList(node as ts.SyntaxList);
  }

  if (ts.isSourceFile(node)) {
    return parseSourceFile(node);
  }
};
