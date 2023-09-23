import type { ProductColorResolvers } from "./../../types.generated";

export const ProductColor: ProductColorResolvers = {
	async products(parent, _args, ctx) {
		const products = await ctx.prisma.productColor
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.products();

		return (
			products?.map((product) => ({
				...product,
				images: [],
				colors: [],
				sizes: [],
				reviews: [],
				orderItems: [],
				categories: [],
				collections: [],
			})) ?? []
		);
	},
};
