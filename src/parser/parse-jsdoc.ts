import * as _ from 'lodash/fp';
import * as ts from 'typescript';
import {getJSDocDefaultTag} from '../utils';

export default (jsDoc: ts.JSDoc[]) => {
  const comments = _.map('comment', jsDoc);
  const defaultValues = _.flow([
    _.flatten,
    _.map(getJSDocDefaultTag),
  ])(jsDoc);

  return {
    comments,
    defaultValues,
  };
};
