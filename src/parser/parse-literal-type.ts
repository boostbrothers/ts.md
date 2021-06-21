import ts = require("typescript");
import parseNode from "./parse-node";

export default (node: ts.LiteralTypeNode) => {
	const literal = parseNode(node.literal);
	return {
		kind: node.kind,
		literal,
	}
};