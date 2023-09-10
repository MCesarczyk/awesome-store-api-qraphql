import type { QueryResolvers } from "./../../../types.generated";

export const orders: NonNullable<QueryResolvers["orders"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	const orders = await _ctx.prisma.order.findMany();
	return orders.map((order) => ({ ...order, orderItems: [] }));
};
