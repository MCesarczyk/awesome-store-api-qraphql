import type { QueryResolvers } from "./../../../types.generated";
export const collections: NonNullable<QueryResolvers["collections"]> = async (
	_parent,
	arg,
	ctx,
) => {
	const collections = await ctx.prisma.collection.findMany({
		where: {
			slug: "slug" in arg ? (arg.slug as string) : undefined,
		},
		skip: arg.skip ?? undefined,
		take: arg.first ?? undefined,
		include: {
			products: true,
		},
	});
	return collections.map((collection) => ({ ...collection, products: [] }));
};
