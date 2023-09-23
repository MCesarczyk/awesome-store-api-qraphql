import type { QueryResolvers } from "./../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	arg,
	ctx,
) => {
	const product = await ctx.prisma.product.findUnique({
		where: {
			id: arg.id,
		},
		include: {
			images: true,
			colors: true,
			sizes: true,
			reviews: true,
			orderItems: true,
			categories: true,
			collections: true,
		},
	});

	if (!product) {
		return null;
	}

	return {
		...product,
		images: [],
		colors: [],
		sizes: [],
		reviews: [],
		orderItems: [],
		categories: [],
		collections: [],
	};
};
