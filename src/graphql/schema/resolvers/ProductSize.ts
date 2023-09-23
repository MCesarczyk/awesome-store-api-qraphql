import type { ProductSizeResolvers } from "./../../types.generated";

export const ProductSize: ProductSizeResolvers = {
	async products(parent, _args, ctx) {
		const products = await ctx.prisma.productSize
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
