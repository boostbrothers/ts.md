import * as _ from 'lodash/fp';
import * as ts from 'typescript';
import {getJSDocDefaultTag, getJSDocDeprecatedTag, getJSDocOtherTags} from '../utils';

export default (node: ts.JSDoc) => {
  const defaultTags = getJSDocDefaultTag(node);
  const otherTags = getJSDocOtherTags(node);

  return {
    kind: node.kind,
    comment: node.comment,
    defaultTags,
    otherTags,
  };
};
