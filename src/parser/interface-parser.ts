import ts = require('typescript');

class InterfaceParser {
  constructor(private readonly node: ts.InterfaceDeclaration) {}
}
