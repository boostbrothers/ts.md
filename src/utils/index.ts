import * as _ from 'lodash';
import * as fp from 'lodash/fp';
import * as ts from 'typescript';

export const getMetadata = (node: ts.Node) => {
  const name = _.get(node, ['name', 'escapedText']);
  const jsdoc: ts.JSDoc[] = _.get(node, ['jsDoc']);

  return {
    name,
    jsdoc,
  };
};

export const joinJSDocComment = fp.map('comment');

export const isJSDocDefaultTag = (jsDoc: ts.JSDocTag) =>
  jsDoc.tagName.escapedText === 'default';

export const getJSDocDefaultTag = (node: ts.JSDoc) =>
  node.tags?.reduce<Array<string | undefined>>(
    (tags, tag) => (isJSDocDefaultTag(tag) ? [...tags, tag.comment as string] : tags),
    []
  );
