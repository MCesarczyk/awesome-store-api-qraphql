import type { QueryResolvers } from "./../../../types.generated";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
	_parent,
	arg,
	ctx,
) => {
	const categories = await ctx.prisma.category.findMany({
		where: {
			slug: "slug" in arg ? (arg.slug as string) : undefined,
		},
		skip: arg.skip ?? undefined,
		take: arg.first ?? undefined,
		include: {
			products: true,
		},
	});
	return categories.map((category) => ({ ...category, products: [] }));
};
