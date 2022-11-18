import * as ts from 'typescript';
import parseDeclaration from './parse-declaration';
import parseEnumMember from './parse-enum-member';
import parseIdentifier from './parse-identifier';
import parsePropertySignature from './parse-property-signature';
import parseSyntaxList from './parse-syntax-list';
import parseToken from './parse-token';
import parseTypeElement from './parse-type-element';
import parseTypeLiteralNode from './parse-type-literal-node';
import parseTypeParameter from './parse-type-parameter';
import parseTypeReferenceNode from './parse-type-reference-node';
import parseTypeNode from './parse-type-node';

export default (node?: ts.Node) => {
  if (!node) {
    return;
  }

  if (ts.isIdentifier(node)) {
    return parseIdentifier(node);
  }

  if (ts.isToken(node)) {
    return parseToken(node as any);
  }

  if (ts.isPropertySignature(node)) {
    return parsePropertySignature(node);
  }

  if (ts.isTypeElement(node)) {
    return parseTypeElement(node);
  }

  if (ts.isEnumMember(node)) {
    return parseEnumMember(node);
  }

  if (ts.isTypeReferenceNode(node)) {
    return parseTypeReferenceNode(node);
  }

  if (ts.isTypeLiteralNode(node)) {
    return parseTypeLiteralNode(node);
  }

  if (ts.isTypeParameterDeclaration(node)) {
    return parseTypeParameter(node);
  }

  if (ts.isTypeNode(node)) {
    return parseTypeNode(node);
  }

  if (node.kind === ts.SyntaxKind.SyntaxList) {
    return parseSyntaxList(node as ts.SyntaxList);
  }

  const declaration = parseDeclaration(node);
  if (declaration) {
    return declaration;
  }
};
