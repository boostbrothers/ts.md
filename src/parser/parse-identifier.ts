import ts = require("typescript");

export default (node: ts.Identifier): string => {
	return node.escapedText as string || node.text;
};