import * as ts from 'typescript';

export default (node: ts.Token<ts.TokenSyntaxKind>): any => {
  switch (node.kind) {
    case ts.SyntaxKind.FirstLiteralToken: {
      return (node as ts.NumericLiteral).text;
    }
    case ts.SyntaxKind.NumericLiteral: {
      return (node as ts.NumericLiteral).text;
    }
    case ts.SyntaxKind.StringLiteral: {
      return (node as ts.StringLiteral).text;
    }
    case ts.SyntaxKind.StringKeyword: {
      return 'String';
    }
    case ts.SyntaxKind.NumberKeyword: {
      return 'Number';
    }
    case ts.SyntaxKind.BooleanKeyword: {
      return 'Boolean';
    }
    case ts.SyntaxKind.NullKeyword: {
      return 'Null';
    }
    case ts.SyntaxKind.UnknownKeyword: {
      return 'Unknown';
    }
    case ts.SyntaxKind.AnyKeyword: {
      return 'Any';
    }
    default: {
      return ts.SyntaxKind[node.kind];
    }
  }
};
