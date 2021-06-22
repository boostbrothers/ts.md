import * as _ from 'lodash';
import * as ts from 'typescript';
import {getMetadata, hasJSDocDeprecatedTag} from '../utils';
import parseJsdoc from './parse-jsdoc';

export default (node: ts.EnumMember) => {
  const {name, jsdocs} = getMetadata(node);
  const jsdoc = jsdocs.map(parseJsdoc);
  const value = _.get(node.initializer, ['text']);
  const isDeprecated = jsdocs.some(hasJSDocDeprecatedTag);

  return {name, value, jsdoc, isDeprecated};
};
