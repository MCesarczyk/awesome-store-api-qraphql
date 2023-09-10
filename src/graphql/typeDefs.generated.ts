import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 5, end: 14 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 19, end: 21 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 23, end: 25 } },
							loc: { start: 23, end: 25 },
						},
						loc: { start: 23, end: 26 },
					},
					directives: [],
					loc: { start: 19, end: 26 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 29, end: 37 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 39, end: 42 } },
							loc: { start: 39, end: 42 },
						},
						loc: { start: 39, end: 43 },
					},
					directives: [],
					loc: { start: 29, end: 43 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 46, end: 55 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 57, end: 65 },
							},
							loc: { start: 57, end: 65 },
						},
						loc: { start: 57, end: 66 },
					},
					directives: [],
					loc: { start: 46, end: 66 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 69, end: 78 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 80, end: 88 },
							},
							loc: { start: 80, end: 88 },
						},
						loc: { start: 80, end: 89 },
					},
					directives: [],
					loc: { start: 69, end: 89 },
				},
			],
			loc: { start: 0, end: 91 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 104, end: 109 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 114, end: 119 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 120, end: 122 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 124, end: 126 },
									},
									loc: { start: 124, end: 126 },
								},
								loc: { start: 124, end: 127 },
							},
							directives: [],
							loc: { start: 120, end: 127 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 130, end: 135 },
						},
						loc: { start: 130, end: 135 },
					},
					directives: [],
					loc: { start: 114, end: 135 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 138, end: 144 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 145, end: 150 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 152, end: 155 },
								},
								loc: { start: 152, end: 155 },
							},
							directives: [],
							loc: { start: 145, end: 155 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 157, end: 161 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 163, end: 166 },
								},
								loc: { start: 163, end: 166 },
							},
							directives: [],
							loc: { start: 157, end: 166 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 170, end: 175 },
							},
							loc: { start: 170, end: 175 },
						},
						loc: { start: 169, end: 176 },
					},
					directives: [],
					loc: { start: 138, end: 176 },
				},
			],
			loc: { start: 92, end: 178 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 185, end: 190 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 195, end: 197 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 199, end: 201 },
							},
							loc: { start: 199, end: 201 },
						},
						loc: { start: 199, end: 202 },
					},
					directives: [],
					loc: { start: 195, end: 202 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 205, end: 210 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 212, end: 215 },
							},
							loc: { start: 212, end: 215 },
						},
						loc: { start: 212, end: 216 },
					},
					directives: [],
					loc: { start: 205, end: 216 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 219, end: 225 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 227, end: 233 },
							},
							loc: { start: 227, end: 233 },
						},
						loc: { start: 227, end: 234 },
					},
					directives: [],
					loc: { start: 219, end: 234 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 237, end: 247 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderItem",
										loc: { start: 250, end: 259 },
									},
									loc: { start: 250, end: 259 },
								},
								loc: { start: 250, end: 260 },
							},
							loc: { start: 249, end: 261 },
						},
						loc: { start: 249, end: 262 },
					},
					directives: [],
					loc: { start: 237, end: 262 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 265, end: 274 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 276, end: 284 },
							},
							loc: { start: 276, end: 284 },
						},
						loc: { start: 276, end: 285 },
					},
					directives: [],
					loc: { start: 265, end: 285 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 288, end: 297 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 299, end: 307 },
							},
							loc: { start: 299, end: 307 },
						},
						loc: { start: 299, end: 308 },
					},
					directives: [],
					loc: { start: 288, end: 308 },
				},
			],
			loc: { start: 180, end: 310 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 323, end: 328 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 333, end: 340 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 341, end: 343 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 345, end: 347 },
									},
									loc: { start: 345, end: 347 },
								},
								loc: { start: 345, end: 348 },
							},
							directives: [],
							loc: { start: 341, end: 348 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 351, end: 358 },
						},
						loc: { start: 351, end: 358 },
					},
					directives: [],
					loc: { start: 333, end: 358 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 361, end: 369 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 370, end: 375 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 377, end: 380 },
								},
								loc: { start: 377, end: 380 },
							},
							directives: [],
							loc: { start: 370, end: 380 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 382, end: 386 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 388, end: 391 },
								},
								loc: { start: 388, end: 391 },
							},
							directives: [],
							loc: { start: 382, end: 391 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 395, end: 402 },
							},
							loc: { start: 395, end: 402 },
						},
						loc: { start: 394, end: 403 },
					},
					directives: [],
					loc: { start: 361, end: 403 },
				},
			],
			loc: { start: 311, end: 405 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Image", loc: { start: 412, end: 417 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 422, end: 425 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 427, end: 433 },
							},
							loc: { start: 427, end: 433 },
						},
						loc: { start: 427, end: 434 },
					},
					directives: [],
					loc: { start: 422, end: 434 },
				},
			],
			loc: { start: 407, end: 436 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 443, end: 450 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 455, end: 457 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 459, end: 461 },
							},
							loc: { start: 459, end: 461 },
						},
						loc: { start: 459, end: 462 },
					},
					directives: [],
					loc: { start: 455, end: 462 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 465, end: 469 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 471, end: 477 },
							},
							loc: { start: 471, end: 477 },
						},
						loc: { start: 471, end: 478 },
					},
					directives: [],
					loc: { start: 465, end: 478 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 481, end: 485 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 487, end: 493 },
							},
							loc: { start: 487, end: 493 },
						},
						loc: { start: 487, end: 494 },
					},
					directives: [],
					loc: { start: 481, end: 494 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 497, end: 508 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 510, end: 516 },
							},
							loc: { start: 510, end: 516 },
						},
						loc: { start: 510, end: 517 },
					},
					directives: [],
					loc: { start: 497, end: 517 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 520, end: 525 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 527, end: 530 },
							},
							loc: { start: 527, end: 530 },
						},
						loc: { start: 527, end: 531 },
					},
					directives: [],
					loc: { start: 520, end: 531 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 534, end: 540 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Image",
										loc: { start: 543, end: 548 },
									},
									loc: { start: 543, end: 548 },
								},
								loc: { start: 543, end: 549 },
							},
							loc: { start: 542, end: 550 },
						},
						loc: { start: 542, end: 551 },
					},
					directives: [],
					loc: { start: 534, end: 551 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 554, end: 561 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Review",
										loc: { start: 564, end: 570 },
									},
									loc: { start: 564, end: 570 },
								},
								loc: { start: 564, end: 571 },
							},
							loc: { start: 563, end: 572 },
						},
						loc: { start: 563, end: 573 },
					},
					directives: [],
					loc: { start: 554, end: 573 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 576, end: 586 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderItem",
										loc: { start: 589, end: 598 },
									},
									loc: { start: 589, end: 598 },
								},
								loc: { start: 589, end: 599 },
							},
							loc: { start: 588, end: 600 },
						},
						loc: { start: 588, end: 601 },
					},
					directives: [],
					loc: { start: 576, end: 601 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 604, end: 613 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 615, end: 623 },
							},
							loc: { start: 615, end: 623 },
						},
						loc: { start: 615, end: 624 },
					},
					directives: [],
					loc: { start: 604, end: 624 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 627, end: 636 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 638, end: 646 },
							},
							loc: { start: 638, end: 646 },
						},
						loc: { start: 638, end: 647 },
					},
					directives: [],
					loc: { start: 627, end: 647 },
				},
			],
			loc: { start: 438, end: 649 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 655, end: 661 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 666, end: 668 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 670, end: 672 },
							},
							loc: { start: 670, end: 672 },
						},
						loc: { start: 670, end: 673 },
					},
					directives: [],
					loc: { start: 666, end: 673 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 676, end: 681 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 683, end: 689 },
							},
							loc: { start: 683, end: 689 },
						},
						loc: { start: 683, end: 690 },
					},
					directives: [],
					loc: { start: 676, end: 690 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 693, end: 704 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 706, end: 712 },
							},
							loc: { start: 706, end: 712 },
						},
						loc: { start: 706, end: 713 },
					},
					directives: [],
					loc: { start: 693, end: 713 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 716, end: 722 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 724, end: 727 },
							},
							loc: { start: 724, end: 727 },
						},
						loc: { start: 724, end: 728 },
					},
					directives: [],
					loc: { start: 716, end: 728 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 731, end: 740 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 742, end: 750 },
							},
							loc: { start: 742, end: 750 },
						},
						loc: { start: 742, end: 751 },
					},
					directives: [],
					loc: { start: 731, end: 751 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 754, end: 763 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 765, end: 773 },
							},
							loc: { start: 765, end: 773 },
						},
						loc: { start: 765, end: 774 },
					},
					directives: [],
					loc: { start: 754, end: 774 },
				},
			],
			loc: { start: 650, end: 776 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 782, end: 787 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 777, end: 787 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 796, end: 804 } },
			directives: [],
			loc: { start: 789, end: 804 },
		},
	],
	loc: { start: 0, end: 805 },
} as unknown as DocumentNode;
