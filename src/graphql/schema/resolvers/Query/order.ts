import type { QueryResolvers } from "./../../../types.generated";

export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent,
	arg,
	ctx,
) => {
	const order = await ctx.prisma.order.findUnique({
		where: {
			id: arg.id,
			status: arg.status || undefined,
		},
	});

	if (!order) {
		return null;
	}

	return { ...order, orderItems: [] };
};
