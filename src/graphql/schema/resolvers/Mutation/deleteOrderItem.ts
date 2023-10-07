import type { MutationResolvers } from "./../../../types.generated";
export const deleteOrderItem: NonNullable<
	MutationResolvers["deleteOrderItem"]
> = async (_parent, arg, ctx) => {
	const orderItem = await ctx.prisma.orderItem.delete({
		where: {
			id: arg.id,
		},
	});

	return { ...orderItem };
};
