import * as ts from 'typescript';
import * as path from 'path';
import parseSourceFile from './parser/parse-source-file';

export default (schemaPath: string) => {
  const file = ts.sys.readFile(schemaPath);
  const {name} = path.parse(schemaPath);

  if (!file) return;

  const node = ts.createSourceFile(name, file, ts.ScriptTarget.Latest);
  try {
    const sourceFile = parseSourceFile(node);

    return {
      name,
      sourceFile,
    };
  } catch (err) {
    console.log('read source file catch', err);
    throw err;
  }
};
