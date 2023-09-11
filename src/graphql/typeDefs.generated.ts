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
					directives: [],
					loc: { start: 191, end: 210 },
				},
			],
			loc: { start: 101, end: 212 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 225, end: 230 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 235, end: 245 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 246, end: 248 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 250, end: 252 },
									},
									loc: { start: 250, end: 252 },
								},
								loc: { start: 250, end: 253 },
							},
							directives: [],
							loc: { start: 246, end: 253 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 256, end: 266 },
						},
						loc: { start: 256, end: 266 },
					},
					directives: [],
					loc: { start: 235, end: 266 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 269, end: 280 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 281, end: 286 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 288, end: 291 },
								},
								loc: { start: 288, end: 291 },
							},
							directives: [],
							loc: { start: 281, end: 291 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 293, end: 297 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 299, end: 302 },
								},
								loc: { start: 299, end: 302 },
							},
							directives: [],
							loc: { start: 293, end: 302 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 306, end: 316 },
							},
							loc: { start: 306, end: 316 },
						},
						loc: { start: 305, end: 317 },
					},
					directives: [],
					loc: { start: 269, end: 317 },
				},
			],
			loc: { start: 213, end: 319 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 326, end: 336 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 341, end: 343 } },
					arguments: [],
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
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 351, end: 355 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 357, end: 363 },
							},
							loc: { start: 357, end: 363 },
						},
						loc: { start: 357, end: 364 },
					},
					directives: [],
					loc: { start: 351, end: 364 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 367, end: 376 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 378, end: 386 },
							},
							loc: { start: 378, end: 386 },
						},
						loc: { start: 378, end: 387 },
					},
					directives: [],
					loc: { start: 367, end: 387 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 390, end: 399 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 401, end: 409 },
							},
							loc: { start: 401, end: 409 },
						},
						loc: { start: 401, end: 410 },
					},
					directives: [],
					loc: { start: 390, end: 410 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 413, end: 421 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 424, end: 431 },
							},
							loc: { start: 424, end: 431 },
						},
						loc: { start: 423, end: 432 },
					},
					directives: [],
					loc: { start: 413, end: 432 },
				},
			],
			loc: { start: 321, end: 434 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 440, end: 449 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 454, end: 456 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 458, end: 460 },
							},
							loc: { start: 458, end: 460 },
						},
						loc: { start: 458, end: 461 },
					},
					directives: [],
					loc: { start: 454, end: 461 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 464, end: 472 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 474, end: 477 },
							},
							loc: { start: 474, end: 477 },
						},
						loc: { start: 474, end: 478 },
					},
					directives: [],
					loc: { start: 464, end: 478 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 481, end: 490 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 492, end: 500 },
							},
							loc: { start: 492, end: 500 },
						},
						loc: { start: 492, end: 501 },
					},
					directives: [],
					loc: { start: 481, end: 501 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 504, end: 513 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 515, end: 523 },
							},
							loc: { start: 515, end: 523 },
						},
						loc: { start: 515, end: 524 },
					},
					directives: [],
					loc: { start: 504, end: 524 },
				},
			],
			loc: { start: 435, end: 526 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 539, end: 544 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 549, end: 554 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 555, end: 557 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 559, end: 561 },
									},
									loc: { start: 559, end: 561 },
								},
								loc: { start: 559, end: 562 },
							},
							directives: [],
							loc: { start: 555, end: 562 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 565, end: 570 },
						},
						loc: { start: 565, end: 570 },
					},
					directives: [],
					loc: { start: 549, end: 570 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 573, end: 579 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 580, end: 585 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 587, end: 590 },
								},
								loc: { start: 587, end: 590 },
							},
							directives: [],
							loc: { start: 580, end: 590 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 592, end: 596 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 598, end: 601 },
								},
								loc: { start: 598, end: 601 },
							},
							directives: [],
							loc: { start: 592, end: 601 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 605, end: 610 },
							},
							loc: { start: 605, end: 610 },
						},
						loc: { start: 604, end: 611 },
					},
					directives: [],
					loc: { start: 573, end: 611 },
				},
			],
			loc: { start: 527, end: 613 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 620, end: 625 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 630, end: 632 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 634, end: 636 },
							},
							loc: { start: 634, end: 636 },
						},
						loc: { start: 634, end: 637 },
					},
					directives: [],
					loc: { start: 630, end: 637 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 640, end: 645 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 647, end: 650 },
							},
							loc: { start: 647, end: 650 },
						},
						loc: { start: 647, end: 651 },
					},
					directives: [],
					loc: { start: 640, end: 651 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 654, end: 660 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 662, end: 668 },
							},
							loc: { start: 662, end: 668 },
						},
						loc: { start: 662, end: 669 },
					},
					directives: [],
					loc: { start: 654, end: 669 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 672, end: 682 },
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
										loc: { start: 685, end: 694 },
									},
									loc: { start: 685, end: 694 },
								},
								loc: { start: 685, end: 695 },
							},
							loc: { start: 684, end: 696 },
						},
						loc: { start: 684, end: 697 },
					},
					directives: [],
					loc: { start: 672, end: 697 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 700, end: 709 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 711, end: 719 },
							},
							loc: { start: 711, end: 719 },
						},
						loc: { start: 711, end: 720 },
					},
					directives: [],
					loc: { start: 700, end: 720 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 723, end: 732 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 734, end: 742 },
							},
							loc: { start: 734, end: 742 },
						},
						loc: { start: 734, end: 743 },
					},
					directives: [],
					loc: { start: 723, end: 743 },
				},
			],
			loc: { start: 615, end: 745 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 758, end: 763 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 768, end: 775 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 776, end: 778 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 780, end: 782 },
									},
									loc: { start: 780, end: 782 },
								},
								loc: { start: 780, end: 783 },
							},
							directives: [],
							loc: { start: 776, end: 783 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 786, end: 793 },
						},
						loc: { start: 786, end: 793 },
					},
					directives: [],
					loc: { start: 768, end: 793 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 796, end: 804 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 805, end: 810 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 812, end: 815 },
								},
								loc: { start: 812, end: 815 },
							},
							directives: [],
							loc: { start: 805, end: 815 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 817, end: 821 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 823, end: 826 },
								},
								loc: { start: 823, end: 826 },
							},
							directives: [],
							loc: { start: 817, end: 826 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 830, end: 837 },
							},
							loc: { start: 830, end: 837 },
						},
						loc: { start: 829, end: 838 },
					},
					directives: [],
					loc: { start: 796, end: 838 },
				},
			],
			loc: { start: 746, end: 840 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Image", loc: { start: 847, end: 852 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 857, end: 860 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 862, end: 868 },
							},
							loc: { start: 862, end: 868 },
						},
						loc: { start: 862, end: 869 },
					},
					directives: [],
					loc: { start: 857, end: 869 },
				},
			],
			loc: { start: 842, end: 871 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 878, end: 885 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 890, end: 892 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 894, end: 896 },
							},
							loc: { start: 894, end: 896 },
						},
						loc: { start: 894, end: 897 },
					},
					directives: [],
					loc: { start: 890, end: 897 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 900, end: 904 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 906, end: 912 },
							},
							loc: { start: 906, end: 912 },
						},
						loc: { start: 906, end: 913 },
					},
					directives: [],
					loc: { start: 900, end: 913 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 916, end: 920 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 922, end: 928 },
							},
							loc: { start: 922, end: 928 },
						},
						loc: { start: 922, end: 929 },
					},
					directives: [],
					loc: { start: 916, end: 929 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 932, end: 943 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 945, end: 951 },
							},
							loc: { start: 945, end: 951 },
						},
						loc: { start: 945, end: 952 },
					},
					directives: [],
					loc: { start: 932, end: 952 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 955, end: 960 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 962, end: 965 },
							},
							loc: { start: 962, end: 965 },
						},
						loc: { start: 962, end: 966 },
					},
					directives: [],
					loc: { start: 955, end: 966 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "image", loc: { start: 969, end: 974 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Image",
								loc: { start: 976, end: 981 },
							},
							loc: { start: 976, end: 981 },
						},
						loc: { start: 976, end: 982 },
					},
					directives: [],
					loc: { start: 969, end: 982 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 985, end: 992 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Review",
								loc: { start: 995, end: 1001 },
							},
							loc: { start: 995, end: 1001 },
						},
						loc: { start: 994, end: 1002 },
					},
					directives: [],
					loc: { start: 985, end: 1002 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1005, end: 1015 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 1018, end: 1027 },
							},
							loc: { start: 1018, end: 1027 },
						},
						loc: { start: 1017, end: 1028 },
					},
					directives: [],
					loc: { start: 1005, end: 1028 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1031, end: 1041 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1044, end: 1052 },
							},
							loc: { start: 1044, end: 1052 },
						},
						loc: { start: 1043, end: 1053 },
					},
					directives: [],
					loc: { start: 1031, end: 1053 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 1056, end: 1067 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 1070, end: 1080 },
							},
							loc: { start: 1070, end: 1080 },
						},
						loc: { start: 1069, end: 1081 },
					},
					directives: [],
					loc: { start: 1056, end: 1081 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1084, end: 1093 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1095, end: 1103 },
							},
							loc: { start: 1095, end: 1103 },
						},
						loc: { start: 1095, end: 1104 },
					},
					directives: [],
					loc: { start: 1084, end: 1104 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1107, end: 1116 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1118, end: 1126 },
							},
							loc: { start: 1118, end: 1126 },
						},
						loc: { start: 1118, end: 1127 },
					},
					directives: [],
					loc: { start: 1107, end: 1127 },
				},
			],
			loc: { start: 873, end: 1129 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1135, end: 1141 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1146, end: 1148 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1150, end: 1152 },
							},
							loc: { start: 1150, end: 1152 },
						},
						loc: { start: 1150, end: 1153 },
					},
					directives: [],
					loc: { start: 1146, end: 1153 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1156, end: 1161 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1163, end: 1169 },
							},
							loc: { start: 1163, end: 1169 },
						},
						loc: { start: 1163, end: 1170 },
					},
					directives: [],
					loc: { start: 1156, end: 1170 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1173, end: 1184 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1186, end: 1192 },
							},
							loc: { start: 1186, end: 1192 },
						},
						loc: { start: 1186, end: 1193 },
					},
					directives: [],
					loc: { start: 1173, end: 1193 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 1196, end: 1202 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1204, end: 1207 },
							},
							loc: { start: 1204, end: 1207 },
						},
						loc: { start: 1204, end: 1208 },
					},
					directives: [],
					loc: { start: 1196, end: 1208 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1211, end: 1220 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1222, end: 1230 },
							},
							loc: { start: 1222, end: 1230 },
						},
						loc: { start: 1222, end: 1231 },
					},
					directives: [],
					loc: { start: 1211, end: 1231 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1234, end: 1243 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1245, end: 1253 },
							},
							loc: { start: 1245, end: 1253 },
						},
						loc: { start: 1245, end: 1254 },
					},
					directives: [],
					loc: { start: 1234, end: 1254 },
				},
			],
			loc: { start: 1130, end: 1256 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1262, end: 1267 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1257, end: 1267 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1276, end: 1284 },
			},
			directives: [],
			loc: { start: 1269, end: 1284 },
		},
	],
	loc: { start: 0, end: 1285 },
} as unknown as DocumentNode;
