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
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 86, end: 90 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 92, end: 98 },
								},
								loc: { start: 92, end: 98 },
							},
							directives: [],
							loc: { start: 86, end: 98 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Category",
									loc: { start: 102, end: 110 },
								},
								loc: { start: 102, end: 110 },
							},
							loc: { start: 101, end: 111 },
						},
						loc: { start: 101, end: 112 },
					},
					directives: [],
					loc: { start: 52, end: 112 },
				},
			],
			loc: { start: 0, end: 114 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 121, end: 129 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 134, end: 136 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 138, end: 140 },
							},
							loc: { start: 138, end: 140 },
						},
						loc: { start: 138, end: 141 },
					},
					directives: [],
					loc: { start: 134, end: 141 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 144, end: 148 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 150, end: 156 },
							},
							loc: { start: 150, end: 156 },
						},
						loc: { start: 150, end: 157 },
					},
					directives: [],
					loc: { start: 144, end: 157 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 160, end: 164 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 166, end: 172 },
							},
							loc: { start: 166, end: 172 },
						},
						loc: { start: 166, end: 173 },
					},
					directives: [],
					loc: { start: 160, end: 173 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 176, end: 187 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 189, end: 195 },
							},
							loc: { start: 189, end: 195 },
						},
						loc: { start: 189, end: 196 },
					},
					directives: [],
					loc: { start: 176, end: 196 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 199, end: 208 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 210, end: 218 },
							},
							loc: { start: 210, end: 218 },
						},
						loc: { start: 210, end: 219 },
					},
					directives: [],
					loc: { start: 199, end: 219 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 222, end: 231 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 233, end: 241 },
							},
							loc: { start: 233, end: 241 },
						},
						loc: { start: 233, end: 242 },
					},
					directives: [],
					loc: { start: 222, end: 242 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 245, end: 253 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 254, end: 259 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 261, end: 264 },
								},
								loc: { start: 261, end: 264 },
							},
							directives: [],
							loc: { start: 254, end: 264 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 266, end: 270 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 272, end: 275 },
								},
								loc: { start: 272, end: 275 },
							},
							directives: [],
							loc: { start: 266, end: 275 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Product",
									loc: { start: 279, end: 286 },
								},
								loc: { start: 279, end: 286 },
							},
							loc: { start: 278, end: 287 },
						},
						loc: { start: 278, end: 288 },
					},
					directives: [],
					loc: { start: 245, end: 288 },
				},
			],
			loc: { start: 116, end: 290 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 303, end: 308 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 313, end: 323 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 324, end: 326 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 328, end: 330 },
									},
									loc: { start: 328, end: 330 },
								},
								loc: { start: 328, end: 331 },
							},
							directives: [],
							loc: { start: 324, end: 331 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 334, end: 344 },
						},
						loc: { start: 334, end: 344 },
					},
					directives: [],
					loc: { start: 313, end: 344 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 347, end: 358 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 359, end: 364 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 366, end: 369 },
								},
								loc: { start: 366, end: 369 },
							},
							directives: [],
							loc: { start: 359, end: 369 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 371, end: 375 },
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
							loc: { start: 371, end: 380 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 384, end: 394 },
							},
							loc: { start: 384, end: 394 },
						},
						loc: { start: 383, end: 395 },
					},
					directives: [],
					loc: { start: 347, end: 395 },
				},
			],
			loc: { start: 291, end: 397 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 404, end: 414 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 419, end: 421 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 423, end: 425 },
							},
							loc: { start: 423, end: 425 },
						},
						loc: { start: 423, end: 426 },
					},
					directives: [],
					loc: { start: 419, end: 426 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 429, end: 433 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 435, end: 441 },
							},
							loc: { start: 435, end: 441 },
						},
						loc: { start: 435, end: 442 },
					},
					directives: [],
					loc: { start: 429, end: 442 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 445, end: 454 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 456, end: 464 },
							},
							loc: { start: 456, end: 464 },
						},
						loc: { start: 456, end: 465 },
					},
					directives: [],
					loc: { start: 445, end: 465 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 468, end: 477 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 479, end: 487 },
							},
							loc: { start: 479, end: 487 },
						},
						loc: { start: 479, end: 488 },
					},
					directives: [],
					loc: { start: 468, end: 488 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 491, end: 499 },
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
									loc: { start: 502, end: 509 },
								},
								loc: { start: 502, end: 509 },
							},
							loc: { start: 501, end: 510 },
						},
						loc: { start: 501, end: 511 },
					},
					directives: [],
					loc: { start: 491, end: 511 },
				},
			],
			loc: { start: 399, end: 513 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Image", loc: { start: 519, end: 524 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 529, end: 531 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 533, end: 535 },
							},
							loc: { start: 533, end: 535 },
						},
						loc: { start: 533, end: 536 },
					},
					directives: [],
					loc: { start: 529, end: 536 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 539, end: 542 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 544, end: 550 },
							},
							loc: { start: 544, end: 550 },
						},
						loc: { start: 544, end: 551 },
					},
					directives: [],
					loc: { start: 539, end: 551 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "alt", loc: { start: 554, end: 557 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 559, end: 565 },
							},
							loc: { start: 559, end: 565 },
						},
						loc: { start: 559, end: 566 },
					},
					directives: [],
					loc: { start: 554, end: 566 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 569, end: 578 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 580, end: 588 },
							},
							loc: { start: 580, end: 588 },
						},
						loc: { start: 580, end: 589 },
					},
					directives: [],
					loc: { start: 569, end: 589 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 592, end: 601 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 603, end: 611 },
							},
							loc: { start: 603, end: 611 },
						},
						loc: { start: 603, end: 612 },
					},
					directives: [],
					loc: { start: 592, end: 612 },
				},
			],
			loc: { start: 514, end: 614 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 620, end: 629 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 634, end: 636 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 638, end: 640 },
							},
							loc: { start: 638, end: 640 },
						},
						loc: { start: 638, end: 641 },
					},
					directives: [],
					loc: { start: 634, end: 641 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 644, end: 652 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 654, end: 657 },
							},
							loc: { start: 654, end: 657 },
						},
						loc: { start: 654, end: 658 },
					},
					directives: [],
					loc: { start: 644, end: 658 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 661, end: 670 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 672, end: 680 },
							},
							loc: { start: 672, end: 680 },
						},
						loc: { start: 672, end: 681 },
					},
					directives: [],
					loc: { start: 661, end: 681 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 684, end: 693 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 695, end: 703 },
							},
							loc: { start: 695, end: 703 },
						},
						loc: { start: 695, end: 704 },
					},
					directives: [],
					loc: { start: 684, end: 704 },
				},
			],
			loc: { start: 615, end: 706 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 719, end: 724 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 729, end: 734 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 735, end: 737 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 739, end: 741 },
									},
									loc: { start: 739, end: 741 },
								},
								loc: { start: 739, end: 742 },
							},
							directives: [],
							loc: { start: 735, end: 742 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 745, end: 750 },
						},
						loc: { start: 745, end: 750 },
					},
					directives: [],
					loc: { start: 729, end: 750 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 753, end: 759 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 760, end: 765 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 767, end: 770 },
								},
								loc: { start: 767, end: 770 },
							},
							directives: [],
							loc: { start: 760, end: 770 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 772, end: 776 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 778, end: 781 },
								},
								loc: { start: 778, end: 781 },
							},
							directives: [],
							loc: { start: 772, end: 781 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 785, end: 790 },
							},
							loc: { start: 785, end: 790 },
						},
						loc: { start: 784, end: 791 },
					},
					directives: [],
					loc: { start: 753, end: 791 },
				},
			],
			loc: { start: 707, end: 793 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 800, end: 805 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 810, end: 812 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 814, end: 816 },
							},
							loc: { start: 814, end: 816 },
						},
						loc: { start: 814, end: 817 },
					},
					directives: [],
					loc: { start: 810, end: 817 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 820, end: 825 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 827, end: 830 },
							},
							loc: { start: 827, end: 830 },
						},
						loc: { start: 827, end: 831 },
					},
					directives: [],
					loc: { start: 820, end: 831 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 834, end: 840 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 842, end: 848 },
							},
							loc: { start: 842, end: 848 },
						},
						loc: { start: 842, end: 849 },
					},
					directives: [],
					loc: { start: 834, end: 849 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 852, end: 862 },
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
										loc: { start: 865, end: 874 },
									},
									loc: { start: 865, end: 874 },
								},
								loc: { start: 865, end: 875 },
							},
							loc: { start: 864, end: 876 },
						},
						loc: { start: 864, end: 877 },
					},
					directives: [],
					loc: { start: 852, end: 877 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 880, end: 889 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 891, end: 899 },
							},
							loc: { start: 891, end: 899 },
						},
						loc: { start: 891, end: 900 },
					},
					directives: [],
					loc: { start: 880, end: 900 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 903, end: 912 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 914, end: 922 },
							},
							loc: { start: 914, end: 922 },
						},
						loc: { start: 914, end: 923 },
					},
					directives: [],
					loc: { start: 903, end: 923 },
				},
			],
			loc: { start: 795, end: 925 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 938, end: 943 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 948, end: 955 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 956, end: 958 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 960, end: 962 },
									},
									loc: { start: 960, end: 962 },
								},
								loc: { start: 960, end: 963 },
							},
							directives: [],
							loc: { start: 956, end: 963 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 966, end: 973 },
						},
						loc: { start: 966, end: 973 },
					},
					directives: [],
					loc: { start: 948, end: 973 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 976, end: 984 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 985, end: 990 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 992, end: 995 },
								},
								loc: { start: 992, end: 995 },
							},
							directives: [],
							loc: { start: 985, end: 995 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 997, end: 1001 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1003, end: 1006 },
								},
								loc: { start: 1003, end: 1006 },
							},
							directives: [],
							loc: { start: 997, end: 1006 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1008, end: 1016 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1018, end: 1024 },
								},
								loc: { start: 1018, end: 1024 },
							},
							directives: [],
							loc: { start: 1008, end: 1024 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1028, end: 1035 },
							},
							loc: { start: 1028, end: 1035 },
						},
						loc: { start: 1027, end: 1036 },
					},
					directives: [],
					loc: { start: 976, end: 1036 },
				},
			],
			loc: { start: 926, end: 1038 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1045, end: 1052 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1057, end: 1059 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1061, end: 1063 },
							},
							loc: { start: 1061, end: 1063 },
						},
						loc: { start: 1061, end: 1064 },
					},
					directives: [],
					loc: { start: 1057, end: 1064 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1067, end: 1071 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1073, end: 1079 },
							},
							loc: { start: 1073, end: 1079 },
						},
						loc: { start: 1073, end: 1080 },
					},
					directives: [],
					loc: { start: 1067, end: 1080 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1083, end: 1087 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1089, end: 1095 },
							},
							loc: { start: 1089, end: 1095 },
						},
						loc: { start: 1089, end: 1096 },
					},
					directives: [],
					loc: { start: 1083, end: 1096 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1099, end: 1110 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1112, end: 1118 },
							},
							loc: { start: 1112, end: 1118 },
						},
						loc: { start: 1112, end: 1119 },
					},
					directives: [],
					loc: { start: 1099, end: 1119 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1122, end: 1127 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1129, end: 1132 },
							},
							loc: { start: 1129, end: 1132 },
						},
						loc: { start: 1129, end: 1133 },
					},
					directives: [],
					loc: { start: 1122, end: 1133 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 1136, end: 1142 },
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
										loc: { start: 1145, end: 1150 },
									},
									loc: { start: 1145, end: 1150 },
								},
								loc: { start: 1145, end: 1151 },
							},
							loc: { start: 1144, end: 1152 },
						},
						loc: { start: 1144, end: 1153 },
					},
					directives: [],
					loc: { start: 1136, end: 1153 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1156, end: 1165 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1167, end: 1175 },
							},
							loc: { start: 1167, end: 1175 },
						},
						loc: { start: 1167, end: 1176 },
					},
					directives: [],
					loc: { start: 1156, end: 1176 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1179, end: 1188 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1190, end: 1198 },
							},
							loc: { start: 1190, end: 1198 },
						},
						loc: { start: 1190, end: 1199 },
					},
					directives: [],
					loc: { start: 1179, end: 1199 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 1202, end: 1209 },
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
										loc: { start: 1212, end: 1218 },
									},
									loc: { start: 1212, end: 1218 },
								},
								loc: { start: 1212, end: 1219 },
							},
							loc: { start: 1211, end: 1220 },
						},
						loc: { start: 1211, end: 1221 },
					},
					directives: [],
					loc: { start: 1202, end: 1221 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1224, end: 1234 },
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
										loc: { start: 1237, end: 1246 },
									},
									loc: { start: 1237, end: 1246 },
								},
								loc: { start: 1237, end: 1247 },
							},
							loc: { start: 1236, end: 1248 },
						},
						loc: { start: 1236, end: 1249 },
					},
					directives: [],
					loc: { start: 1224, end: 1249 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1252, end: 1262 },
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
										value: "Category",
										loc: { start: 1265, end: 1273 },
									},
									loc: { start: 1265, end: 1273 },
								},
								loc: { start: 1265, end: 1274 },
							},
							loc: { start: 1264, end: 1275 },
						},
						loc: { start: 1264, end: 1276 },
					},
					directives: [],
					loc: { start: 1252, end: 1276 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 1279, end: 1290 },
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
										value: "Collection",
										loc: { start: 1293, end: 1303 },
									},
									loc: { start: 1293, end: 1303 },
								},
								loc: { start: 1293, end: 1304 },
							},
							loc: { start: 1292, end: 1305 },
						},
						loc: { start: 1292, end: 1306 },
					},
					directives: [],
					loc: { start: 1279, end: 1306 },
				},
			],
			loc: { start: 1040, end: 1308 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1314, end: 1320 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1325, end: 1327 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1329, end: 1331 },
							},
							loc: { start: 1329, end: 1331 },
						},
						loc: { start: 1329, end: 1332 },
					},
					directives: [],
					loc: { start: 1325, end: 1332 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1335, end: 1340 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1342, end: 1348 },
							},
							loc: { start: 1342, end: 1348 },
						},
						loc: { start: 1342, end: 1349 },
					},
					directives: [],
					loc: { start: 1335, end: 1349 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1352, end: 1363 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1365, end: 1371 },
							},
							loc: { start: 1365, end: 1371 },
						},
						loc: { start: 1365, end: 1372 },
					},
					directives: [],
					loc: { start: 1352, end: 1372 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 1375, end: 1381 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1383, end: 1386 },
							},
							loc: { start: 1383, end: 1386 },
						},
						loc: { start: 1383, end: 1387 },
					},
					directives: [],
					loc: { start: 1375, end: 1387 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1390, end: 1399 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1401, end: 1409 },
							},
							loc: { start: 1401, end: 1409 },
						},
						loc: { start: 1401, end: 1410 },
					},
					directives: [],
					loc: { start: 1390, end: 1410 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1413, end: 1422 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1424, end: 1432 },
							},
							loc: { start: 1424, end: 1432 },
						},
						loc: { start: 1424, end: 1433 },
					},
					directives: [],
					loc: { start: 1413, end: 1433 },
				},
			],
			loc: { start: 1309, end: 1435 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1441, end: 1446 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1436, end: 1446 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1455, end: 1463 },
			},
			directives: [],
			loc: { start: 1448, end: 1463 },
		},
	],
	loc: { start: 0, end: 1464 },
} as unknown as DocumentNode;
