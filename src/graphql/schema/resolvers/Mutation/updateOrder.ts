import type { MutationResolvers } from "./../../../types.generated";
export const updateOrder: NonNullable<
	MutationResolvers["updateOrder"]
> = async (_parent, arg, ctx) => {
	const order = await ctx.prisma.order.update({
		where: {
			id: arg.id,
		},
		data: {
			status: arg.status || undefined,
			total: arg.total || undefined,
			orderItems: {
				upsert: arg.orderItems?.map((orderItem) => ({
					where: {
						id: orderItem.id,
					},
					create: {
						quantity: orderItem.quantity,
						product: {
							connect: {
								id: orderItem.id,
							},
						},
						order: {
							connect: {
								id: arg.id,
							},
						},
					},
					update: {
						quantity: orderItem.quantity,
					},
				})),
			},
		},
	});

	return { ...order, orderItems: [] };
};
