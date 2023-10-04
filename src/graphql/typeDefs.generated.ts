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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrderItem",
						loc: { start: 885, end: 900 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 901, end: 903 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 905, end: 907 },
									},
									loc: { start: 905, end: 907 },
								},
								loc: { start: 905, end: 908 },
							},
							directives: [],
							loc: { start: 901, end: 908 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "quantity",
								loc: { start: 910, end: 918 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 920, end: 923 },
									},
									loc: { start: 920, end: 923 },
								},
								loc: { start: 920, end: 924 },
							},
							directives: [],
							loc: { start: 910, end: 924 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 926, end: 931 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 933, end: 936 },
									},
									loc: { start: 933, end: 936 },
								},
								loc: { start: 933, end: 937 },
							},
							directives: [],
							loc: { start: 926, end: 937 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "order",
								loc: { start: 939, end: 944 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderInput",
										loc: { start: 946, end: 956 },
									},
									loc: { start: 946, end: 956 },
								},
								loc: { start: 946, end: 957 },
							},
							directives: [],
							loc: { start: 939, end: 957 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 959, end: 966 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ProductInput",
										loc: { start: 968, end: 980 },
									},
									loc: { start: 968, end: 980 },
								},
								loc: { start: 968, end: 981 },
							},
							directives: [],
							loc: { start: 959, end: 981 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 984, end: 993 },
							},
							loc: { start: 984, end: 993 },
						},
						loc: { start: 984, end: 994 },
					},
					directives: [],
					loc: { start: 885, end: 994 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateProductQuantity",
						loc: { start: 997, end: 1018 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 1019, end: 1028 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1030, end: 1032 },
									},
									loc: { start: 1030, end: 1032 },
								},
								loc: { start: 1030, end: 1033 },
							},
							directives: [],
							loc: { start: 1019, end: 1033 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "quantity",
								loc: { start: 1035, end: 1043 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1045, end: 1048 },
									},
									loc: { start: 1045, end: 1048 },
								},
								loc: { start: 1045, end: 1049 },
							},
							directives: [],
							loc: { start: 1035, end: 1049 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 1051, end: 1056 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1058, end: 1061 },
									},
									loc: { start: 1058, end: 1061 },
								},
								loc: { start: 1058, end: 1062 },
							},
							directives: [],
							loc: { start: 1051, end: 1062 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 1065, end: 1074 },
							},
							loc: { start: 1065, end: 1074 },
						},
						loc: { start: 1065, end: 1075 },
					},
					directives: [],
					loc: { start: 997, end: 1075 },
				},
			],
			loc: { start: 757, end: 1077 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1084, end: 1093 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1098, end: 1100 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1102, end: 1104 },
							},
							loc: { start: 1102, end: 1104 },
						},
						loc: { start: 1102, end: 1105 },
					},
					directives: [],
					loc: { start: 1098, end: 1105 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1108, end: 1116 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1118, end: 1121 },
							},
							loc: { start: 1118, end: 1121 },
						},
						loc: { start: 1118, end: 1122 },
					},
					directives: [],
					loc: { start: 1108, end: 1122 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1125, end: 1130 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1132, end: 1135 },
							},
							loc: { start: 1132, end: 1135 },
						},
						loc: { start: 1132, end: 1136 },
					},
					directives: [],
					loc: { start: 1125, end: 1136 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 1139, end: 1148 },
					},
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
					loc: { start: 1139, end: 1153 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderId",
						loc: { start: 1156, end: 1163 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1165, end: 1167 },
							},
							loc: { start: 1165, end: 1167 },
						},
						loc: { start: 1165, end: 1168 },
					},
					directives: [],
					loc: { start: 1156, end: 1168 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1171, end: 1180 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1182, end: 1190 },
							},
							loc: { start: 1182, end: 1190 },
						},
						loc: { start: 1182, end: 1191 },
					},
					directives: [],
					loc: { start: 1171, end: 1191 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1194, end: 1203 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1205, end: 1213 },
							},
							loc: { start: 1205, end: 1213 },
						},
						loc: { start: 1205, end: 1214 },
					},
					directives: [],
					loc: { start: 1194, end: 1214 },
				},
			],
			loc: { start: 1079, end: 1216 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1229, end: 1234 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "order",
						loc: { start: 1239, end: 1244 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1245, end: 1247 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1249, end: 1251 },
									},
									loc: { start: 1249, end: 1251 },
								},
								loc: { start: 1249, end: 1252 },
							},
							directives: [],
							loc: { start: 1245, end: 1252 },
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
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 1271, end: 1276 },
						},
						loc: { start: 1271, end: 1276 },
					},
					directives: [],
					loc: { start: 1239, end: 1276 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 1279, end: 1285 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1286, end: 1291 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1293, end: 1296 },
								},
								loc: { start: 1293, end: 1296 },
							},
							directives: [],
							loc: { start: 1286, end: 1296 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1298, end: 1302 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1304, end: 1307 },
								},
								loc: { start: 1304, end: 1307 },
							},
							directives: [],
							loc: { start: 1298, end: 1307 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1309, end: 1315 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1317, end: 1323 },
								},
								loc: { start: 1317, end: 1323 },
							},
							directives: [],
							loc: { start: 1309, end: 1323 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1327, end: 1332 },
							},
							loc: { start: 1327, end: 1332 },
						},
						loc: { start: 1326, end: 1333 },
					},
					directives: [],
					loc: { start: 1279, end: 1333 },
				},
			],
			loc: { start: 1217, end: 1335 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItemInput",
				loc: { start: 1343, end: 1357 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1362, end: 1370 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1372, end: 1375 },
							},
							loc: { start: 1372, end: 1375 },
						},
						loc: { start: 1372, end: 1376 },
					},
					directives: [],
					loc: { start: 1362, end: 1376 },
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1379, end: 1381 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1383, end: 1385 },
							},
							loc: { start: 1383, end: 1385 },
						},
						loc: { start: 1383, end: 1386 },
					},
					directives: [],
					loc: { start: 1379, end: 1386 },
				},
			],
			loc: { start: 1337, end: 1388 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1402, end: 1410 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 1415, end: 1426 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 1427, end: 1432 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1434, end: 1437 },
									},
									loc: { start: 1434, end: 1437 },
								},
								loc: { start: 1434, end: 1438 },
							},
							directives: [],
							loc: { start: 1427, end: 1438 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1441, end: 1446 },
							},
							loc: { start: 1441, end: 1446 },
						},
						loc: { start: 1441, end: 1447 },
					},
					directives: [],
					loc: { start: 1415, end: 1447 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrder",
						loc: { start: 1450, end: 1461 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1462, end: 1464 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1466, end: 1468 },
									},
									loc: { start: 1466, end: 1468 },
								},
								loc: { start: 1466, end: 1469 },
							},
							directives: [],
							loc: { start: 1462, end: 1469 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1471, end: 1477 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1479, end: 1485 },
								},
								loc: { start: 1479, end: 1485 },
							},
							directives: [],
							loc: { start: 1471, end: 1485 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 1487, end: 1492 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1494, end: 1497 },
								},
								loc: { start: 1494, end: 1497 },
							},
							directives: [],
							loc: { start: 1487, end: 1497 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItems",
								loc: { start: 1499, end: 1509 },
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
											loc: { start: 1512, end: 1526 },
										},
										loc: { start: 1512, end: 1526 },
									},
									loc: { start: 1512, end: 1527 },
								},
								loc: { start: 1511, end: 1528 },
							},
							directives: [],
							loc: { start: 1499, end: 1528 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1531, end: 1536 },
							},
							loc: { start: 1531, end: 1536 },
						},
						loc: { start: 1531, end: 1537 },
					},
					directives: [],
					loc: { start: 1450, end: 1537 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 1540, end: 1551 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1552, end: 1554 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1556, end: 1558 },
									},
									loc: { start: 1556, end: 1558 },
								},
								loc: { start: 1556, end: 1559 },
							},
							directives: [],
							loc: { start: 1552, end: 1559 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1562, end: 1567 },
							},
							loc: { start: 1562, end: 1567 },
						},
						loc: { start: 1562, end: 1568 },
					},
					directives: [],
					loc: { start: 1540, end: 1568 },
				},
			],
			loc: { start: 1390, end: 1570 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1577, end: 1582 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1587, end: 1589 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1591, end: 1593 },
							},
							loc: { start: 1591, end: 1593 },
						},
						loc: { start: 1591, end: 1594 },
					},
					directives: [],
					loc: { start: 1587, end: 1594 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1597, end: 1602 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1604, end: 1607 },
							},
							loc: { start: 1604, end: 1607 },
						},
						loc: { start: 1604, end: 1608 },
					},
					directives: [],
					loc: { start: 1597, end: 1608 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1611, end: 1617 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1619, end: 1625 },
							},
							loc: { start: 1619, end: 1625 },
						},
						loc: { start: 1619, end: 1626 },
					},
					directives: [],
					loc: { start: 1611, end: 1626 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1629, end: 1639 },
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
										loc: { start: 1642, end: 1651 },
									},
									loc: { start: 1642, end: 1651 },
								},
								loc: { start: 1642, end: 1652 },
							},
							loc: { start: 1641, end: 1653 },
						},
						loc: { start: 1641, end: 1654 },
					},
					directives: [],
					loc: { start: 1629, end: 1654 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1657, end: 1666 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1668, end: 1676 },
							},
							loc: { start: 1668, end: 1676 },
						},
						loc: { start: 1668, end: 1677 },
					},
					directives: [],
					loc: { start: 1657, end: 1677 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1680, end: 1689 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1691, end: 1699 },
							},
							loc: { start: 1691, end: 1699 },
						},
						loc: { start: 1691, end: 1700 },
					},
					directives: [],
					loc: { start: 1680, end: 1700 },
				},
			],
			loc: { start: 1572, end: 1702 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductColor",
				loc: { start: 1708, end: 1720 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1725, end: 1727 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1729, end: 1731 },
							},
							loc: { start: 1729, end: 1731 },
						},
						loc: { start: 1729, end: 1732 },
					},
					directives: [],
					loc: { start: 1725, end: 1732 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1735, end: 1739 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1741, end: 1747 },
							},
							loc: { start: 1741, end: 1747 },
						},
						loc: { start: 1741, end: 1748 },
					},
					directives: [],
					loc: { start: 1735, end: 1748 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1751, end: 1756 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1758, end: 1764 },
							},
							loc: { start: 1758, end: 1764 },
						},
						loc: { start: 1758, end: 1765 },
					},
					directives: [],
					loc: { start: 1751, end: 1765 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1768, end: 1776 },
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
										loc: { start: 1779, end: 1786 },
									},
									loc: { start: 1779, end: 1786 },
								},
								loc: { start: 1779, end: 1787 },
							},
							loc: { start: 1778, end: 1788 },
						},
						loc: { start: 1778, end: 1789 },
					},
					directives: [],
					loc: { start: 1768, end: 1789 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1792, end: 1801 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1803, end: 1811 },
							},
							loc: { start: 1803, end: 1811 },
						},
						loc: { start: 1803, end: 1812 },
					},
					directives: [],
					loc: { start: 1792, end: 1812 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1815, end: 1824 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1826, end: 1834 },
							},
							loc: { start: 1826, end: 1834 },
						},
						loc: { start: 1826, end: 1835 },
					},
					directives: [],
					loc: { start: 1815, end: 1835 },
				},
			],
			loc: { start: 1703, end: 1837 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductSize",
				loc: { start: 1843, end: 1854 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1859, end: 1861 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1863, end: 1865 },
							},
							loc: { start: 1863, end: 1865 },
						},
						loc: { start: 1863, end: 1866 },
					},
					directives: [],
					loc: { start: 1859, end: 1866 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1869, end: 1873 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1875, end: 1881 },
							},
							loc: { start: 1875, end: 1881 },
						},
						loc: { start: 1875, end: 1882 },
					},
					directives: [],
					loc: { start: 1869, end: 1882 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1885, end: 1890 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1892, end: 1895 },
							},
							loc: { start: 1892, end: 1895 },
						},
						loc: { start: 1892, end: 1896 },
					},
					directives: [],
					loc: { start: 1885, end: 1896 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1899, end: 1907 },
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
										loc: { start: 1910, end: 1917 },
									},
									loc: { start: 1910, end: 1917 },
								},
								loc: { start: 1910, end: 1918 },
							},
							loc: { start: 1909, end: 1919 },
						},
						loc: { start: 1909, end: 1920 },
					},
					directives: [],
					loc: { start: 1899, end: 1920 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1923, end: 1932 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1934, end: 1942 },
							},
							loc: { start: 1934, end: 1942 },
						},
						loc: { start: 1934, end: 1943 },
					},
					directives: [],
					loc: { start: 1923, end: 1943 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1946, end: 1955 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1957, end: 1965 },
							},
							loc: { start: 1957, end: 1965 },
						},
						loc: { start: 1957, end: 1966 },
					},
					directives: [],
					loc: { start: 1946, end: 1966 },
				},
			],
			loc: { start: 1838, end: 1968 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductsInputFilter",
				loc: { start: 1975, end: 1994 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1999, end: 2001 } },
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ID",
							loc: { start: 2003, end: 2005 },
						},
						loc: { start: 2003, end: 2005 },
					},
					directives: [],
					loc: { start: 1999, end: 2005 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2008, end: 2012 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 2014, end: 2020 },
						},
						loc: { start: 2014, end: 2020 },
					},
					directives: [],
					loc: { start: 2008, end: 2020 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2023, end: 2034 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 2036, end: 2042 },
						},
						loc: { start: 2036, end: 2042 },
					},
					directives: [],
					loc: { start: 2023, end: 2042 },
				},
			],
			loc: { start: 1969, end: 2044 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 2058, end: 2063 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2068, end: 2075 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 2076, end: 2078 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 2080, end: 2082 },
									},
									loc: { start: 2080, end: 2082 },
								},
								loc: { start: 2080, end: 2083 },
							},
							directives: [],
							loc: { start: 2076, end: 2083 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 2086, end: 2093 },
						},
						loc: { start: 2086, end: 2093 },
					},
					directives: [],
					loc: { start: 2068, end: 2093 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 2096, end: 2104 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 2105, end: 2110 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2112, end: 2118 },
								},
								loc: { start: 2112, end: 2118 },
							},
							directives: [],
							loc: { start: 2105, end: 2118 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 2120, end: 2125 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 2127, end: 2130 },
								},
								loc: { start: 2127, end: 2130 },
							},
							directives: [],
							loc: { start: 2120, end: 2130 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 2132, end: 2136 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 2138, end: 2141 },
								},
								loc: { start: 2138, end: 2141 },
							},
							directives: [],
							loc: { start: 2132, end: 2141 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 2143, end: 2151 },
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
							loc: { start: 2143, end: 2159 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "collection",
								loc: { start: 2161, end: 2171 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2173, end: 2179 },
								},
								loc: { start: 2173, end: 2179 },
							},
							directives: [],
							loc: { start: 2161, end: 2179 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 2181, end: 2185 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2187, end: 2193 },
								},
								loc: { start: 2187, end: 2193 },
							},
							directives: [],
							loc: { start: 2181, end: 2193 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "description",
								loc: { start: 2195, end: 2206 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2208, end: 2214 },
								},
								loc: { start: 2208, end: 2214 },
							},
							directives: [],
							loc: { start: 2195, end: 2214 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2218, end: 2225 },
							},
							loc: { start: 2218, end: 2225 },
						},
						loc: { start: 2217, end: 2226 },
					},
					directives: [],
					loc: { start: 2096, end: 2226 },
				},
			],
			loc: { start: 2046, end: 2228 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 2235, end: 2242 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2247, end: 2249 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2251, end: 2253 },
							},
							loc: { start: 2251, end: 2253 },
						},
						loc: { start: 2251, end: 2254 },
					},
					directives: [],
					loc: { start: 2247, end: 2254 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2257, end: 2261 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2263, end: 2269 },
							},
							loc: { start: 2263, end: 2269 },
						},
						loc: { start: 2263, end: 2270 },
					},
					directives: [],
					loc: { start: 2257, end: 2270 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 2273, end: 2277 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2279, end: 2285 },
							},
							loc: { start: 2279, end: 2285 },
						},
						loc: { start: 2279, end: 2286 },
					},
					directives: [],
					loc: { start: 2273, end: 2286 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2289, end: 2300 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2302, end: 2308 },
							},
							loc: { start: 2302, end: 2308 },
						},
						loc: { start: 2302, end: 2309 },
					},
					directives: [],
					loc: { start: 2289, end: 2309 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "sizes",
						loc: { start: 2312, end: 2317 },
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
										loc: { start: 2320, end: 2331 },
									},
									loc: { start: 2320, end: 2331 },
								},
								loc: { start: 2320, end: 2332 },
							},
							loc: { start: 2319, end: 2333 },
						},
						loc: { start: 2319, end: 2334 },
					},
					directives: [],
					loc: { start: 2312, end: 2334 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "colors",
						loc: { start: 2337, end: 2343 },
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
										loc: { start: 2346, end: 2358 },
									},
									loc: { start: 2346, end: 2358 },
								},
								loc: { start: 2346, end: 2359 },
							},
							loc: { start: 2345, end: 2360 },
						},
						loc: { start: 2345, end: 2361 },
					},
					directives: [],
					loc: { start: 2337, end: 2361 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 2364, end: 2369 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2371, end: 2374 },
							},
							loc: { start: 2371, end: 2374 },
						},
						loc: { start: 2371, end: 2375 },
					},
					directives: [],
					loc: { start: 2364, end: 2375 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 2378, end: 2384 },
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
										loc: { start: 2387, end: 2392 },
									},
									loc: { start: 2387, end: 2392 },
								},
								loc: { start: 2387, end: 2393 },
							},
							loc: { start: 2386, end: 2394 },
						},
						loc: { start: 2386, end: 2395 },
					},
					directives: [],
					loc: { start: 2378, end: 2395 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2398, end: 2407 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2409, end: 2417 },
							},
							loc: { start: 2409, end: 2417 },
						},
						loc: { start: 2409, end: 2418 },
					},
					directives: [],
					loc: { start: 2398, end: 2418 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2421, end: 2430 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2432, end: 2440 },
							},
							loc: { start: 2432, end: 2440 },
						},
						loc: { start: 2432, end: 2441 },
					},
					directives: [],
					loc: { start: 2421, end: 2441 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 2444, end: 2451 },
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
										loc: { start: 2454, end: 2460 },
									},
									loc: { start: 2454, end: 2460 },
								},
								loc: { start: 2454, end: 2461 },
							},
							loc: { start: 2453, end: 2462 },
						},
						loc: { start: 2453, end: 2463 },
					},
					directives: [],
					loc: { start: 2444, end: 2463 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 2466, end: 2476 },
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
										loc: { start: 2479, end: 2488 },
									},
									loc: { start: 2479, end: 2488 },
								},
								loc: { start: 2479, end: 2489 },
							},
							loc: { start: 2478, end: 2490 },
						},
						loc: { start: 2478, end: 2491 },
					},
					directives: [],
					loc: { start: 2466, end: 2491 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 2494, end: 2504 },
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
										loc: { start: 2507, end: 2515 },
									},
									loc: { start: 2507, end: 2515 },
								},
								loc: { start: 2507, end: 2516 },
							},
							loc: { start: 2506, end: 2517 },
						},
						loc: { start: 2506, end: 2518 },
					},
					directives: [],
					loc: { start: 2494, end: 2518 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 2521, end: 2532 },
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
										loc: { start: 2535, end: 2545 },
									},
									loc: { start: 2535, end: 2545 },
								},
								loc: { start: 2535, end: 2546 },
							},
							loc: { start: 2534, end: 2547 },
						},
						loc: { start: 2534, end: 2548 },
					},
					directives: [],
					loc: { start: 2521, end: 2548 },
				},
			],
			loc: { start: 2230, end: 2550 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2556, end: 2562 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2567, end: 2569 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2571, end: 2573 },
							},
							loc: { start: 2571, end: 2573 },
						},
						loc: { start: 2571, end: 2574 },
					},
					directives: [],
					loc: { start: 2567, end: 2574 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 2577, end: 2582 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2584, end: 2590 },
							},
							loc: { start: 2584, end: 2590 },
						},
						loc: { start: 2584, end: 2591 },
					},
					directives: [],
					loc: { start: 2577, end: 2591 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2594, end: 2605 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2607, end: 2613 },
							},
							loc: { start: 2607, end: 2613 },
						},
						loc: { start: 2607, end: 2614 },
					},
					directives: [],
					loc: { start: 2594, end: 2614 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2617, end: 2623 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2625, end: 2628 },
							},
							loc: { start: 2625, end: 2628 },
						},
						loc: { start: 2625, end: 2629 },
					},
					directives: [],
					loc: { start: 2617, end: 2629 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2632, end: 2641 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2643, end: 2651 },
							},
							loc: { start: 2643, end: 2651 },
						},
						loc: { start: 2643, end: 2652 },
					},
					directives: [],
					loc: { start: 2632, end: 2652 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2655, end: 2664 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2666, end: 2674 },
							},
							loc: { start: 2666, end: 2674 },
						},
						loc: { start: 2666, end: 2675 },
					},
					directives: [],
					loc: { start: 2655, end: 2675 },
				},
			],
			loc: { start: 2551, end: 2677 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 2683, end: 2688 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2678, end: 2688 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 2695, end: 2703 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2690, end: 2703 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 2712, end: 2720 },
			},
			directives: [],
			loc: { start: 2705, end: 2720 },
		},
	],
	loc: { start: 0, end: 2721 },
} as unknown as DocumentNode;
