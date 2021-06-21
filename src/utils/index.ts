import * as _ from 'lodash';
import * as fp from 'lodash/fp';
import * as ts from 'typescript';
import parseIdentifier from '../parser/parse-identifier';

export const getMetadata = (node: ts.Node) => {
  const name = _.get(node, ['name', 'escapedText']);
  const jsdocs: ts.JSDoc[] = _.get(node, ['jsDoc'], []);

  return {
    name,
    jsdocs,
  };
};

export const joinJSDocComment = fp.map('comment');

export const isJSDocDefaultTag = (jsDoc: ts.JSDocTag) =>
  jsDoc.tagName.escapedText === 'default';

export const getJSDocDefaultTag = (node: ts.JSDoc) =>
  node.tags?.reduce<Array<string | undefined>>(
    (tags, tag) =>
      isJSDocDefaultTag(tag) ? [...tags, tag.comment as string] : tags,
    []
  );

export const getJSDocOtherTags = (node: ts.JSDoc) =>
  node.tags?.reduce<Array<{tagName: string; comment: string}>>((tags, tag) => {
    if (isJSDocDefaultTag(tag)) {
      return tags;
    }

    const tagInfo = {
      tagName: parseIdentifier(tag.tagName),
      comment: tag.comment as string,
    };

    return [...tags, tagInfo];
  }, []);
