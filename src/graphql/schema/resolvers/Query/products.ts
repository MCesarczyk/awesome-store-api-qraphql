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
					slug: "category" in arg ? (arg.category as string) : undefined,
				},
			},
		},
	});
	return products.map((product) => ({
		...product,
		images: [],
		reviews: [],
		orderItems: [],
		categories: [],
		collections: [],
	}));
};
