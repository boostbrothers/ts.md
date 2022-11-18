import ts = require('typescript');

class JsdocParser {
  defaults: string[] = [];

  static getDefaultTags(node: ts.JSDoc) {
    return node.tags?.reduce<string[]>(
      (tags, tag) =>
        isJSDocDefaultTag(tag) ? [...tags, tag.comment as string] : tags,
      []
    );
  }

  constructor(private readonly node: ts.JSDoc) {
    this.defaults = 
  }

  get kind() {
    return this.node.kind;
  }
}
