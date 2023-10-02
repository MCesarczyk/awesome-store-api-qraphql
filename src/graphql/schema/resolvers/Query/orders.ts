import type { QueryResolvers } from "./../../../types.generated";

export const orders: NonNullable<QueryResolvers["orders"]> = async (
	_parent,
	arg,
	_ctx,
) => {
	const orders = await _ctx.prisma.order.findMany({
		where: {
			status: arg.status || undefined,
		},
		include: {
			orderItems: true,
		},
	});
	return orders.map((order) => ({
		...order,
		orderItems: order.orderItems ?? [],
	}));
};
