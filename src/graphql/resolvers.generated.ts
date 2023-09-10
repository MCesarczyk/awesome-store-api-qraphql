/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Image } from "./schema/resolvers/Image";
import { Order } from "./schema/resolvers/Order";
import { OrderItem } from "./schema/resolvers/OrderItem";
import { Product } from "./schema/resolvers/Product";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { orders as Query_orders } from "./schema/resolvers/Query/orders";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { Review } from "./schema/resolvers/Review";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
	Query: {
		order: Query_order,
		orders: Query_orders,
		product: Query_product,
		products: Query_products,
	},

	Image: Image,
	Order: Order,
	OrderItem: OrderItem,
	Product: Product,
	Review: Review,
	DateTime: DateTimeResolver,
};
