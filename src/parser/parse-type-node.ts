import ts = require('typescript');
import parseArrayTypeNode from './parse-array-type-node';
import parseIntersectionType from './parse-intersection-type';
import parseLiteralType from './parse-literal-type';
import parseTupleTypeNode from './parse-tuple-type-node';
import parseUnionType from './parse-union-type';

export default (node: ts.TypeNode) => {
  if (ts.isArrayTypeNode(node)) {
    return parseArrayTypeNode(node);
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

  if (ts.isIntersectionTypeNode(node)) {
    return parseIntersectionType(node);
  }
};
