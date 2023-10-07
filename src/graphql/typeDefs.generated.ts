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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrderItem",
						loc: { start: 1078, end: 1093 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1094, end: 1096 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1098, end: 1100 },
									},
									loc: { start: 1098, end: 1100 },
								},
								loc: { start: 1098, end: 1101 },
							},
							directives: [],
							loc: { start: 1094, end: 1101 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "OrderItem",
								loc: { start: 1104, end: 1113 },
							},
							loc: { start: 1104, end: 1113 },
						},
						loc: { start: 1104, end: 1114 },
					},
					directives: [],
					loc: { start: 1078, end: 1114 },
				},
			],
			loc: { start: 757, end: 1116 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1123, end: 1132 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1137, end: 1139 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1141, end: 1143 },
							},
							loc: { start: 1141, end: 1143 },
						},
						loc: { start: 1141, end: 1144 },
					},
					directives: [],
					loc: { start: 1137, end: 1144 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1147, end: 1155 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1157, end: 1160 },
							},
							loc: { start: 1157, end: 1160 },
						},
						loc: { start: 1157, end: 1161 },
					},
					directives: [],
					loc: { start: 1147, end: 1161 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1164, end: 1169 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1171, end: 1174 },
							},
							loc: { start: 1171, end: 1174 },
						},
						loc: { start: 1171, end: 1175 },
					},
					directives: [],
					loc: { start: 1164, end: 1175 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 1178, end: 1187 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1189, end: 1191 },
							},
							loc: { start: 1189, end: 1191 },
						},
						loc: { start: 1189, end: 1192 },
					},
					directives: [],
					loc: { start: 1178, end: 1192 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderId",
						loc: { start: 1195, end: 1202 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1204, end: 1206 },
							},
							loc: { start: 1204, end: 1206 },
						},
						loc: { start: 1204, end: 1207 },
					},
					directives: [],
					loc: { start: 1195, end: 1207 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1210, end: 1219 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1221, end: 1229 },
							},
							loc: { start: 1221, end: 1229 },
						},
						loc: { start: 1221, end: 1230 },
					},
					directives: [],
					loc: { start: 1210, end: 1230 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1233, end: 1242 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1244, end: 1252 },
							},
							loc: { start: 1244, end: 1252 },
						},
						loc: { start: 1244, end: 1253 },
					},
					directives: [],
					loc: { start: 1233, end: 1253 },
				},
			],
			loc: { start: 1118, end: 1255 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1268, end: 1273 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "order",
						loc: { start: 1278, end: 1283 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1284, end: 1286 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1288, end: 1290 },
									},
									loc: { start: 1288, end: 1290 },
								},
								loc: { start: 1288, end: 1291 },
							},
							directives: [],
							loc: { start: 1284, end: 1291 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1293, end: 1299 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1301, end: 1307 },
								},
								loc: { start: 1301, end: 1307 },
							},
							directives: [],
							loc: { start: 1293, end: 1307 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 1310, end: 1315 },
						},
						loc: { start: 1310, end: 1315 },
					},
					directives: [],
					loc: { start: 1278, end: 1315 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 1318, end: 1324 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1325, end: 1330 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1332, end: 1335 },
								},
								loc: { start: 1332, end: 1335 },
							},
							directives: [],
							loc: { start: 1325, end: 1335 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1337, end: 1341 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1343, end: 1346 },
								},
								loc: { start: 1343, end: 1346 },
							},
							directives: [],
							loc: { start: 1337, end: 1346 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1348, end: 1354 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1356, end: 1362 },
								},
								loc: { start: 1356, end: 1362 },
							},
							directives: [],
							loc: { start: 1348, end: 1362 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1366, end: 1371 },
							},
							loc: { start: 1366, end: 1371 },
						},
						loc: { start: 1365, end: 1372 },
					},
					directives: [],
					loc: { start: 1318, end: 1372 },
				},
			],
			loc: { start: 1256, end: 1374 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItemInput",
				loc: { start: 1382, end: 1396 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1401, end: 1409 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1411, end: 1414 },
							},
							loc: { start: 1411, end: 1414 },
						},
						loc: { start: 1411, end: 1415 },
					},
					directives: [],
					loc: { start: 1401, end: 1415 },
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1418, end: 1420 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1422, end: 1424 },
							},
							loc: { start: 1422, end: 1424 },
						},
						loc: { start: 1422, end: 1425 },
					},
					directives: [],
					loc: { start: 1418, end: 1425 },
				},
			],
			loc: { start: 1376, end: 1427 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1441, end: 1449 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 1454, end: 1465 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 1466, end: 1471 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 1473, end: 1476 },
									},
									loc: { start: 1473, end: 1476 },
								},
								loc: { start: 1473, end: 1477 },
							},
							directives: [],
							loc: { start: 1466, end: 1477 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1480, end: 1485 },
							},
							loc: { start: 1480, end: 1485 },
						},
						loc: { start: 1480, end: 1486 },
					},
					directives: [],
					loc: { start: 1454, end: 1486 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrder",
						loc: { start: 1489, end: 1500 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1501, end: 1503 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1505, end: 1507 },
									},
									loc: { start: 1505, end: 1507 },
								},
								loc: { start: 1505, end: 1508 },
							},
							directives: [],
							loc: { start: 1501, end: 1508 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1510, end: 1516 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1518, end: 1524 },
								},
								loc: { start: 1518, end: 1524 },
							},
							directives: [],
							loc: { start: 1510, end: 1524 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 1526, end: 1531 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1533, end: 1536 },
								},
								loc: { start: 1533, end: 1536 },
							},
							directives: [],
							loc: { start: 1526, end: 1536 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItems",
								loc: { start: 1538, end: 1548 },
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
											loc: { start: 1551, end: 1565 },
										},
										loc: { start: 1551, end: 1565 },
									},
									loc: { start: 1551, end: 1566 },
								},
								loc: { start: 1550, end: 1567 },
							},
							directives: [],
							loc: { start: 1538, end: 1567 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1570, end: 1575 },
							},
							loc: { start: 1570, end: 1575 },
						},
						loc: { start: 1570, end: 1576 },
					},
					directives: [],
					loc: { start: 1489, end: 1576 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 1579, end: 1590 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1591, end: 1593 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1595, end: 1597 },
									},
									loc: { start: 1595, end: 1597 },
								},
								loc: { start: 1595, end: 1598 },
							},
							directives: [],
							loc: { start: 1591, end: 1598 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1601, end: 1606 },
							},
							loc: { start: 1601, end: 1606 },
						},
						loc: { start: 1601, end: 1607 },
					},
					directives: [],
					loc: { start: 1579, end: 1607 },
				},
			],
			loc: { start: 1429, end: 1609 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1616, end: 1621 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1626, end: 1628 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1630, end: 1632 },
							},
							loc: { start: 1630, end: 1632 },
						},
						loc: { start: 1630, end: 1633 },
					},
					directives: [],
					loc: { start: 1626, end: 1633 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1636, end: 1641 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1643, end: 1646 },
							},
							loc: { start: 1643, end: 1646 },
						},
						loc: { start: 1643, end: 1647 },
					},
					directives: [],
					loc: { start: 1636, end: 1647 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1650, end: 1656 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1658, end: 1664 },
							},
							loc: { start: 1658, end: 1664 },
						},
						loc: { start: 1658, end: 1665 },
					},
					directives: [],
					loc: { start: 1650, end: 1665 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1668, end: 1678 },
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
										loc: { start: 1681, end: 1690 },
									},
									loc: { start: 1681, end: 1690 },
								},
								loc: { start: 1681, end: 1691 },
							},
							loc: { start: 1680, end: 1692 },
						},
						loc: { start: 1680, end: 1693 },
					},
					directives: [],
					loc: { start: 1668, end: 1693 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1696, end: 1705 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1707, end: 1715 },
							},
							loc: { start: 1707, end: 1715 },
						},
						loc: { start: 1707, end: 1716 },
					},
					directives: [],
					loc: { start: 1696, end: 1716 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1719, end: 1728 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1730, end: 1738 },
							},
							loc: { start: 1730, end: 1738 },
						},
						loc: { start: 1730, end: 1739 },
					},
					directives: [],
					loc: { start: 1719, end: 1739 },
				},
			],
			loc: { start: 1611, end: 1741 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductColor",
				loc: { start: 1747, end: 1759 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1764, end: 1766 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1768, end: 1770 },
							},
							loc: { start: 1768, end: 1770 },
						},
						loc: { start: 1768, end: 1771 },
					},
					directives: [],
					loc: { start: 1764, end: 1771 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1774, end: 1778 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1780, end: 1786 },
							},
							loc: { start: 1780, end: 1786 },
						},
						loc: { start: 1780, end: 1787 },
					},
					directives: [],
					loc: { start: 1774, end: 1787 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1790, end: 1795 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1797, end: 1803 },
							},
							loc: { start: 1797, end: 1803 },
						},
						loc: { start: 1797, end: 1804 },
					},
					directives: [],
					loc: { start: 1790, end: 1804 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1807, end: 1815 },
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
										loc: { start: 1818, end: 1825 },
									},
									loc: { start: 1818, end: 1825 },
								},
								loc: { start: 1818, end: 1826 },
							},
							loc: { start: 1817, end: 1827 },
						},
						loc: { start: 1817, end: 1828 },
					},
					directives: [],
					loc: { start: 1807, end: 1828 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1831, end: 1840 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1842, end: 1850 },
							},
							loc: { start: 1842, end: 1850 },
						},
						loc: { start: 1842, end: 1851 },
					},
					directives: [],
					loc: { start: 1831, end: 1851 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1854, end: 1863 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1865, end: 1873 },
							},
							loc: { start: 1865, end: 1873 },
						},
						loc: { start: 1865, end: 1874 },
					},
					directives: [],
					loc: { start: 1854, end: 1874 },
				},
			],
			loc: { start: 1742, end: 1876 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductSize",
				loc: { start: 1882, end: 1893 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1898, end: 1900 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1902, end: 1904 },
							},
							loc: { start: 1902, end: 1904 },
						},
						loc: { start: 1902, end: 1905 },
					},
					directives: [],
					loc: { start: 1898, end: 1905 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1908, end: 1912 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1914, end: 1920 },
							},
							loc: { start: 1914, end: 1920 },
						},
						loc: { start: 1914, end: 1921 },
					},
					directives: [],
					loc: { start: 1908, end: 1921 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1924, end: 1929 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1931, end: 1934 },
							},
							loc: { start: 1931, end: 1934 },
						},
						loc: { start: 1931, end: 1935 },
					},
					directives: [],
					loc: { start: 1924, end: 1935 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1938, end: 1946 },
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
										loc: { start: 1949, end: 1956 },
									},
									loc: { start: 1949, end: 1956 },
								},
								loc: { start: 1949, end: 1957 },
							},
							loc: { start: 1948, end: 1958 },
						},
						loc: { start: 1948, end: 1959 },
					},
					directives: [],
					loc: { start: 1938, end: 1959 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1962, end: 1971 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1973, end: 1981 },
							},
							loc: { start: 1973, end: 1981 },
						},
						loc: { start: 1973, end: 1982 },
					},
					directives: [],
					loc: { start: 1962, end: 1982 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1985, end: 1994 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1996, end: 2004 },
							},
							loc: { start: 1996, end: 2004 },
						},
						loc: { start: 1996, end: 2005 },
					},
					directives: [],
					loc: { start: 1985, end: 2005 },
				},
			],
			loc: { start: 1877, end: 2007 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductsInputFilter",
				loc: { start: 2014, end: 2033 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2038, end: 2040 } },
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ID",
							loc: { start: 2042, end: 2044 },
						},
						loc: { start: 2042, end: 2044 },
					},
					directives: [],
					loc: { start: 2038, end: 2044 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2047, end: 2051 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 2053, end: 2059 },
						},
						loc: { start: 2053, end: 2059 },
					},
					directives: [],
					loc: { start: 2047, end: 2059 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2062, end: 2073 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 2075, end: 2081 },
						},
						loc: { start: 2075, end: 2081 },
					},
					directives: [],
					loc: { start: 2062, end: 2081 },
				},
			],
			loc: { start: 2008, end: 2083 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 2097, end: 2102 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2107, end: 2114 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 2115, end: 2117 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 2119, end: 2121 },
									},
									loc: { start: 2119, end: 2121 },
								},
								loc: { start: 2119, end: 2122 },
							},
							directives: [],
							loc: { start: 2115, end: 2122 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 2125, end: 2132 },
						},
						loc: { start: 2125, end: 2132 },
					},
					directives: [],
					loc: { start: 2107, end: 2132 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 2135, end: 2143 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 2144, end: 2149 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2151, end: 2157 },
								},
								loc: { start: 2151, end: 2157 },
							},
							directives: [],
							loc: { start: 2144, end: 2157 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 2159, end: 2164 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 2166, end: 2169 },
								},
								loc: { start: 2166, end: 2169 },
							},
							directives: [],
							loc: { start: 2159, end: 2169 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 2171, end: 2175 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 2177, end: 2180 },
								},
								loc: { start: 2177, end: 2180 },
							},
							directives: [],
							loc: { start: 2171, end: 2180 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 2182, end: 2190 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2192, end: 2198 },
								},
								loc: { start: 2192, end: 2198 },
							},
							directives: [],
							loc: { start: 2182, end: 2198 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "collection",
								loc: { start: 2200, end: 2210 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2212, end: 2218 },
								},
								loc: { start: 2212, end: 2218 },
							},
							directives: [],
							loc: { start: 2200, end: 2218 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 2220, end: 2224 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2226, end: 2232 },
								},
								loc: { start: 2226, end: 2232 },
							},
							directives: [],
							loc: { start: 2220, end: 2232 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "description",
								loc: { start: 2234, end: 2245 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2247, end: 2253 },
								},
								loc: { start: 2247, end: 2253 },
							},
							directives: [],
							loc: { start: 2234, end: 2253 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2257, end: 2264 },
							},
							loc: { start: 2257, end: 2264 },
						},
						loc: { start: 2256, end: 2265 },
					},
					directives: [],
					loc: { start: 2135, end: 2265 },
				},
			],
			loc: { start: 2085, end: 2267 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 2274, end: 2281 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2286, end: 2288 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2290, end: 2292 },
							},
							loc: { start: 2290, end: 2292 },
						},
						loc: { start: 2290, end: 2293 },
					},
					directives: [],
					loc: { start: 2286, end: 2293 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2296, end: 2300 },
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
					loc: { start: 2296, end: 2309 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 2312, end: 2316 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2318, end: 2324 },
							},
							loc: { start: 2318, end: 2324 },
						},
						loc: { start: 2318, end: 2325 },
					},
					directives: [],
					loc: { start: 2312, end: 2325 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2328, end: 2339 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2341, end: 2347 },
							},
							loc: { start: 2341, end: 2347 },
						},
						loc: { start: 2341, end: 2348 },
					},
					directives: [],
					loc: { start: 2328, end: 2348 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "sizes",
						loc: { start: 2351, end: 2356 },
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
										loc: { start: 2359, end: 2370 },
									},
									loc: { start: 2359, end: 2370 },
								},
								loc: { start: 2359, end: 2371 },
							},
							loc: { start: 2358, end: 2372 },
						},
						loc: { start: 2358, end: 2373 },
					},
					directives: [],
					loc: { start: 2351, end: 2373 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "colors",
						loc: { start: 2376, end: 2382 },
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
										loc: { start: 2385, end: 2397 },
									},
									loc: { start: 2385, end: 2397 },
								},
								loc: { start: 2385, end: 2398 },
							},
							loc: { start: 2384, end: 2399 },
						},
						loc: { start: 2384, end: 2400 },
					},
					directives: [],
					loc: { start: 2376, end: 2400 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 2403, end: 2408 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2410, end: 2413 },
							},
							loc: { start: 2410, end: 2413 },
						},
						loc: { start: 2410, end: 2414 },
					},
					directives: [],
					loc: { start: 2403, end: 2414 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 2417, end: 2423 },
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
										loc: { start: 2426, end: 2431 },
									},
									loc: { start: 2426, end: 2431 },
								},
								loc: { start: 2426, end: 2432 },
							},
							loc: { start: 2425, end: 2433 },
						},
						loc: { start: 2425, end: 2434 },
					},
					directives: [],
					loc: { start: 2417, end: 2434 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2437, end: 2446 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2448, end: 2456 },
							},
							loc: { start: 2448, end: 2456 },
						},
						loc: { start: 2448, end: 2457 },
					},
					directives: [],
					loc: { start: 2437, end: 2457 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2460, end: 2469 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2471, end: 2479 },
							},
							loc: { start: 2471, end: 2479 },
						},
						loc: { start: 2471, end: 2480 },
					},
					directives: [],
					loc: { start: 2460, end: 2480 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 2483, end: 2490 },
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
										loc: { start: 2493, end: 2499 },
									},
									loc: { start: 2493, end: 2499 },
								},
								loc: { start: 2493, end: 2500 },
							},
							loc: { start: 2492, end: 2501 },
						},
						loc: { start: 2492, end: 2502 },
					},
					directives: [],
					loc: { start: 2483, end: 2502 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 2505, end: 2515 },
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
										loc: { start: 2518, end: 2527 },
									},
									loc: { start: 2518, end: 2527 },
								},
								loc: { start: 2518, end: 2528 },
							},
							loc: { start: 2517, end: 2529 },
						},
						loc: { start: 2517, end: 2530 },
					},
					directives: [],
					loc: { start: 2505, end: 2530 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 2533, end: 2543 },
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
										loc: { start: 2546, end: 2554 },
									},
									loc: { start: 2546, end: 2554 },
								},
								loc: { start: 2546, end: 2555 },
							},
							loc: { start: 2545, end: 2556 },
						},
						loc: { start: 2545, end: 2557 },
					},
					directives: [],
					loc: { start: 2533, end: 2557 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 2560, end: 2571 },
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
										loc: { start: 2574, end: 2584 },
									},
									loc: { start: 2574, end: 2584 },
								},
								loc: { start: 2574, end: 2585 },
							},
							loc: { start: 2573, end: 2586 },
						},
						loc: { start: 2573, end: 2587 },
					},
					directives: [],
					loc: { start: 2560, end: 2587 },
				},
			],
			loc: { start: 2269, end: 2589 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2595, end: 2601 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2606, end: 2608 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2610, end: 2612 },
							},
							loc: { start: 2610, end: 2612 },
						},
						loc: { start: 2610, end: 2613 },
					},
					directives: [],
					loc: { start: 2606, end: 2613 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 2616, end: 2621 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2623, end: 2629 },
							},
							loc: { start: 2623, end: 2629 },
						},
						loc: { start: 2623, end: 2630 },
					},
					directives: [],
					loc: { start: 2616, end: 2630 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2633, end: 2644 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2646, end: 2652 },
							},
							loc: { start: 2646, end: 2652 },
						},
						loc: { start: 2646, end: 2653 },
					},
					directives: [],
					loc: { start: 2633, end: 2653 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2656, end: 2662 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2664, end: 2667 },
							},
							loc: { start: 2664, end: 2667 },
						},
						loc: { start: 2664, end: 2668 },
					},
					directives: [],
					loc: { start: 2656, end: 2668 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2671, end: 2680 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2682, end: 2690 },
							},
							loc: { start: 2682, end: 2690 },
						},
						loc: { start: 2682, end: 2691 },
					},
					directives: [],
					loc: { start: 2671, end: 2691 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2694, end: 2703 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2705, end: 2713 },
							},
							loc: { start: 2705, end: 2713 },
						},
						loc: { start: 2705, end: 2714 },
					},
					directives: [],
					loc: { start: 2694, end: 2714 },
				},
			],
			loc: { start: 2590, end: 2716 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 2722, end: 2727 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2717, end: 2727 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 2734, end: 2742 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2729, end: 2742 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 2751, end: 2759 },
			},
			directives: [],
			loc: { start: 2744, end: 2759 },
		},
	],
	loc: { start: 0, end: 2760 },
} as unknown as DocumentNode;
