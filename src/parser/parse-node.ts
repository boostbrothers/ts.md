import * as ts from 'typescript';
import parseArrayTypeNode from './parse-array-type-node';
import parseDeclaration from './parse-declaration';
import parseEnumMember from './parse-enum-member';
import parseIdentifier from './parse-identifier';
import parseLiteralType from './parse-literal-type';
import parsePropertySignature from './parse-property-signature';
import parseSyntaxList from './parse-syntax-list';
import parseToken from './parse-token';
import parseTupleTypeNode from './parse-tuple-type-node';
import parseTypeElement from './parse-type-element';
import parseTypeLiteralNode from './parse-type-literal-node';
import parseTypeParameter from './parse-type-parameter';
import parseTypeReferenceNode from './parse-type-reference-node';
import parseUnionType from './parse-union-type';
import parseIntersectionType from './parse-intersection-type';

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

  if (ts.isArrayTypeNode(node)) {
    return parseArrayTypeNode(node);
  }

  if (ts.isTypeReferenceNode(node)) {
    return parseTypeReferenceNode(node);
  }

  if (ts.isTypeLiteralNode(node)) {
    return parseTypeLiteralNode(node);
  }

  if (ts.isTupleTypeNode(node)) {
    return parseTupleTypeNode(node);
  }

  if (ts.isUnionTypeNode(node)) {
    return parseUnionType(node);
  }

  if (ts.isLiteralTypeNode(node)) {
    return parseLiteralType(node);
  }

  if (ts.isTypeParameterDeclaration(node)) {
    return parseTypeParameter(node);
  }

  if (ts.isIntersectionTypeNode(node)) {
    return parseIntersectionType(node);
  }

  if (node.kind === ts.SyntaxKind.SyntaxList) {
    return parseSyntaxList(node as ts.SyntaxList);
  }

  const declaration = parseDeclaration(node);
  if (declaration) {
    return declaration;
  }
};
