import type { CollectionResolvers, Image } from "./../../types.generated";

export const Collection: CollectionResolvers = {
	async products(parent, _args, ctx) {
		const products = await ctx.prisma.collection
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.products();

		return products?.map(prod => ({
			...prod,
			image: prod.image as unknown as Image,
		})) ?? [];
	},
};
