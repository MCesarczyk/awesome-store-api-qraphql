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

	async categories(parent, _args, ctx) {
		const categories = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.categories();

		return categories ?? [];
	},

	async collections(parent, _args, ctx) {
		const collections = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.collections();

		return collections ?? [];
	},
};
