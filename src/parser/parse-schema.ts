import * as ts from 'typescript';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import parseNode from './parse-node';

const filepath = path.resolve(__dirname, '../..', 'templates/schema.hbs')
const templateFile = ts.sys.readFile(filepath);
const template = Handlebars.compile(templateFile);

export default (schemataFiles: string[]): any => {
  const schemata = schemataFiles.map(schemaPath => {
    const index = ts.sys.readFile(schemaPath);
    const {name} = path.parse(schemaPath);
  
    if (!index) return;
  
    const node = ts.createSourceFile('', index, ts.ScriptTarget.Latest);
    const sourceFile = parseNode(node);
  
    return {
      name,
      sourceFile,
    };
  });

  return template({schemata});
};
