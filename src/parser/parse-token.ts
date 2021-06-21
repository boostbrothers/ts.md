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
      return 'Unknown'
    }
    case ts.SyntaxKind.AnyKeyword: {
      return 'Any';
    }
    default: {
      return ts.SyntaxKind[node.kind];
    }
  }

  // const type = _.get(node, 'type', node);

  // if (!type) {
  //   console.log('no type', node);
  //   return 'no type';
  // }

  // if (_.has(type, ['typeName', 'escapedText'])) {
  //   const result = _.get(type, ['typeName', 'escapedText']);
  //   if (result === 'Array') {
  //     const typeArguments = _.get(type, ['typeArguments'])
  //       .map(exports.default)
  //       .join('<br >');
  //     return `Array<${typeArguments}>`;
  //   }

  //   return `[${result}](#${result})`;
  // } else if (_.has(type, ['typeName', 'right', 'escapedText'])) {
  //   return _.get(type, ['typeName', 'right', 'escapedText']);
  // } else if (_.has(type, ['members'])) {
  //   const properties = type.members
  //     .map((member: ts.PropertySignature) => {
  //       const name = _.get(member.name, 'escapedText');
  //       const questionToken = member.questionToken ? '?' : '';
  //       const type = exports.default(member);

  //       return `${name}${questionToken}: ${type}`;
  //     })
  //     .join('<br />');

  //   return properties ? `{<br />${properties}<br />}` : '{}';
  // } else if (_.has(type, ['elementType'])) {
  //   return exports.default(_.get(type, ['elementType']));
  // } else if (_.has(type, ['types'])) {
  //   return _.get(type, ['types']).map(exports.default).join(' \\| ');
  // } else if (_.has(type, ['literal'])) {
  //   return exports.default(_.get(type, ['literal']));
  // } else if (_.has(type, ['type'])) {
  //   return exports.default(_.get(type, ['type']));
  // } else if (ts.isTupleTypeNode(type)) {
  //   const elements = type.elements.map(exports.default);

  //   return `[${elements.join(', ')}]`;
  // } else {
  //   console.log('unknown type', node);
  // }

  // return type;
};
