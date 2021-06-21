import * as _ from 'lodash';
import * as hbs from 'handlebars';
import * as path from 'path';
import ts = require('typescript');
import toRegexpHelper from './to-regexp.helper';

const hbsPartials = ts.sys.readDirectory(
  path.resolve(__dirname, '../..', './templates/partials'),
  undefined,
  undefined,
  ['*.hbs']
);
hbsPartials.map(partial => {
  const {name} = path.parse(partial);
  const file = ts.sys.readFile(partial);

  const template = hbs.compile(file);
  hbs.registerPartial(name, template);
});

const sourceFilePath = path.resolve(__dirname, '../..', './templates/source-file.hbs');
const templateFile = ts.sys.readFile(sourceFilePath);
if (!templateFile) {
  throw new Error(sourceFilePath + ' 파일을 찾을 수 없습니다.');
}
const template = hbs.compile(templateFile);

const lodashHelpers = _.pick(_, ['isEqual', 'replace', 'includes']);

export default (context: unknown) => template(context, {helpers: {
  ...hbs.helpers,
  ...lodashHelpers,
  join: (separator: string, ...str: string[]) => str.slice(0, -1).join(separator),
  toRegexp: toRegexpHelper,
  list: (...args: unknown[]) => args,
  empty: (type: string) => {
    switch (type) {
      case 'string':
      case 'String': return '';
      case 'array':
      case 'Array': return [];
      case 'object':
      case 'Object': return {};
      default: return;
    }
  }
}});
