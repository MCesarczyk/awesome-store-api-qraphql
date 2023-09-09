import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	reviews(parent, _args, ctx) {
		return ctx.prisma.review.findMany({
			where: {
				productId: parent.id,
			},
		});
	},
};
