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
		reviews: [],
		orderItems: [],
		categories: [
			{
				...product.categories[0],
				products: [],
			},
		],
		collections: [
			{
				...product.collections[0],
				products: [],
			},
		],
	};
};
