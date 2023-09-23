import type { QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	arg,
	ctx,
) => {
	const products = await ctx.prisma.product.findMany({
		skip: arg.skip ?? undefined,
		take: arg.first ?? undefined,
		where: {
			categories: {
				some: {
					name: {
						contains: arg.category ?? undefined,
					},
				},
			},
			collections: {
				some: {
					name: {
						contains: arg.collection ?? undefined,
					},
				},
			},
			name: {
				contains: arg.name ?? undefined,
			},
			description: {
				contains: arg.description ?? undefined,
			},
		},
	});
	return products.map((product) => ({
		...product,
		images: [],
		reviews: [],
		colors: [],
		sizes: [],
		orderItems: [],
		categories: [],
		collections: [],
	}));
};
