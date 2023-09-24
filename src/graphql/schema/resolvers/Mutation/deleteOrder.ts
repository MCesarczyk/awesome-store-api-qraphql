import type { MutationResolvers } from "./../../../types.generated";
export const deleteOrder: NonNullable<
	MutationResolvers["deleteOrder"]
> = async (_parent, arg, ctx) => {
	const order = await ctx.prisma.order.delete({
		where: {
			id: arg.id,
		},
	});

	return { ...order, orderItems: [] };
};
