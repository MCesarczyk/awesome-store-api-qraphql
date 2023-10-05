import type { MutationResolvers } from "./../../../types.generated";
export const updateProductQuantity: NonNullable<
	MutationResolvers["updateProductQuantity"]
> = async (_parent, arg, ctx) => {
	const orderItem = await ctx.prisma.orderItem.update({
		where: {
			id: arg.productId,
		},
		data: {
			quantity: arg.quantity,
			total: arg.total,
		},
	});

	return { ...orderItem };
};
