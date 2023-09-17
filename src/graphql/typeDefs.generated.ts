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
			name: { kind: "Name", value: "Image", loc: { start: 440, end: 445 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 450, end: 452 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 454, end: 456 },
							},
							loc: { start: 454, end: 456 },
						},
						loc: { start: 454, end: 457 },
					},
					directives: [],
					loc: { start: 450, end: 457 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 460, end: 463 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 465, end: 471 },
							},
							loc: { start: 465, end: 471 },
						},
						loc: { start: 465, end: 472 },
					},
					directives: [],
					loc: { start: 460, end: 472 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "alt", loc: { start: 475, end: 478 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 480, end: 486 },
							},
							loc: { start: 480, end: 486 },
						},
						loc: { start: 480, end: 487 },
					},
					directives: [],
					loc: { start: 475, end: 487 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 490, end: 499 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 501, end: 509 },
							},
							loc: { start: 501, end: 509 },
						},
						loc: { start: 501, end: 510 },
					},
					directives: [],
					loc: { start: 490, end: 510 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 513, end: 522 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 524, end: 532 },
							},
							loc: { start: 524, end: 532 },
						},
						loc: { start: 524, end: 533 },
					},
					directives: [],
					loc: { start: 513, end: 533 },
				},
			],
			loc: { start: 435, end: 535 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 541, end: 550 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 555, end: 557 } },
					arguments: [],
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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 565, end: 573 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 575, end: 578 },
							},
							loc: { start: 575, end: 578 },
						},
						loc: { start: 575, end: 579 },
					},
					directives: [],
					loc: { start: 565, end: 579 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 582, end: 591 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 593, end: 601 },
							},
							loc: { start: 593, end: 601 },
						},
						loc: { start: 593, end: 602 },
					},
					directives: [],
					loc: { start: 582, end: 602 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 605, end: 614 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 616, end: 624 },
							},
							loc: { start: 616, end: 624 },
						},
						loc: { start: 616, end: 625 },
					},
					directives: [],
					loc: { start: 605, end: 625 },
				},
			],
			loc: { start: 536, end: 627 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 640, end: 645 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 650, end: 655 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 656, end: 658 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 660, end: 662 },
									},
									loc: { start: 660, end: 662 },
								},
								loc: { start: 660, end: 663 },
							},
							directives: [],
							loc: { start: 656, end: 663 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 666, end: 671 },
						},
						loc: { start: 666, end: 671 },
					},
					directives: [],
					loc: { start: 650, end: 671 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 674, end: 680 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 681, end: 686 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 688, end: 691 },
								},
								loc: { start: 688, end: 691 },
							},
							directives: [],
							loc: { start: 681, end: 691 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 693, end: 697 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 699, end: 702 },
								},
								loc: { start: 699, end: 702 },
							},
							directives: [],
							loc: { start: 693, end: 702 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 706, end: 711 },
							},
							loc: { start: 706, end: 711 },
						},
						loc: { start: 705, end: 712 },
					},
					directives: [],
					loc: { start: 674, end: 712 },
				},
			],
			loc: { start: 628, end: 714 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 721, end: 726 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 731, end: 733 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 735, end: 737 },
							},
							loc: { start: 735, end: 737 },
						},
						loc: { start: 735, end: 738 },
					},
					directives: [],
					loc: { start: 731, end: 738 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 741, end: 746 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 748, end: 751 },
							},
							loc: { start: 748, end: 751 },
						},
						loc: { start: 748, end: 752 },
					},
					directives: [],
					loc: { start: 741, end: 752 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 755, end: 761 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 763, end: 769 },
							},
							loc: { start: 763, end: 769 },
						},
						loc: { start: 763, end: 770 },
					},
					directives: [],
					loc: { start: 755, end: 770 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 773, end: 783 },
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
										loc: { start: 786, end: 795 },
									},
									loc: { start: 786, end: 795 },
								},
								loc: { start: 786, end: 796 },
							},
							loc: { start: 785, end: 797 },
						},
						loc: { start: 785, end: 798 },
					},
					directives: [],
					loc: { start: 773, end: 798 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 801, end: 810 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 812, end: 820 },
							},
							loc: { start: 812, end: 820 },
						},
						loc: { start: 812, end: 821 },
					},
					directives: [],
					loc: { start: 801, end: 821 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 824, end: 833 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 835, end: 843 },
							},
							loc: { start: 835, end: 843 },
						},
						loc: { start: 835, end: 844 },
					},
					directives: [],
					loc: { start: 824, end: 844 },
				},
			],
			loc: { start: 716, end: 846 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 859, end: 864 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 869, end: 876 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 877, end: 879 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 881, end: 883 },
									},
									loc: { start: 881, end: 883 },
								},
								loc: { start: 881, end: 884 },
							},
							directives: [],
							loc: { start: 877, end: 884 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 887, end: 894 },
						},
						loc: { start: 887, end: 894 },
					},
					directives: [],
					loc: { start: 869, end: 894 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 897, end: 905 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 906, end: 911 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 913, end: 916 },
								},
								loc: { start: 913, end: 916 },
							},
							directives: [],
							loc: { start: 906, end: 916 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 918, end: 922 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 924, end: 927 },
								},
								loc: { start: 924, end: 927 },
							},
							directives: [],
							loc: { start: 918, end: 927 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 931, end: 938 },
							},
							loc: { start: 931, end: 938 },
						},
						loc: { start: 930, end: 939 },
					},
					directives: [],
					loc: { start: 897, end: 939 },
				},
			],
			loc: { start: 847, end: 941 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 948, end: 955 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 960, end: 962 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 964, end: 966 },
							},
							loc: { start: 964, end: 966 },
						},
						loc: { start: 964, end: 967 },
					},
					directives: [],
					loc: { start: 960, end: 967 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 970, end: 974 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 976, end: 982 },
							},
							loc: { start: 976, end: 982 },
						},
						loc: { start: 976, end: 983 },
					},
					directives: [],
					loc: { start: 970, end: 983 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 986, end: 990 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 992, end: 998 },
							},
							loc: { start: 992, end: 998 },
						},
						loc: { start: 992, end: 999 },
					},
					directives: [],
					loc: { start: 986, end: 999 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1002, end: 1013 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1015, end: 1021 },
							},
							loc: { start: 1015, end: 1021 },
						},
						loc: { start: 1015, end: 1022 },
					},
					directives: [],
					loc: { start: 1002, end: 1022 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1025, end: 1030 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1032, end: 1035 },
							},
							loc: { start: 1032, end: 1035 },
						},
						loc: { start: 1032, end: 1036 },
					},
					directives: [],
					loc: { start: 1025, end: 1036 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 1039, end: 1045 },
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
									loc: { start: 1048, end: 1053 },
								},
								loc: { start: 1048, end: 1053 },
							},
							loc: { start: 1047, end: 1054 },
						},
						loc: { start: 1047, end: 1055 },
					},
					directives: [],
					loc: { start: 1039, end: 1055 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1058, end: 1067 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1069, end: 1077 },
							},
							loc: { start: 1069, end: 1077 },
						},
						loc: { start: 1069, end: 1078 },
					},
					directives: [],
					loc: { start: 1058, end: 1078 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1081, end: 1090 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1092, end: 1100 },
							},
							loc: { start: 1092, end: 1100 },
						},
						loc: { start: 1092, end: 1101 },
					},
					directives: [],
					loc: { start: 1081, end: 1101 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 1104, end: 1111 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Review",
								loc: { start: 1114, end: 1120 },
							},
							loc: { start: 1114, end: 1120 },
						},
						loc: { start: 1113, end: 1121 },
					},
					directives: [],
					loc: { start: 1104, end: 1121 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1124, end: 1134 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 1137, end: 1146 },
							},
							loc: { start: 1137, end: 1146 },
						},
						loc: { start: 1136, end: 1147 },
					},
					directives: [],
					loc: { start: 1124, end: 1147 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1150, end: 1160 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1163, end: 1171 },
							},
							loc: { start: 1163, end: 1171 },
						},
						loc: { start: 1162, end: 1172 },
					},
					directives: [],
					loc: { start: 1150, end: 1172 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 1175, end: 1186 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 1189, end: 1199 },
							},
							loc: { start: 1189, end: 1199 },
						},
						loc: { start: 1188, end: 1200 },
					},
					directives: [],
					loc: { start: 1175, end: 1200 },
				},
			],
			loc: { start: 943, end: 1202 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1208, end: 1214 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1219, end: 1221 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1223, end: 1225 },
							},
							loc: { start: 1223, end: 1225 },
						},
						loc: { start: 1223, end: 1226 },
					},
					directives: [],
					loc: { start: 1219, end: 1226 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1229, end: 1234 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1236, end: 1242 },
							},
							loc: { start: 1236, end: 1242 },
						},
						loc: { start: 1236, end: 1243 },
					},
					directives: [],
					loc: { start: 1229, end: 1243 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1246, end: 1257 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1259, end: 1265 },
							},
							loc: { start: 1259, end: 1265 },
						},
						loc: { start: 1259, end: 1266 },
					},
					directives: [],
					loc: { start: 1246, end: 1266 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 1269, end: 1275 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1277, end: 1280 },
							},
							loc: { start: 1277, end: 1280 },
						},
						loc: { start: 1277, end: 1281 },
					},
					directives: [],
					loc: { start: 1269, end: 1281 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1284, end: 1293 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1295, end: 1303 },
							},
							loc: { start: 1295, end: 1303 },
						},
						loc: { start: 1295, end: 1304 },
					},
					directives: [],
					loc: { start: 1284, end: 1304 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1307, end: 1316 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1318, end: 1326 },
							},
							loc: { start: 1318, end: 1326 },
						},
						loc: { start: 1318, end: 1327 },
					},
					directives: [],
					loc: { start: 1307, end: 1327 },
				},
			],
			loc: { start: 1203, end: 1329 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1335, end: 1340 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1330, end: 1340 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1349, end: 1357 },
			},
			directives: [],
			loc: { start: 1342, end: 1357 },
		},
	],
	loc: { start: 0, end: 1358 },
} as unknown as DocumentNode;
