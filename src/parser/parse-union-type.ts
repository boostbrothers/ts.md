import ts = require("typescript");
import parseNode from "./parse-node";

export default (node: ts.UnionTypeNode) => {
	const types = node.types.map(parseNode);
	return {
		kind: node.kind,
		types,
	}
};