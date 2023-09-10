import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	async reviews(parent, _args, ctx) {
		const reviews = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.reviews();

		return reviews ?? [];
	},

	async orderItems(parent, _args, ctx) {
		const orderItems = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.orderItems();

		return orderItems ?? [];
	},
};
