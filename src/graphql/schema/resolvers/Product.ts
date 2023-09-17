import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	async images(parent, _args, ctx) {
		const images = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.images();

		return images ?? [];
	},

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
		const response = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.categories();

		const categories = response?.map((category) => ({
			...category,
			products: [],
		}));

		return categories ?? [];
	},

	async collections(parent, _args, ctx) {
		const response = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.collections();

		const collections = response?.map((collection) => ({
			...collection,
			products: [],
		}));

		return collections ?? [];
	},
};
