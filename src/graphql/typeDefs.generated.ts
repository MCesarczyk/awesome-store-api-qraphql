import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 22, end: 30 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 31, end: 33 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 35, end: 37 },
									},
									loc: { start: 35, end: 37 },
								},
								loc: { start: 35, end: 38 },
							},
							directives: [],
							loc: { start: 31, end: 38 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 41, end: 49 },
						},
						loc: { start: 41, end: 49 },
					},
					directives: [],
					loc: { start: 22, end: 49 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 52, end: 62 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 63, end: 68 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 70, end: 73 },
								},
								loc: { start: 70, end: 73 },
							},
							directives: [],
							loc: { start: 63, end: 73 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 75, end: 79 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 81, end: 84 },
								},
								loc: { start: 81, end: 84 },
							},
							directives: [],
							loc: { start: 75, end: 84 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 88, end: 96 },
							},
							loc: { start: 88, end: 96 },
						},
						loc: { start: 87, end: 97 },
					},
					directives: [],
					loc: { start: 52, end: 97 },
				},
			],
			loc: { start: 0, end: 99 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 106, end: 114 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 119, end: 121 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 123, end: 125 },
							},
							loc: { start: 123, end: 125 },
						},
						loc: { start: 123, end: 126 },
					},
					directives: [],
					loc: { start: 119, end: 126 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 129, end: 133 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 135, end: 141 },
							},
							loc: { start: 135, end: 141 },
						},
						loc: { start: 135, end: 142 },
					},
					directives: [],
					loc: { start: 129, end: 142 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 145, end: 154 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 156, end: 164 },
							},
							loc: { start: 156, end: 164 },
						},
						loc: { start: 156, end: 165 },
					},
					directives: [],
					loc: { start: 145, end: 165 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 168, end: 177 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 179, end: 187 },
							},
							loc: { start: 179, end: 187 },
						},
						loc: { start: 179, end: 188 },
					},
					directives: [],
					loc: { start: 168, end: 188 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 191, end: 199 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Product",
									loc: { start: 202, end: 209 },
								},
								loc: { start: 202, end: 209 },
							},
							loc: { start: 201, end: 210 },
						},
						loc: { start: 201, end: 211 },
					},
					directives: [],
					loc: { start: 191, end: 211 },
				},
			],
			loc: { start: 101, end: 213 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 226, end: 231 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 236, end: 246 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 247, end: 249 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 251, end: 253 },
									},
									loc: { start: 251, end: 253 },
								},
								loc: { start: 251, end: 254 },
							},
							directives: [],
							loc: { start: 247, end: 254 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 257, end: 267 },
						},
						loc: { start: 257, end: 267 },
					},
					directives: [],
					loc: { start: 236, end: 267 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 270, end: 281 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 282, end: 287 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 289, end: 292 },
								},
								loc: { start: 289, end: 292 },
							},
							directives: [],
							loc: { start: 282, end: 292 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 294, end: 298 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 300, end: 303 },
								},
								loc: { start: 300, end: 303 },
							},
							directives: [],
							loc: { start: 294, end: 303 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 307, end: 317 },
							},
							loc: { start: 307, end: 317 },
						},
						loc: { start: 306, end: 318 },
					},
					directives: [],
					loc: { start: 270, end: 318 },
				},
			],
			loc: { start: 214, end: 320 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 327, end: 337 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 342, end: 344 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 346, end: 348 },
							},
							loc: { start: 346, end: 348 },
						},
						loc: { start: 346, end: 349 },
					},
					directives: [],
					loc: { start: 342, end: 349 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 352, end: 356 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 358, end: 364 },
							},
							loc: { start: 358, end: 364 },
						},
						loc: { start: 358, end: 365 },
					},
					directives: [],
					loc: { start: 352, end: 365 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 368, end: 377 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 379, end: 387 },
							},
							loc: { start: 379, end: 387 },
						},
						loc: { start: 379, end: 388 },
					},
					directives: [],
					loc: { start: 368, end: 388 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 391, end: 400 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 402, end: 410 },
							},
							loc: { start: 402, end: 410 },
						},
						loc: { start: 402, end: 411 },
					},
					directives: [],
					loc: { start: 391, end: 411 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 414, end: 422 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Product",
									loc: { start: 425, end: 432 },
								},
								loc: { start: 425, end: 432 },
							},
							loc: { start: 424, end: 433 },
						},
						loc: { start: 424, end: 434 },
					},
					directives: [],
					loc: { start: 414, end: 434 },
				},
			],
			loc: { start: 322, end: 436 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Image", loc: { start: 442, end: 447 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 452, end: 454 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 456, end: 458 },
							},
							loc: { start: 456, end: 458 },
						},
						loc: { start: 456, end: 459 },
					},
					directives: [],
					loc: { start: 452, end: 459 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 462, end: 465 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 467, end: 473 },
							},
							loc: { start: 467, end: 473 },
						},
						loc: { start: 467, end: 474 },
					},
					directives: [],
					loc: { start: 462, end: 474 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "alt", loc: { start: 477, end: 480 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 482, end: 488 },
							},
							loc: { start: 482, end: 488 },
						},
						loc: { start: 482, end: 489 },
					},
					directives: [],
					loc: { start: 477, end: 489 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 492, end: 501 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 503, end: 511 },
							},
							loc: { start: 503, end: 511 },
						},
						loc: { start: 503, end: 512 },
					},
					directives: [],
					loc: { start: 492, end: 512 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 515, end: 524 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 526, end: 534 },
							},
							loc: { start: 526, end: 534 },
						},
						loc: { start: 526, end: 535 },
					},
					directives: [],
					loc: { start: 515, end: 535 },
				},
			],
			loc: { start: 437, end: 537 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 543, end: 552 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 557, end: 559 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 561, end: 563 },
							},
							loc: { start: 561, end: 563 },
						},
						loc: { start: 561, end: 564 },
					},
					directives: [],
					loc: { start: 557, end: 564 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 567, end: 575 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 577, end: 580 },
							},
							loc: { start: 577, end: 580 },
						},
						loc: { start: 577, end: 581 },
					},
					directives: [],
					loc: { start: 567, end: 581 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 584, end: 593 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 595, end: 603 },
							},
							loc: { start: 595, end: 603 },
						},
						loc: { start: 595, end: 604 },
					},
					directives: [],
					loc: { start: 584, end: 604 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 607, end: 616 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 618, end: 626 },
							},
							loc: { start: 618, end: 626 },
						},
						loc: { start: 618, end: 627 },
					},
					directives: [],
					loc: { start: 607, end: 627 },
				},
			],
			loc: { start: 538, end: 629 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 642, end: 647 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 652, end: 657 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 658, end: 660 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 662, end: 664 },
									},
									loc: { start: 662, end: 664 },
								},
								loc: { start: 662, end: 665 },
							},
							directives: [],
							loc: { start: 658, end: 665 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 668, end: 673 },
						},
						loc: { start: 668, end: 673 },
					},
					directives: [],
					loc: { start: 652, end: 673 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 676, end: 682 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 683, end: 688 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 690, end: 693 },
								},
								loc: { start: 690, end: 693 },
							},
							directives: [],
							loc: { start: 683, end: 693 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 695, end: 699 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 701, end: 704 },
								},
								loc: { start: 701, end: 704 },
							},
							directives: [],
							loc: { start: 695, end: 704 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 708, end: 713 },
							},
							loc: { start: 708, end: 713 },
						},
						loc: { start: 707, end: 714 },
					},
					directives: [],
					loc: { start: 676, end: 714 },
				},
			],
			loc: { start: 630, end: 716 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 723, end: 728 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 733, end: 735 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 737, end: 739 },
							},
							loc: { start: 737, end: 739 },
						},
						loc: { start: 737, end: 740 },
					},
					directives: [],
					loc: { start: 733, end: 740 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 743, end: 748 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 750, end: 753 },
							},
							loc: { start: 750, end: 753 },
						},
						loc: { start: 750, end: 754 },
					},
					directives: [],
					loc: { start: 743, end: 754 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 757, end: 763 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 765, end: 771 },
							},
							loc: { start: 765, end: 771 },
						},
						loc: { start: 765, end: 772 },
					},
					directives: [],
					loc: { start: 757, end: 772 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 775, end: 785 },
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
										loc: { start: 788, end: 797 },
									},
									loc: { start: 788, end: 797 },
								},
								loc: { start: 788, end: 798 },
							},
							loc: { start: 787, end: 799 },
						},
						loc: { start: 787, end: 800 },
					},
					directives: [],
					loc: { start: 775, end: 800 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 803, end: 812 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 814, end: 822 },
							},
							loc: { start: 814, end: 822 },
						},
						loc: { start: 814, end: 823 },
					},
					directives: [],
					loc: { start: 803, end: 823 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 826, end: 835 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 837, end: 845 },
							},
							loc: { start: 837, end: 845 },
						},
						loc: { start: 837, end: 846 },
					},
					directives: [],
					loc: { start: 826, end: 846 },
				},
			],
			loc: { start: 718, end: 848 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 861, end: 866 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 871, end: 878 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 879, end: 881 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 883, end: 885 },
									},
									loc: { start: 883, end: 885 },
								},
								loc: { start: 883, end: 886 },
							},
							directives: [],
							loc: { start: 879, end: 886 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 889, end: 896 },
						},
						loc: { start: 889, end: 896 },
					},
					directives: [],
					loc: { start: 871, end: 896 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 899, end: 907 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 908, end: 913 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 915, end: 918 },
								},
								loc: { start: 915, end: 918 },
							},
							directives: [],
							loc: { start: 908, end: 918 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 920, end: 924 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 926, end: 929 },
								},
								loc: { start: 926, end: 929 },
							},
							directives: [],
							loc: { start: 920, end: 929 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 933, end: 940 },
							},
							loc: { start: 933, end: 940 },
						},
						loc: { start: 932, end: 941 },
					},
					directives: [],
					loc: { start: 899, end: 941 },
				},
			],
			loc: { start: 849, end: 943 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 950, end: 957 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 962, end: 964 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 966, end: 968 },
							},
							loc: { start: 966, end: 968 },
						},
						loc: { start: 966, end: 969 },
					},
					directives: [],
					loc: { start: 962, end: 969 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 972, end: 976 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 978, end: 984 },
							},
							loc: { start: 978, end: 984 },
						},
						loc: { start: 978, end: 985 },
					},
					directives: [],
					loc: { start: 972, end: 985 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 988, end: 992 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 994, end: 1000 },
							},
							loc: { start: 994, end: 1000 },
						},
						loc: { start: 994, end: 1001 },
					},
					directives: [],
					loc: { start: 988, end: 1001 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1004, end: 1015 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1017, end: 1023 },
							},
							loc: { start: 1017, end: 1023 },
						},
						loc: { start: 1017, end: 1024 },
					},
					directives: [],
					loc: { start: 1004, end: 1024 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1027, end: 1032 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1034, end: 1037 },
							},
							loc: { start: 1034, end: 1037 },
						},
						loc: { start: 1034, end: 1038 },
					},
					directives: [],
					loc: { start: 1027, end: 1038 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 1041, end: 1047 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Image",
									loc: { start: 1050, end: 1055 },
								},
								loc: { start: 1050, end: 1055 },
							},
							loc: { start: 1049, end: 1056 },
						},
						loc: { start: 1049, end: 1057 },
					},
					directives: [],
					loc: { start: 1041, end: 1057 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1060, end: 1069 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1071, end: 1079 },
							},
							loc: { start: 1071, end: 1079 },
						},
						loc: { start: 1071, end: 1080 },
					},
					directives: [],
					loc: { start: 1060, end: 1080 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1083, end: 1092 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1094, end: 1102 },
							},
							loc: { start: 1094, end: 1102 },
						},
						loc: { start: 1094, end: 1103 },
					},
					directives: [],
					loc: { start: 1083, end: 1103 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 1106, end: 1113 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Review",
									loc: { start: 1116, end: 1122 },
								},
								loc: { start: 1116, end: 1122 },
							},
							loc: { start: 1115, end: 1123 },
						},
						loc: { start: 1115, end: 1124 },
					},
					directives: [],
					loc: { start: 1106, end: 1124 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1127, end: 1137 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "OrderItem",
									loc: { start: 1140, end: 1149 },
								},
								loc: { start: 1140, end: 1149 },
							},
							loc: { start: 1139, end: 1150 },
						},
						loc: { start: 1139, end: 1151 },
					},
					directives: [],
					loc: { start: 1127, end: 1151 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1154, end: 1164 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Category",
									loc: { start: 1167, end: 1175 },
								},
								loc: { start: 1167, end: 1175 },
							},
							loc: { start: 1166, end: 1176 },
						},
						loc: { start: 1166, end: 1177 },
					},
					directives: [],
					loc: { start: 1154, end: 1177 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 1180, end: 1191 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Collection",
									loc: { start: 1194, end: 1204 },
								},
								loc: { start: 1194, end: 1204 },
							},
							loc: { start: 1193, end: 1205 },
						},
						loc: { start: 1193, end: 1206 },
					},
					directives: [],
					loc: { start: 1180, end: 1206 },
				},
			],
			loc: { start: 945, end: 1208 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1214, end: 1220 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1225, end: 1227 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1229, end: 1231 },
							},
							loc: { start: 1229, end: 1231 },
						},
						loc: { start: 1229, end: 1232 },
					},
					directives: [],
					loc: { start: 1225, end: 1232 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1235, end: 1240 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1242, end: 1248 },
							},
							loc: { start: 1242, end: 1248 },
						},
						loc: { start: 1242, end: 1249 },
					},
					directives: [],
					loc: { start: 1235, end: 1249 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1252, end: 1263 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1265, end: 1271 },
							},
							loc: { start: 1265, end: 1271 },
						},
						loc: { start: 1265, end: 1272 },
					},
					directives: [],
					loc: { start: 1252, end: 1272 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 1275, end: 1281 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1283, end: 1286 },
							},
							loc: { start: 1283, end: 1286 },
						},
						loc: { start: 1283, end: 1287 },
					},
					directives: [],
					loc: { start: 1275, end: 1287 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1290, end: 1299 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1301, end: 1309 },
							},
							loc: { start: 1301, end: 1309 },
						},
						loc: { start: 1301, end: 1310 },
					},
					directives: [],
					loc: { start: 1290, end: 1310 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1313, end: 1322 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1324, end: 1332 },
							},
							loc: { start: 1324, end: 1332 },
						},
						loc: { start: 1324, end: 1333 },
					},
					directives: [],
					loc: { start: 1313, end: 1333 },
				},
			],
			loc: { start: 1209, end: 1335 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1341, end: 1346 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1336, end: 1346 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1355, end: 1363 },
			},
			directives: [],
			loc: { start: 1348, end: 1363 },
		},
	],
	loc: { start: 0, end: 1364 },
} as unknown as DocumentNode;
