import type { MutationResolvers } from "./../../../types.generated";

export const createOrder: NonNullable<
	MutationResolvers["createOrder"]
> = async (_parent, arg, ctx) => {
	const order = await ctx.prisma.order.create({
		data: {
			status: "PENDING",
			total: arg.total || 0,
		},
	});

	return { ...order, orderItems: [] };
};
