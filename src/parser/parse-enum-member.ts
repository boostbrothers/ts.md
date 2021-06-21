import * as _ from 'lodash';
import * as ts from 'typescript';
import {getMetadata} from '../utils';
import parseJsdoc from './parse-jsdoc';

export default (node: ts.EnumMember) => {
  const {name, jsdocs} = getMetadata(node);
  const jsdoc = jsdocs.map(parseJsdoc);
  const value = _.get(node.initializer, ['text']);

  return {name, value, jsdoc};
};
