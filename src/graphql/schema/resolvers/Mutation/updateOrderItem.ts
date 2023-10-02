import type { MutationResolvers } from "./../../../types.generated";
export const updateOrderItem: NonNullable<
	MutationResolvers["updateOrderItem"]
> = async (_parent, arg, ctx) => {
	const orderItem = await ctx.prisma.orderItem.upsert({
		where: {
			id: arg.id,
		},
		update: {
			quantity: arg.quantity,
			total: arg.total,
		},
		create: {
			quantity: arg.quantity,
			total: arg.total,
			product: { connect: { id: arg.product.id } },
			order: { connect: { id: arg.order.id } },
		},
	});

	return { ...orderItem };
};
