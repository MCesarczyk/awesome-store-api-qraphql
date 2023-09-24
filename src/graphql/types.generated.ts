import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from "graphql";
import { Context, Mapper } from "../types.js";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
};

export type Category = {
	__typename?: "Category";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Maybe<Product>>;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type CategoryProductsArgs = {
	first?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Collection = {
	__typename?: "Collection";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Maybe<Product>>;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type CollectionProductsArgs = {
	first?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Image = {
	__typename?: "Image";
	alt: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
	url: Scalars["String"]["output"];
};

export type Mutation = {
	__typename?: "Mutation";
	createOrder: Order;
	deleteOrder: Order;
	updateOrder: Order;
};

export type MutationCreateOrderArgs = {
	orderItem: Array<OrderItemInput>;
};

export type MutationDeleteOrderArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationUpdateOrderArgs = {
	id: Scalars["ID"]["input"];
	orderItems?: InputMaybe<Array<OrderItemInput>>;
	status?: InputMaybe<Scalars["String"]["input"]>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Order = {
	__typename?: "Order";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	orderItems: Array<OrderItem>;
	status: Scalars["String"]["output"];
	total: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type OrderItem = {
	__typename?: "OrderItem";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	quantity: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type OrderItemInput = {
	id: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type Product = {
	__typename?: "Product";
	categories: Array<Category>;
	collections: Array<Collection>;
	colors: Array<ProductColor>;
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	images: Array<Image>;
	name: Scalars["String"]["output"];
	orderItems: Array<OrderItem>;
	price: Scalars["Int"]["output"];
	reviews: Array<Review>;
	sizes: Array<ProductSize>;
	slug: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ProductColor = {
	__typename?: "ProductColor";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	updatedAt: Scalars["DateTime"]["output"];
	value: Scalars["String"]["output"];
};

export type ProductSize = {
	__typename?: "ProductSize";
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	updatedAt: Scalars["DateTime"]["output"];
	value: Scalars["Int"]["output"];
};

export type ProductsInputFilter = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Query = {
	__typename?: "Query";
	categories: Array<Maybe<Category>>;
	category?: Maybe<Category>;
	collection?: Maybe<Collection>;
	collections?: Maybe<Array<Maybe<Collection>>>;
	order?: Maybe<Order>;
	orders?: Maybe<Array<Maybe<Order>>>;
	product?: Maybe<Product>;
	products?: Maybe<Array<Maybe<Product>>>;
};

export type QueryCategoriesArgs = {
	first?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCategoryArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryCollectionArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryCollectionsArgs = {
	first?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryOrderArgs = {
	id: Scalars["ID"]["input"];
	status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryOrdersArgs = {
	first?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	status?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryProductArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryProductsArgs = {
	category?: InputMaybe<Scalars["String"]["input"]>;
	collection?: InputMaybe<Scalars["String"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	where?: InputMaybe<Scalars["String"]["input"]>;
};

export type Review = {
	__typename?: "Review";
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	rating: Scalars["Int"]["output"];
	title: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Category: ResolverTypeWrapper<Mapper<Category>>;
	String: ResolverTypeWrapper<Mapper<Scalars["String"]["output"]>>;
	ID: ResolverTypeWrapper<Mapper<Scalars["ID"]["output"]>>;
	Int: ResolverTypeWrapper<Mapper<Scalars["Int"]["output"]>>;
	Collection: ResolverTypeWrapper<Mapper<Collection>>;
	DateTime: ResolverTypeWrapper<Mapper<Scalars["DateTime"]["output"]>>;
	Image: ResolverTypeWrapper<Mapper<Image>>;
	Mutation: ResolverTypeWrapper<{}>;
	Order: ResolverTypeWrapper<Mapper<Order>>;
	OrderItem: ResolverTypeWrapper<Mapper<OrderItem>>;
	OrderItemInput: ResolverTypeWrapper<Mapper<OrderItemInput>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	ProductColor: ResolverTypeWrapper<Mapper<ProductColor>>;
	ProductSize: ResolverTypeWrapper<Mapper<ProductSize>>;
	ProductsInputFilter: ResolverTypeWrapper<Mapper<ProductsInputFilter>>;
	Query: ResolverTypeWrapper<{}>;
	Review: ResolverTypeWrapper<Mapper<Review>>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars["Boolean"]["output"]>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Category: Mapper<Category>;
	String: Mapper<Scalars["String"]["output"]>;
	ID: Mapper<Scalars["ID"]["output"]>;
	Int: Mapper<Scalars["Int"]["output"]>;
	Collection: Mapper<Collection>;
	DateTime: Mapper<Scalars["DateTime"]["output"]>;
	Image: Mapper<Image>;
	Mutation: {};
	Order: Mapper<Order>;
	OrderItem: Mapper<OrderItem>;
	OrderItemInput: Mapper<OrderItemInput>;
	Product: Mapper<Product>;
	ProductColor: Mapper<ProductColor>;
	ProductSize: Mapper<ProductSize>;
	ProductsInputFilter: Mapper<ProductsInputFilter>;
	Query: {};
	Review: Mapper<Review>;
	Boolean: Mapper<Scalars["Boolean"]["output"]>;
};

export type CategoryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<Maybe<ResolversTypes["Product"]>>,
		ParentType,
		ContextType,
		Partial<CategoryProductsArgs>
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<Maybe<ResolversTypes["Product"]>>,
		ParentType,
		ContextType,
		Partial<CollectionProductsArgs>
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

export type ImageResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Image"] = ResolversParentTypes["Image"],
> = {
	alt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	createOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateOrderArgs, "orderItem">
	>;
	deleteOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteOrderArgs, "id">
	>;
	updateOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateOrderArgs, "id">
	>;
};

export type OrderResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	orderItems?: Resolver<
		Array<ResolversTypes["OrderItem"]>,
		ParentType,
		ContextType
	>;
	status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["OrderItem"] = ResolversParentTypes["OrderItem"],
> = {
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	categories?: Resolver<
		Array<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	collections?: Resolver<
		Array<ResolversTypes["Collection"]>,
		ParentType,
		ContextType
	>;
	colors?: Resolver<
		Array<ResolversTypes["ProductColor"]>,
		ParentType,
		ContextType
	>;
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	images?: Resolver<Array<ResolversTypes["Image"]>, ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	orderItems?: Resolver<
		Array<ResolversTypes["OrderItem"]>,
		ParentType,
		ContextType
	>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	reviews?: Resolver<Array<ResolversTypes["Review"]>, ParentType, ContextType>;
	sizes?: Resolver<
		Array<ResolversTypes["ProductSize"]>,
		ParentType,
		ContextType
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductColorResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["ProductColor"] = ResolversParentTypes["ProductColor"],
> = {
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType
	>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSizeResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["ProductSize"] = ResolversParentTypes["ProductSize"],
> = {
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType
	>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	value?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	categories?: Resolver<
		Array<Maybe<ResolversTypes["Category"]>>,
		ParentType,
		ContextType,
		Partial<QueryCategoriesArgs>
	>;
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType,
		RequireFields<QueryCategoryArgs, "id">
	>;
	collection?: Resolver<
		Maybe<ResolversTypes["Collection"]>,
		ParentType,
		ContextType,
		RequireFields<QueryCollectionArgs, "id">
	>;
	collections?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Collection"]>>>,
		ParentType,
		ContextType,
		Partial<QueryCollectionsArgs>
	>;
	order?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<QueryOrderArgs, "id">
	>;
	orders?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Order"]>>>,
		ParentType,
		ContextType,
		Partial<QueryOrdersArgs>
	>;
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryProductArgs, "id">
	>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType,
		Partial<QueryProductsArgs>
	>;
};

export type ReviewResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
	Category?: CategoryResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	Image?: ImageResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	OrderItem?: OrderItemResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	ProductColor?: ProductColorResolvers<ContextType>;
	ProductSize?: ProductSizeResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Review?: ReviewResolvers<ContextType>;
};
