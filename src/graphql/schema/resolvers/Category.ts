import type { CategoryResolvers } from "./../../types.generated";

export const Category: CategoryResolvers = {
	async products(parent, _args, ctx) {
		const products = await ctx.prisma.category
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
				reviews: [],
				orderItems: [],
				categories: [],
				collections: [],
			})) ?? []
		);
	},
};
