import type { QueryResolvers } from "./../../../types.generated";
export const collections: NonNullable<QueryResolvers["collections"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	const collections = await _ctx.prisma.collection.findMany();
	return collections.map((collection) => ({ ...collection, products: [] }));
};
