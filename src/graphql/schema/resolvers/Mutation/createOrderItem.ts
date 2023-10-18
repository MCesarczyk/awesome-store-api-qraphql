import type { MutationResolvers } from "./../../../types.generated";
export const createOrderItem: NonNullable<
	MutationResolvers["createOrderItem"]
> = async (_parent, arg, ctx) => {
	const orderItem = await ctx.prisma.orderItem.create({
		data: {
			quantity: arg.quantity || 0,
			total: arg.total || 0,
			product: { connect: { id: arg.product.id } },
			order: { connect: { id: arg.order.id } },
		},
	});

	return { ...orderItem };
};
