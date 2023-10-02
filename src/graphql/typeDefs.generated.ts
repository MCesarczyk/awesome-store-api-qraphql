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
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 382, end: 386 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 388, end: 394 },
								},
								loc: { start: 388, end: 394 },
							},
							directives: [],
							loc: { start: 382, end: 394 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 398, end: 408 },
							},
							loc: { start: 398, end: 408 },
						},
						loc: { start: 397, end: 409 },
					},
					directives: [],
					loc: { start: 347, end: 409 },
				},
			],
			loc: { start: 291, end: 411 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 418, end: 428 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 433, end: 435 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 437, end: 439 },
							},
							loc: { start: 437, end: 439 },
						},
						loc: { start: 437, end: 440 },
					},
					directives: [],
					loc: { start: 433, end: 440 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 443, end: 447 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 449, end: 455 },
							},
							loc: { start: 449, end: 455 },
						},
						loc: { start: 449, end: 456 },
					},
					directives: [],
					loc: { start: 443, end: 456 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 459, end: 463 } },
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
					loc: { start: 459, end: 472 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 475, end: 486 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 488, end: 494 },
							},
							loc: { start: 488, end: 494 },
						},
						loc: { start: 488, end: 495 },
					},
					directives: [],
					loc: { start: 475, end: 495 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 498, end: 507 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 509, end: 517 },
							},
							loc: { start: 509, end: 517 },
						},
						loc: { start: 509, end: 518 },
					},
					directives: [],
					loc: { start: 498, end: 518 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 521, end: 530 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 532, end: 540 },
							},
							loc: { start: 532, end: 540 },
						},
						loc: { start: 532, end: 541 },
					},
					directives: [],
					loc: { start: 521, end: 541 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 544, end: 552 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 553, end: 558 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 560, end: 563 },
								},
								loc: { start: 560, end: 563 },
							},
							directives: [],
							loc: { start: 553, end: 563 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 565, end: 569 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 571, end: 574 },
								},
								loc: { start: 571, end: 574 },
							},
							directives: [],
							loc: { start: 565, end: 574 },
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
									loc: { start: 578, end: 585 },
								},
								loc: { start: 578, end: 585 },
							},
							loc: { start: 577, end: 586 },
						},
						loc: { start: 577, end: 587 },
					},
					directives: [],
					loc: { start: 544, end: 587 },
				},
			],
			loc: { start: 413, end: 589 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Image", loc: { start: 595, end: 600 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 605, end: 607 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 609, end: 611 },
							},
							loc: { start: 609, end: 611 },
						},
						loc: { start: 609, end: 612 },
					},
					directives: [],
					loc: { start: 605, end: 612 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 615, end: 618 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 620, end: 626 },
							},
							loc: { start: 620, end: 626 },
						},
						loc: { start: 620, end: 627 },
					},
					directives: [],
					loc: { start: 615, end: 627 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "alt", loc: { start: 630, end: 633 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 635, end: 641 },
							},
							loc: { start: 635, end: 641 },
						},
						loc: { start: 635, end: 642 },
					},
					directives: [],
					loc: { start: 630, end: 642 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 645, end: 654 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 656, end: 664 },
							},
							loc: { start: 656, end: 664 },
						},
						loc: { start: 656, end: 665 },
					},
					directives: [],
					loc: { start: 645, end: 665 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 668, end: 677 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 679, end: 687 },
							},
							loc: { start: 679, end: 687 },
						},
						loc: { start: 679, end: 688 },
					},
					directives: [],
					loc: { start: 668, end: 688 },
				},
			],
			loc: { start: 590, end: 690 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderInput",
				loc: { start: 697, end: 707 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 712, end: 714 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 716, end: 718 },
							},
							loc: { start: 716, end: 718 },
						},
						loc: { start: 716, end: 719 },
					},
					directives: [],
					loc: { start: 712, end: 719 },
				},
			],
			loc: { start: 691, end: 721 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductInput",
				loc: { start: 729, end: 741 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 746, end: 748 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 750, end: 752 },
							},
							loc: { start: 750, end: 752 },
						},
						loc: { start: 750, end: 753 },
					},
					directives: [],
					loc: { start: 746, end: 753 },
				},
			],
			loc: { start: 723, end: 755 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 769, end: 777 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrderItem",
						loc: { start: 782, end: 797 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "quantity",
								loc: { start: 798, end: 806 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 808, end: 811 },
									},
									loc: { start: 808, end: 811 },
								},
								loc: { start: 808, end: 812 },
							},
							directives: [],
							loc: { start: 798, end: 812 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 814, end: 819 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 821, end: 824 },
									},
									loc: { start: 821, end: 824 },
								},
								loc: { start: 821, end: 825 },
							},
							directives: [],
							loc: { start: 814, end: 825 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "order",
								loc: { start: 827, end: 832 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderInput",
										loc: { start: 834, end: 844 },
									},
									loc: { start: 834, end: 844 },
								},
								loc: { start: 834, end: 845 },
							},
							directives: [],
							loc: { start: 827, end: 845 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 847, end: 854 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ProductInput",
										loc: { start: 856, end: 868 },
									},
									loc: { start: 856, end: 868 },
								},
								loc: { start: 856, end: 869 },
							},
							directives: [],
							loc: { start: 847, end: 869 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 872, end: 881 },
							},
							loc: { start: 872, end: 881 },
						},
						loc: { start: 872, end: 882 },
					},
					directives: [],
					loc: { start: 782, end: 882 },
				},
			],
			loc: { start: 757, end: 884 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 898, end: 906 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrderItem",
						loc: { start: 911, end: 926 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 927, end: 929 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 931, end: 933 },
									},
									loc: { start: 931, end: 933 },
								},
								loc: { start: 931, end: 934 },
							},
							directives: [],
							loc: { start: 927, end: 934 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "quantity",
								loc: { start: 936, end: 944 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 946, end: 949 },
									},
									loc: { start: 946, end: 949 },
								},
								loc: { start: 946, end: 950 },
							},
							directives: [],
							loc: { start: 936, end: 950 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 952, end: 957 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 959, end: 962 },
									},
									loc: { start: 959, end: 962 },
								},
								loc: { start: 959, end: 963 },
							},
							directives: [],
							loc: { start: 952, end: 963 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "order",
								loc: { start: 965, end: 970 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderInput",
										loc: { start: 972, end: 982 },
									},
									loc: { start: 972, end: 982 },
								},
								loc: { start: 972, end: 983 },
							},
							directives: [],
							loc: { start: 965, end: 983 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 985, end: 992 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ProductInput",
										loc: { start: 994, end: 1006 },
									},
									loc: { start: 994, end: 1006 },
								},
								loc: { start: 994, end: 1007 },
							},
							directives: [],
							loc: { start: 985, end: 1007 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 1010, end: 1019 },
							},
							loc: { start: 1010, end: 1019 },
						},
						loc: { start: 1010, end: 1020 },
					},
					directives: [],
					loc: { start: 911, end: 1020 },
				},
			],
			loc: { start: 886, end: 1022 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1029, end: 1038 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1043, end: 1045 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1047, end: 1049 },
							},
							loc: { start: 1047, end: 1049 },
						},
						loc: { start: 1047, end: 1050 },
					},
					directives: [],
					loc: { start: 1043, end: 1050 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1053, end: 1061 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1063, end: 1066 },
							},
							loc: { start: 1063, end: 1066 },
						},
						loc: { start: 1063, end: 1067 },
					},
					directives: [],
					loc: { start: 1053, end: 1067 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1070, end: 1075 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1077, end: 1080 },
							},
							loc: { start: 1077, end: 1080 },
						},
						loc: { start: 1077, end: 1081 },
					},
					directives: [],
					loc: { start: 1070, end: 1081 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 1084, end: 1093 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1095, end: 1097 },
							},
							loc: { start: 1095, end: 1097 },
						},
						loc: { start: 1095, end: 1098 },
					},
					directives: [],
					loc: { start: 1084, end: 1098 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderId",
						loc: { start: 1101, end: 1108 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1110, end: 1112 },
							},
							loc: { start: 1110, end: 1112 },
						},
						loc: { start: 1110, end: 1113 },
					},
					directives: [],
					loc: { start: 1101, end: 1113 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1116, end: 1125 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1127, end: 1135 },
							},
							loc: { start: 1127, end: 1135 },
						},
						loc: { start: 1127, end: 1136 },
					},
					directives: [],
					loc: { start: 1116, end: 1136 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1139, end: 1148 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1150, end: 1158 },
							},
							loc: { start: 1150, end: 1158 },
						},
						loc: { start: 1150, end: 1159 },
					},
					directives: [],
					loc: { start: 1139, end: 1159 },
				},
			],
			loc: { start: 1024, end: 1161 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1174, end: 1179 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "order",
						loc: { start: 1184, end: 1189 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1190, end: 1192 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1194, end: 1196 },
									},
									loc: { start: 1194, end: 1196 },
								},
								loc: { start: 1194, end: 1197 },
							},
							directives: [],
							loc: { start: 1190, end: 1197 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1199, end: 1205 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1207, end: 1213 },
								},
								loc: { start: 1207, end: 1213 },
							},
							directives: [],
							loc: { start: 1199, end: 1213 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 1216, end: 1221 },
						},
						loc: { start: 1216, end: 1221 },
					},
					directives: [],
					loc: { start: 1184, end: 1221 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 1224, end: 1230 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1231, end: 1236 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1238, end: 1241 },
								},
								loc: { start: 1238, end: 1241 },
							},
							directives: [],
							loc: { start: 1231, end: 1241 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1243, end: 1247 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1249, end: 1252 },
								},
								loc: { start: 1249, end: 1252 },
							},
							directives: [],
							loc: { start: 1243, end: 1252 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1254, end: 1260 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1262, end: 1268 },
								},
								loc: { start: 1262, end: 1268 },
							},
							directives: [],
							loc: { start: 1254, end: 1268 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1272, end: 1277 },
							},
							loc: { start: 1272, end: 1277 },
						},
						loc: { start: 1271, end: 1278 },
					},
					directives: [],
					loc: { start: 1224, end: 1278 },
				},
			],
			loc: { start: 1162, end: 1280 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItemInput",
				loc: { start: 1288, end: 1302 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1307, end: 1315 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1317, end: 1320 },
							},
							loc: { start: 1317, end: 1320 },
						},
						loc: { start: 1317, end: 1321 },
					},
					directives: [],
					loc: { start: 1307, end: 1321 },
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1324, end: 1326 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1328, end: 1330 },
							},
							loc: { start: 1328, end: 1330 },
						},
						loc: { start: 1328, end: 1331 },
					},
					directives: [],
					loc: { start: 1324, end: 1331 },
				},
			],
			loc: { start: 1282, end: 1333 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1347, end: 1355 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 1360, end: 1371 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 1372, end: 1377 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1379, end: 1382 },
									},
									loc: { start: 1379, end: 1382 },
								},
								loc: { start: 1379, end: 1383 },
							},
							directives: [],
							loc: { start: 1372, end: 1383 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1386, end: 1391 },
							},
							loc: { start: 1386, end: 1391 },
						},
						loc: { start: 1386, end: 1392 },
					},
					directives: [],
					loc: { start: 1360, end: 1392 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrder",
						loc: { start: 1395, end: 1406 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1407, end: 1409 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1411, end: 1413 },
									},
									loc: { start: 1411, end: 1413 },
								},
								loc: { start: 1411, end: 1414 },
							},
							directives: [],
							loc: { start: 1407, end: 1414 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1416, end: 1422 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1424, end: 1430 },
								},
								loc: { start: 1424, end: 1430 },
							},
							directives: [],
							loc: { start: 1416, end: 1430 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 1432, end: 1437 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1439, end: 1442 },
								},
								loc: { start: 1439, end: 1442 },
							},
							directives: [],
							loc: { start: 1432, end: 1442 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItems",
								loc: { start: 1444, end: 1454 },
							},
							type: {
								kind: "ListType",
								type: {
									kind: "NonNullType",
									type: {
										kind: "NamedType",
										name: {
											kind: "Name",
											value: "OrderItemInput",
											loc: { start: 1457, end: 1471 },
										},
										loc: { start: 1457, end: 1471 },
									},
									loc: { start: 1457, end: 1472 },
								},
								loc: { start: 1456, end: 1473 },
							},
							directives: [],
							loc: { start: 1444, end: 1473 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1476, end: 1481 },
							},
							loc: { start: 1476, end: 1481 },
						},
						loc: { start: 1476, end: 1482 },
					},
					directives: [],
					loc: { start: 1395, end: 1482 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 1485, end: 1496 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1497, end: 1499 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1501, end: 1503 },
									},
									loc: { start: 1501, end: 1503 },
								},
								loc: { start: 1501, end: 1504 },
							},
							directives: [],
							loc: { start: 1497, end: 1504 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1507, end: 1512 },
							},
							loc: { start: 1507, end: 1512 },
						},
						loc: { start: 1507, end: 1513 },
					},
					directives: [],
					loc: { start: 1485, end: 1513 },
				},
			],
			loc: { start: 1335, end: 1515 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1522, end: 1527 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1532, end: 1534 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1536, end: 1538 },
							},
							loc: { start: 1536, end: 1538 },
						},
						loc: { start: 1536, end: 1539 },
					},
					directives: [],
					loc: { start: 1532, end: 1539 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1542, end: 1547 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1549, end: 1552 },
							},
							loc: { start: 1549, end: 1552 },
						},
						loc: { start: 1549, end: 1553 },
					},
					directives: [],
					loc: { start: 1542, end: 1553 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1556, end: 1562 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1564, end: 1570 },
							},
							loc: { start: 1564, end: 1570 },
						},
						loc: { start: 1564, end: 1571 },
					},
					directives: [],
					loc: { start: 1556, end: 1571 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1574, end: 1584 },
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
										loc: { start: 1587, end: 1596 },
									},
									loc: { start: 1587, end: 1596 },
								},
								loc: { start: 1587, end: 1597 },
							},
							loc: { start: 1586, end: 1598 },
						},
						loc: { start: 1586, end: 1599 },
					},
					directives: [],
					loc: { start: 1574, end: 1599 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1602, end: 1611 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1613, end: 1621 },
							},
							loc: { start: 1613, end: 1621 },
						},
						loc: { start: 1613, end: 1622 },
					},
					directives: [],
					loc: { start: 1602, end: 1622 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1625, end: 1634 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1636, end: 1644 },
							},
							loc: { start: 1636, end: 1644 },
						},
						loc: { start: 1636, end: 1645 },
					},
					directives: [],
					loc: { start: 1625, end: 1645 },
				},
			],
			loc: { start: 1517, end: 1647 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductColor",
				loc: { start: 1653, end: 1665 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1670, end: 1672 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1674, end: 1676 },
							},
							loc: { start: 1674, end: 1676 },
						},
						loc: { start: 1674, end: 1677 },
					},
					directives: [],
					loc: { start: 1670, end: 1677 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1680, end: 1684 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1686, end: 1692 },
							},
							loc: { start: 1686, end: 1692 },
						},
						loc: { start: 1686, end: 1693 },
					},
					directives: [],
					loc: { start: 1680, end: 1693 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1696, end: 1701 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1703, end: 1709 },
							},
							loc: { start: 1703, end: 1709 },
						},
						loc: { start: 1703, end: 1710 },
					},
					directives: [],
					loc: { start: 1696, end: 1710 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1713, end: 1721 },
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
										value: "Product",
										loc: { start: 1724, end: 1731 },
									},
									loc: { start: 1724, end: 1731 },
								},
								loc: { start: 1724, end: 1732 },
							},
							loc: { start: 1723, end: 1733 },
						},
						loc: { start: 1723, end: 1734 },
					},
					directives: [],
					loc: { start: 1713, end: 1734 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1737, end: 1746 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1748, end: 1756 },
							},
							loc: { start: 1748, end: 1756 },
						},
						loc: { start: 1748, end: 1757 },
					},
					directives: [],
					loc: { start: 1737, end: 1757 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1760, end: 1769 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1771, end: 1779 },
							},
							loc: { start: 1771, end: 1779 },
						},
						loc: { start: 1771, end: 1780 },
					},
					directives: [],
					loc: { start: 1760, end: 1780 },
				},
			],
			loc: { start: 1648, end: 1782 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductSize",
				loc: { start: 1788, end: 1799 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1804, end: 1806 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1808, end: 1810 },
							},
							loc: { start: 1808, end: 1810 },
						},
						loc: { start: 1808, end: 1811 },
					},
					directives: [],
					loc: { start: 1804, end: 1811 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1814, end: 1818 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1820, end: 1826 },
							},
							loc: { start: 1820, end: 1826 },
						},
						loc: { start: 1820, end: 1827 },
					},
					directives: [],
					loc: { start: 1814, end: 1827 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1830, end: 1835 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1837, end: 1840 },
							},
							loc: { start: 1837, end: 1840 },
						},
						loc: { start: 1837, end: 1841 },
					},
					directives: [],
					loc: { start: 1830, end: 1841 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1844, end: 1852 },
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
										value: "Product",
										loc: { start: 1855, end: 1862 },
									},
									loc: { start: 1855, end: 1862 },
								},
								loc: { start: 1855, end: 1863 },
							},
							loc: { start: 1854, end: 1864 },
						},
						loc: { start: 1854, end: 1865 },
					},
					directives: [],
					loc: { start: 1844, end: 1865 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1868, end: 1877 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1879, end: 1887 },
							},
							loc: { start: 1879, end: 1887 },
						},
						loc: { start: 1879, end: 1888 },
					},
					directives: [],
					loc: { start: 1868, end: 1888 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1891, end: 1900 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1902, end: 1910 },
							},
							loc: { start: 1902, end: 1910 },
						},
						loc: { start: 1902, end: 1911 },
					},
					directives: [],
					loc: { start: 1891, end: 1911 },
				},
			],
			loc: { start: 1783, end: 1913 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductsInputFilter",
				loc: { start: 1920, end: 1939 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1944, end: 1946 } },
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ID",
							loc: { start: 1948, end: 1950 },
						},
						loc: { start: 1948, end: 1950 },
					},
					directives: [],
					loc: { start: 1944, end: 1950 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1953, end: 1957 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1959, end: 1965 },
						},
						loc: { start: 1959, end: 1965 },
					},
					directives: [],
					loc: { start: 1953, end: 1965 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1968, end: 1979 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1981, end: 1987 },
						},
						loc: { start: 1981, end: 1987 },
					},
					directives: [],
					loc: { start: 1968, end: 1987 },
				},
			],
			loc: { start: 1914, end: 1989 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 2003, end: 2008 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2013, end: 2020 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 2021, end: 2023 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 2025, end: 2027 },
									},
									loc: { start: 2025, end: 2027 },
								},
								loc: { start: 2025, end: 2028 },
							},
							directives: [],
							loc: { start: 2021, end: 2028 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 2031, end: 2038 },
						},
						loc: { start: 2031, end: 2038 },
					},
					directives: [],
					loc: { start: 2013, end: 2038 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 2041, end: 2049 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 2050, end: 2055 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2057, end: 2063 },
								},
								loc: { start: 2057, end: 2063 },
							},
							directives: [],
							loc: { start: 2050, end: 2063 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 2065, end: 2070 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 2072, end: 2075 },
								},
								loc: { start: 2072, end: 2075 },
							},
							directives: [],
							loc: { start: 2065, end: 2075 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 2077, end: 2081 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 2083, end: 2086 },
								},
								loc: { start: 2083, end: 2086 },
							},
							directives: [],
							loc: { start: 2077, end: 2086 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 2088, end: 2096 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2098, end: 2104 },
								},
								loc: { start: 2098, end: 2104 },
							},
							directives: [],
							loc: { start: 2088, end: 2104 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "collection",
								loc: { start: 2106, end: 2116 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2118, end: 2124 },
								},
								loc: { start: 2118, end: 2124 },
							},
							directives: [],
							loc: { start: 2106, end: 2124 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 2126, end: 2130 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2132, end: 2138 },
								},
								loc: { start: 2132, end: 2138 },
							},
							directives: [],
							loc: { start: 2126, end: 2138 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "description",
								loc: { start: 2140, end: 2151 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2153, end: 2159 },
								},
								loc: { start: 2153, end: 2159 },
							},
							directives: [],
							loc: { start: 2140, end: 2159 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2163, end: 2170 },
							},
							loc: { start: 2163, end: 2170 },
						},
						loc: { start: 2162, end: 2171 },
					},
					directives: [],
					loc: { start: 2041, end: 2171 },
				},
			],
			loc: { start: 1991, end: 2173 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 2180, end: 2187 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2192, end: 2194 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2196, end: 2198 },
							},
							loc: { start: 2196, end: 2198 },
						},
						loc: { start: 2196, end: 2199 },
					},
					directives: [],
					loc: { start: 2192, end: 2199 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2202, end: 2206 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2208, end: 2214 },
							},
							loc: { start: 2208, end: 2214 },
						},
						loc: { start: 2208, end: 2215 },
					},
					directives: [],
					loc: { start: 2202, end: 2215 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 2218, end: 2222 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2224, end: 2230 },
							},
							loc: { start: 2224, end: 2230 },
						},
						loc: { start: 2224, end: 2231 },
					},
					directives: [],
					loc: { start: 2218, end: 2231 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2234, end: 2245 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2247, end: 2253 },
							},
							loc: { start: 2247, end: 2253 },
						},
						loc: { start: 2247, end: 2254 },
					},
					directives: [],
					loc: { start: 2234, end: 2254 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "sizes",
						loc: { start: 2257, end: 2262 },
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
										value: "ProductSize",
										loc: { start: 2265, end: 2276 },
									},
									loc: { start: 2265, end: 2276 },
								},
								loc: { start: 2265, end: 2277 },
							},
							loc: { start: 2264, end: 2278 },
						},
						loc: { start: 2264, end: 2279 },
					},
					directives: [],
					loc: { start: 2257, end: 2279 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "colors",
						loc: { start: 2282, end: 2288 },
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
										value: "ProductColor",
										loc: { start: 2291, end: 2303 },
									},
									loc: { start: 2291, end: 2303 },
								},
								loc: { start: 2291, end: 2304 },
							},
							loc: { start: 2290, end: 2305 },
						},
						loc: { start: 2290, end: 2306 },
					},
					directives: [],
					loc: { start: 2282, end: 2306 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 2309, end: 2314 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2316, end: 2319 },
							},
							loc: { start: 2316, end: 2319 },
						},
						loc: { start: 2316, end: 2320 },
					},
					directives: [],
					loc: { start: 2309, end: 2320 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 2323, end: 2329 },
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
										loc: { start: 2332, end: 2337 },
									},
									loc: { start: 2332, end: 2337 },
								},
								loc: { start: 2332, end: 2338 },
							},
							loc: { start: 2331, end: 2339 },
						},
						loc: { start: 2331, end: 2340 },
					},
					directives: [],
					loc: { start: 2323, end: 2340 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2343, end: 2352 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2354, end: 2362 },
							},
							loc: { start: 2354, end: 2362 },
						},
						loc: { start: 2354, end: 2363 },
					},
					directives: [],
					loc: { start: 2343, end: 2363 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2366, end: 2375 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2377, end: 2385 },
							},
							loc: { start: 2377, end: 2385 },
						},
						loc: { start: 2377, end: 2386 },
					},
					directives: [],
					loc: { start: 2366, end: 2386 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 2389, end: 2396 },
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
										loc: { start: 2399, end: 2405 },
									},
									loc: { start: 2399, end: 2405 },
								},
								loc: { start: 2399, end: 2406 },
							},
							loc: { start: 2398, end: 2407 },
						},
						loc: { start: 2398, end: 2408 },
					},
					directives: [],
					loc: { start: 2389, end: 2408 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 2411, end: 2421 },
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
										loc: { start: 2424, end: 2433 },
									},
									loc: { start: 2424, end: 2433 },
								},
								loc: { start: 2424, end: 2434 },
							},
							loc: { start: 2423, end: 2435 },
						},
						loc: { start: 2423, end: 2436 },
					},
					directives: [],
					loc: { start: 2411, end: 2436 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 2439, end: 2449 },
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
										loc: { start: 2452, end: 2460 },
									},
									loc: { start: 2452, end: 2460 },
								},
								loc: { start: 2452, end: 2461 },
							},
							loc: { start: 2451, end: 2462 },
						},
						loc: { start: 2451, end: 2463 },
					},
					directives: [],
					loc: { start: 2439, end: 2463 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 2466, end: 2477 },
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
										loc: { start: 2480, end: 2490 },
									},
									loc: { start: 2480, end: 2490 },
								},
								loc: { start: 2480, end: 2491 },
							},
							loc: { start: 2479, end: 2492 },
						},
						loc: { start: 2479, end: 2493 },
					},
					directives: [],
					loc: { start: 2466, end: 2493 },
				},
			],
			loc: { start: 2175, end: 2495 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2501, end: 2507 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2512, end: 2514 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2516, end: 2518 },
							},
							loc: { start: 2516, end: 2518 },
						},
						loc: { start: 2516, end: 2519 },
					},
					directives: [],
					loc: { start: 2512, end: 2519 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 2522, end: 2527 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2529, end: 2535 },
							},
							loc: { start: 2529, end: 2535 },
						},
						loc: { start: 2529, end: 2536 },
					},
					directives: [],
					loc: { start: 2522, end: 2536 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2539, end: 2550 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2552, end: 2558 },
							},
							loc: { start: 2552, end: 2558 },
						},
						loc: { start: 2552, end: 2559 },
					},
					directives: [],
					loc: { start: 2539, end: 2559 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2562, end: 2568 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2570, end: 2573 },
							},
							loc: { start: 2570, end: 2573 },
						},
						loc: { start: 2570, end: 2574 },
					},
					directives: [],
					loc: { start: 2562, end: 2574 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2577, end: 2586 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2588, end: 2596 },
							},
							loc: { start: 2588, end: 2596 },
						},
						loc: { start: 2588, end: 2597 },
					},
					directives: [],
					loc: { start: 2577, end: 2597 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2600, end: 2609 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2611, end: 2619 },
							},
							loc: { start: 2611, end: 2619 },
						},
						loc: { start: 2611, end: 2620 },
					},
					directives: [],
					loc: { start: 2600, end: 2620 },
				},
			],
			loc: { start: 2496, end: 2622 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 2628, end: 2633 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2623, end: 2633 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 2640, end: 2648 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2635, end: 2648 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 2657, end: 2665 },
			},
			directives: [],
			loc: { start: 2650, end: 2665 },
		},
	],
	loc: { start: 0, end: 2666 },
} as unknown as DocumentNode;
