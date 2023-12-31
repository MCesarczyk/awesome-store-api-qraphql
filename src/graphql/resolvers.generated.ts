/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { Image } from "./schema/resolvers/Image";
import { createOrder as Mutation_createOrder } from "./schema/resolvers/Mutation/createOrder";
import { createOrderItem as Mutation_createOrderItem } from "./schema/resolvers/Mutation/createOrderItem";
import { deleteOrder as Mutation_deleteOrder } from "./schema/resolvers/Mutation/deleteOrder";
import { deleteOrderItem as Mutation_deleteOrderItem } from "./schema/resolvers/Mutation/deleteOrderItem";
import { updateOrder as Mutation_updateOrder } from "./schema/resolvers/Mutation/updateOrder";
import { updateOrderItem as Mutation_updateOrderItem } from "./schema/resolvers/Mutation/updateOrderItem";
import { updateProductQuantity as Mutation_updateProductQuantity } from "./schema/resolvers/Mutation/updateProductQuantity";
import { Order } from "./schema/resolvers/Order";
import { OrderItem } from "./schema/resolvers/OrderItem";
import { Product } from "./schema/resolvers/Product";
import { ProductColor } from "./schema/resolvers/ProductColor";
import { ProductSize } from "./schema/resolvers/ProductSize";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { orders as Query_orders } from "./schema/resolvers/Query/orders";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { Review } from "./schema/resolvers/Review";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
	Query: {
		categories: Query_categories,
		category: Query_category,
		collection: Query_collection,
		collections: Query_collections,
		order: Query_order,
		orders: Query_orders,
		product: Query_product,
		products: Query_products,
	},
	Mutation: {
		createOrder: Mutation_createOrder,
		createOrderItem: Mutation_createOrderItem,
		deleteOrder: Mutation_deleteOrder,
		deleteOrderItem: Mutation_deleteOrderItem,
		updateOrder: Mutation_updateOrder,
		updateOrderItem: Mutation_updateOrderItem,
		updateProductQuantity: Mutation_updateProductQuantity,
	},

	Category: Category,
	Collection: Collection,
	Image: Image,
	Order: Order,
	OrderItem: OrderItem,
	Product: Product,
	ProductColor: ProductColor,
	ProductSize: ProductSize,
	Review: Review,
	DateTime: DateTimeResolver,
};
