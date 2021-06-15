import * as _ from 'lodash/fp';
import * as ts from 'typescript';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import {replace, join} from 'lodash';
import {getMetadata} from '../utils';
import parseJsdoc from './parse-jsdoc';
import parseType from './parse-type';
import toRegexpHelper from '../utils/to-regexp.helper';

const filepath = path.resolve(__dirname, '../..', 'templates/type-element.hbs');
const templateFile = ts.sys.readFile(filepath);
const template = Handlebars.compile(templateFile);

const defaultsHelper = _.flow([_.flatten, _.join(' \\| ')]);

export default (node: ts.TypeElement): any => {
  const {name, jsdoc} = getMetadata(node);
  const {comments, defaultValues} = parseJsdoc(jsdoc);
  const isRequired = !Boolean(node.questionToken);
  const type = parseType(node);

  return template(
    {
      name,
      type,
      isRequired: isRequired ? '✔️' : '',
      defaultValues,
      comments,
    },
    {helpers: {defaultsHelper, join, replace, toRegexp: toRegexpHelper}}
  );
};
