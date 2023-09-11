import type { QueryResolvers } from "./../../../types.generated";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	const categories = await _ctx.prisma.category.findMany();
	return categories.map((category) => ({ ...category, products: [] }));
};
