import * as ts from "typescript";
import parseNode from './parse-node';

export default (node: ts.IntersectionTypeNode) => {
	const types = node.types.map(parseNode);

	return {
		kind: node.kind,
		types,
	};
};