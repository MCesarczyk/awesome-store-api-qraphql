import type { QueryResolvers } from "./../../../types.generated";
export const category: NonNullable<QueryResolvers["category"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	const category = await _ctx.prisma.category.findUnique({
		where: {
			id: _arg.id,
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
