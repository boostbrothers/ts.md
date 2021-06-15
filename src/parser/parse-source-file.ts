import * as ts from 'typescript';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import parseNode from './parse-node';

const filepath = path.resolve(__dirname, '../..', 'templates/source-file.hbs');
const templateFile = ts.sys.readFile(filepath);
const template = Handlebars.compile(templateFile);

export default (node: ts.SourceFile): any => {
  const syntaxList = node.getChildren().map(parseNode);

  return template({ syntaxList });
};
