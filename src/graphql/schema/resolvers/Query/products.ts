import type { QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	_arg,
	ctx,
) => {
	const products = await ctx.prisma.product.findMany();
	return products.map((product) => ({ ...product, reviews: [] }));
};
