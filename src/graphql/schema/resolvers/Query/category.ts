import type { QueryResolvers } from "./../../../types.generated";
export const category: NonNullable<QueryResolvers["category"]> = async (
	_parent,
	arg,
	ctx,
) => {
	const category = await ctx.prisma.category.findUnique({
		where: {
			id: arg.id,
		},
		include: {
			products: true,
		},
	});

	if (!category) {
		return null;
	}

	return { ...category, products: [] };
};
