import type { Image, QueryResolvers } from "./../../../types.generated";

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
		image: product.image as unknown as Image,
		reviews: [],
		orderItems: [],
		categories: [
			{
				...product.categories[0],
				products: [],
			}
		],
		collections: [
			{
				...product.collections[0],
				products: [],
			}
		],
	};
};
