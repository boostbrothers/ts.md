import * as _ from 'lodash';
import * as ts from 'typescript';
import {getMetadata} from '../utils';
import parseJsdoc from './parse-jsdoc';

export default (node: ts.EnumMember) => {
  const {name, jsdoc} = getMetadata(node);
  const {comments} = parseJsdoc(jsdoc);
  const value = _.get(node.initializer, ['text']);

  return {name, value, comments};
};
