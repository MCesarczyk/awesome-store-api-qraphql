import type { CollectionResolvers } from "./../../types.generated";

export const Collection: CollectionResolvers = {
	async products(parent, _args, ctx) {
		const products = await ctx.prisma.collection
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
