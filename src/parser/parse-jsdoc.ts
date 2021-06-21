import * as _ from 'lodash/fp';
import * as ts from 'typescript';
import {getJSDocDefaultTag, getJSDocOtherTags} from '../utils';

export default (node: ts.JSDoc) => {
  return {
    kind: node.kind,
    comment: node.comment,
    defaultTags: getJSDocDefaultTag(node),
    otherTags: getJSDocOtherTags(node),
  };
};
