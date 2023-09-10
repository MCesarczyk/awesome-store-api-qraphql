import type { OrderResolvers } from "./../../types.generated";
export const Order: OrderResolvers = {
	async orderItems(parent, _args, ctx) {
		const orderItems = await ctx.prisma.order
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.orderItems();

		return orderItems ?? [];
	},
};
