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
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 891, end: 900 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 905, end: 907 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 909, end: 911 },
							},
							loc: { start: 909, end: 911 },
						},
						loc: { start: 909, end: 912 },
					},
					directives: [],
					loc: { start: 905, end: 912 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 915, end: 923 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 925, end: 928 },
							},
							loc: { start: 925, end: 928 },
						},
						loc: { start: 925, end: 929 },
					},
					directives: [],
					loc: { start: 915, end: 929 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 932, end: 937 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 939, end: 942 },
							},
							loc: { start: 939, end: 942 },
						},
						loc: { start: 939, end: 943 },
					},
					directives: [],
					loc: { start: 932, end: 943 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 946, end: 955 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 957, end: 959 },
							},
							loc: { start: 957, end: 959 },
						},
						loc: { start: 957, end: 960 },
					},
					directives: [],
					loc: { start: 946, end: 960 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderId",
						loc: { start: 963, end: 970 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 972, end: 974 },
							},
							loc: { start: 972, end: 974 },
						},
						loc: { start: 972, end: 975 },
					},
					directives: [],
					loc: { start: 963, end: 975 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 978, end: 987 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 989, end: 997 },
							},
							loc: { start: 989, end: 997 },
						},
						loc: { start: 989, end: 998 },
					},
					directives: [],
					loc: { start: 978, end: 998 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1001, end: 1010 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1012, end: 1020 },
							},
							loc: { start: 1012, end: 1020 },
						},
						loc: { start: 1012, end: 1021 },
					},
					directives: [],
					loc: { start: 1001, end: 1021 },
				},
			],
			loc: { start: 886, end: 1023 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1036, end: 1041 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "order",
						loc: { start: 1046, end: 1051 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1052, end: 1054 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1056, end: 1058 },
									},
									loc: { start: 1056, end: 1058 },
								},
								loc: { start: 1056, end: 1059 },
							},
							directives: [],
							loc: { start: 1052, end: 1059 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1061, end: 1067 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1069, end: 1075 },
								},
								loc: { start: 1069, end: 1075 },
							},
							directives: [],
							loc: { start: 1061, end: 1075 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 1078, end: 1083 },
						},
						loc: { start: 1078, end: 1083 },
					},
					directives: [],
					loc: { start: 1046, end: 1083 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 1086, end: 1092 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1093, end: 1098 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1100, end: 1103 },
								},
								loc: { start: 1100, end: 1103 },
							},
							directives: [],
							loc: { start: 1093, end: 1103 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1105, end: 1109 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1111, end: 1114 },
								},
								loc: { start: 1111, end: 1114 },
							},
							directives: [],
							loc: { start: 1105, end: 1114 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1116, end: 1122 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1124, end: 1130 },
								},
								loc: { start: 1124, end: 1130 },
							},
							directives: [],
							loc: { start: 1116, end: 1130 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1134, end: 1139 },
							},
							loc: { start: 1134, end: 1139 },
						},
						loc: { start: 1133, end: 1140 },
					},
					directives: [],
					loc: { start: 1086, end: 1140 },
				},
			],
			loc: { start: 1024, end: 1142 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItemInput",
				loc: { start: 1150, end: 1164 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1169, end: 1177 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1179, end: 1182 },
							},
							loc: { start: 1179, end: 1182 },
						},
						loc: { start: 1179, end: 1183 },
					},
					directives: [],
					loc: { start: 1169, end: 1183 },
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1186, end: 1188 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1190, end: 1192 },
							},
							loc: { start: 1190, end: 1192 },
						},
						loc: { start: 1190, end: 1193 },
					},
					directives: [],
					loc: { start: 1186, end: 1193 },
				},
			],
			loc: { start: 1144, end: 1195 },
		},
		{
			kind: "ObjectTypeExtension",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1209, end: 1217 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 1222, end: 1233 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItem",
								loc: { start: 1234, end: 1243 },
							},
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
												value: "OrderItemInput",
												loc: { start: 1246, end: 1260 },
											},
											loc: { start: 1246, end: 1260 },
										},
										loc: { start: 1246, end: 1261 },
									},
									loc: { start: 1245, end: 1262 },
								},
								loc: { start: 1245, end: 1263 },
							},
							directives: [],
							loc: { start: 1234, end: 1263 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1266, end: 1271 },
							},
							loc: { start: 1266, end: 1271 },
						},
						loc: { start: 1266, end: 1272 },
					},
					directives: [],
					loc: { start: 1222, end: 1272 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrder",
						loc: { start: 1275, end: 1286 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1287, end: 1289 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1291, end: 1293 },
									},
									loc: { start: 1291, end: 1293 },
								},
								loc: { start: 1291, end: 1294 },
							},
							directives: [],
							loc: { start: 1287, end: 1294 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 1296, end: 1302 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1304, end: 1310 },
								},
								loc: { start: 1304, end: 1310 },
							},
							directives: [],
							loc: { start: 1296, end: 1310 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "total",
								loc: { start: 1312, end: 1317 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1319, end: 1322 },
								},
								loc: { start: 1319, end: 1322 },
							},
							directives: [],
							loc: { start: 1312, end: 1322 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "orderItems",
								loc: { start: 1324, end: 1334 },
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
											loc: { start: 1337, end: 1351 },
										},
										loc: { start: 1337, end: 1351 },
									},
									loc: { start: 1337, end: 1352 },
								},
								loc: { start: 1336, end: 1353 },
							},
							directives: [],
							loc: { start: 1324, end: 1353 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1356, end: 1361 },
							},
							loc: { start: 1356, end: 1361 },
						},
						loc: { start: 1356, end: 1362 },
					},
					directives: [],
					loc: { start: 1275, end: 1362 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 1365, end: 1376 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1377, end: 1379 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1381, end: 1383 },
									},
									loc: { start: 1381, end: 1383 },
								},
								loc: { start: 1381, end: 1384 },
							},
							directives: [],
							loc: { start: 1377, end: 1384 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 1387, end: 1392 },
							},
							loc: { start: 1387, end: 1392 },
						},
						loc: { start: 1387, end: 1393 },
					},
					directives: [],
					loc: { start: 1365, end: 1393 },
				},
			],
			loc: { start: 1197, end: 1395 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1402, end: 1407 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1412, end: 1414 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1416, end: 1418 },
							},
							loc: { start: 1416, end: 1418 },
						},
						loc: { start: 1416, end: 1419 },
					},
					directives: [],
					loc: { start: 1412, end: 1419 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1422, end: 1427 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1429, end: 1432 },
							},
							loc: { start: 1429, end: 1432 },
						},
						loc: { start: 1429, end: 1433 },
					},
					directives: [],
					loc: { start: 1422, end: 1433 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1436, end: 1442 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1444, end: 1450 },
							},
							loc: { start: 1444, end: 1450 },
						},
						loc: { start: 1444, end: 1451 },
					},
					directives: [],
					loc: { start: 1436, end: 1451 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1454, end: 1464 },
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
										loc: { start: 1467, end: 1476 },
									},
									loc: { start: 1467, end: 1476 },
								},
								loc: { start: 1467, end: 1477 },
							},
							loc: { start: 1466, end: 1478 },
						},
						loc: { start: 1466, end: 1479 },
					},
					directives: [],
					loc: { start: 1454, end: 1479 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1482, end: 1491 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1493, end: 1501 },
							},
							loc: { start: 1493, end: 1501 },
						},
						loc: { start: 1493, end: 1502 },
					},
					directives: [],
					loc: { start: 1482, end: 1502 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1505, end: 1514 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1516, end: 1524 },
							},
							loc: { start: 1516, end: 1524 },
						},
						loc: { start: 1516, end: 1525 },
					},
					directives: [],
					loc: { start: 1505, end: 1525 },
				},
			],
			loc: { start: 1397, end: 1527 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductColor",
				loc: { start: 1533, end: 1545 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1550, end: 1552 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1554, end: 1556 },
							},
							loc: { start: 1554, end: 1556 },
						},
						loc: { start: 1554, end: 1557 },
					},
					directives: [],
					loc: { start: 1550, end: 1557 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1560, end: 1564 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1566, end: 1572 },
							},
							loc: { start: 1566, end: 1572 },
						},
						loc: { start: 1566, end: 1573 },
					},
					directives: [],
					loc: { start: 1560, end: 1573 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1576, end: 1581 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1583, end: 1589 },
							},
							loc: { start: 1583, end: 1589 },
						},
						loc: { start: 1583, end: 1590 },
					},
					directives: [],
					loc: { start: 1576, end: 1590 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1593, end: 1601 },
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
										loc: { start: 1604, end: 1611 },
									},
									loc: { start: 1604, end: 1611 },
								},
								loc: { start: 1604, end: 1612 },
							},
							loc: { start: 1603, end: 1613 },
						},
						loc: { start: 1603, end: 1614 },
					},
					directives: [],
					loc: { start: 1593, end: 1614 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1617, end: 1626 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1628, end: 1636 },
							},
							loc: { start: 1628, end: 1636 },
						},
						loc: { start: 1628, end: 1637 },
					},
					directives: [],
					loc: { start: 1617, end: 1637 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1640, end: 1649 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1651, end: 1659 },
							},
							loc: { start: 1651, end: 1659 },
						},
						loc: { start: 1651, end: 1660 },
					},
					directives: [],
					loc: { start: 1640, end: 1660 },
				},
			],
			loc: { start: 1528, end: 1662 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductSize",
				loc: { start: 1668, end: 1679 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1684, end: 1686 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1688, end: 1690 },
							},
							loc: { start: 1688, end: 1690 },
						},
						loc: { start: 1688, end: 1691 },
					},
					directives: [],
					loc: { start: 1684, end: 1691 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1694, end: 1698 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1700, end: 1706 },
							},
							loc: { start: 1700, end: 1706 },
						},
						loc: { start: 1700, end: 1707 },
					},
					directives: [],
					loc: { start: 1694, end: 1707 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1710, end: 1715 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1717, end: 1720 },
							},
							loc: { start: 1717, end: 1720 },
						},
						loc: { start: 1717, end: 1721 },
					},
					directives: [],
					loc: { start: 1710, end: 1721 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1724, end: 1732 },
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
										loc: { start: 1735, end: 1742 },
									},
									loc: { start: 1735, end: 1742 },
								},
								loc: { start: 1735, end: 1743 },
							},
							loc: { start: 1734, end: 1744 },
						},
						loc: { start: 1734, end: 1745 },
					},
					directives: [],
					loc: { start: 1724, end: 1745 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1748, end: 1757 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1759, end: 1767 },
							},
							loc: { start: 1759, end: 1767 },
						},
						loc: { start: 1759, end: 1768 },
					},
					directives: [],
					loc: { start: 1748, end: 1768 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1771, end: 1780 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1782, end: 1790 },
							},
							loc: { start: 1782, end: 1790 },
						},
						loc: { start: 1782, end: 1791 },
					},
					directives: [],
					loc: { start: 1771, end: 1791 },
				},
			],
			loc: { start: 1663, end: 1793 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductsInputFilter",
				loc: { start: 1800, end: 1819 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1824, end: 1826 } },
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ID",
							loc: { start: 1828, end: 1830 },
						},
						loc: { start: 1828, end: 1830 },
					},
					directives: [],
					loc: { start: 1824, end: 1830 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1833, end: 1837 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1839, end: 1845 },
						},
						loc: { start: 1839, end: 1845 },
					},
					directives: [],
					loc: { start: 1833, end: 1845 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1848, end: 1859 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1861, end: 1867 },
						},
						loc: { start: 1861, end: 1867 },
					},
					directives: [],
					loc: { start: 1848, end: 1867 },
				},
			],
			loc: { start: 1794, end: 1869 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1883, end: 1888 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1893, end: 1900 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1901, end: 1903 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1905, end: 1907 },
									},
									loc: { start: 1905, end: 1907 },
								},
								loc: { start: 1905, end: 1908 },
							},
							directives: [],
							loc: { start: 1901, end: 1908 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1911, end: 1918 },
						},
						loc: { start: 1911, end: 1918 },
					},
					directives: [],
					loc: { start: 1893, end: 1918 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1921, end: 1929 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 1930, end: 1935 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1937, end: 1943 },
								},
								loc: { start: 1937, end: 1943 },
							},
							directives: [],
							loc: { start: 1930, end: 1943 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1945, end: 1950 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1952, end: 1955 },
								},
								loc: { start: 1952, end: 1955 },
							},
							directives: [],
							loc: { start: 1945, end: 1955 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1957, end: 1961 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1963, end: 1966 },
								},
								loc: { start: 1963, end: 1966 },
							},
							directives: [],
							loc: { start: 1957, end: 1966 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1968, end: 1976 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1978, end: 1984 },
								},
								loc: { start: 1978, end: 1984 },
							},
							directives: [],
							loc: { start: 1968, end: 1984 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "collection",
								loc: { start: 1986, end: 1996 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1998, end: 2004 },
								},
								loc: { start: 1998, end: 2004 },
							},
							directives: [],
							loc: { start: 1986, end: 2004 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 2006, end: 2010 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2012, end: 2018 },
								},
								loc: { start: 2012, end: 2018 },
							},
							directives: [],
							loc: { start: 2006, end: 2018 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "description",
								loc: { start: 2020, end: 2031 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 2033, end: 2039 },
								},
								loc: { start: 2033, end: 2039 },
							},
							directives: [],
							loc: { start: 2020, end: 2039 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2043, end: 2050 },
							},
							loc: { start: 2043, end: 2050 },
						},
						loc: { start: 2042, end: 2051 },
					},
					directives: [],
					loc: { start: 1921, end: 2051 },
				},
			],
			loc: { start: 1871, end: 2053 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 2060, end: 2067 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2072, end: 2074 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2076, end: 2078 },
							},
							loc: { start: 2076, end: 2078 },
						},
						loc: { start: 2076, end: 2079 },
					},
					directives: [],
					loc: { start: 2072, end: 2079 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2082, end: 2086 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2088, end: 2094 },
							},
							loc: { start: 2088, end: 2094 },
						},
						loc: { start: 2088, end: 2095 },
					},
					directives: [],
					loc: { start: 2082, end: 2095 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 2098, end: 2102 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2104, end: 2110 },
							},
							loc: { start: 2104, end: 2110 },
						},
						loc: { start: 2104, end: 2111 },
					},
					directives: [],
					loc: { start: 2098, end: 2111 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2114, end: 2125 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2127, end: 2133 },
							},
							loc: { start: 2127, end: 2133 },
						},
						loc: { start: 2127, end: 2134 },
					},
					directives: [],
					loc: { start: 2114, end: 2134 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "sizes",
						loc: { start: 2137, end: 2142 },
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
										loc: { start: 2145, end: 2156 },
									},
									loc: { start: 2145, end: 2156 },
								},
								loc: { start: 2145, end: 2157 },
							},
							loc: { start: 2144, end: 2158 },
						},
						loc: { start: 2144, end: 2159 },
					},
					directives: [],
					loc: { start: 2137, end: 2159 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "colors",
						loc: { start: 2162, end: 2168 },
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
										loc: { start: 2171, end: 2183 },
									},
									loc: { start: 2171, end: 2183 },
								},
								loc: { start: 2171, end: 2184 },
							},
							loc: { start: 2170, end: 2185 },
						},
						loc: { start: 2170, end: 2186 },
					},
					directives: [],
					loc: { start: 2162, end: 2186 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 2189, end: 2194 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2196, end: 2199 },
							},
							loc: { start: 2196, end: 2199 },
						},
						loc: { start: 2196, end: 2200 },
					},
					directives: [],
					loc: { start: 2189, end: 2200 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 2203, end: 2209 },
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
										loc: { start: 2212, end: 2217 },
									},
									loc: { start: 2212, end: 2217 },
								},
								loc: { start: 2212, end: 2218 },
							},
							loc: { start: 2211, end: 2219 },
						},
						loc: { start: 2211, end: 2220 },
					},
					directives: [],
					loc: { start: 2203, end: 2220 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2223, end: 2232 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2234, end: 2242 },
							},
							loc: { start: 2234, end: 2242 },
						},
						loc: { start: 2234, end: 2243 },
					},
					directives: [],
					loc: { start: 2223, end: 2243 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2246, end: 2255 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2257, end: 2265 },
							},
							loc: { start: 2257, end: 2265 },
						},
						loc: { start: 2257, end: 2266 },
					},
					directives: [],
					loc: { start: 2246, end: 2266 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 2269, end: 2276 },
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
										loc: { start: 2279, end: 2285 },
									},
									loc: { start: 2279, end: 2285 },
								},
								loc: { start: 2279, end: 2286 },
							},
							loc: { start: 2278, end: 2287 },
						},
						loc: { start: 2278, end: 2288 },
					},
					directives: [],
					loc: { start: 2269, end: 2288 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 2291, end: 2301 },
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
										loc: { start: 2304, end: 2313 },
									},
									loc: { start: 2304, end: 2313 },
								},
								loc: { start: 2304, end: 2314 },
							},
							loc: { start: 2303, end: 2315 },
						},
						loc: { start: 2303, end: 2316 },
					},
					directives: [],
					loc: { start: 2291, end: 2316 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 2319, end: 2329 },
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
										loc: { start: 2332, end: 2340 },
									},
									loc: { start: 2332, end: 2340 },
								},
								loc: { start: 2332, end: 2341 },
							},
							loc: { start: 2331, end: 2342 },
						},
						loc: { start: 2331, end: 2343 },
					},
					directives: [],
					loc: { start: 2319, end: 2343 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 2346, end: 2357 },
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
										loc: { start: 2360, end: 2370 },
									},
									loc: { start: 2360, end: 2370 },
								},
								loc: { start: 2360, end: 2371 },
							},
							loc: { start: 2359, end: 2372 },
						},
						loc: { start: 2359, end: 2373 },
					},
					directives: [],
					loc: { start: 2346, end: 2373 },
				},
			],
			loc: { start: 2055, end: 2375 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2381, end: 2387 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2392, end: 2394 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2396, end: 2398 },
							},
							loc: { start: 2396, end: 2398 },
						},
						loc: { start: 2396, end: 2399 },
					},
					directives: [],
					loc: { start: 2392, end: 2399 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 2402, end: 2407 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2409, end: 2415 },
							},
							loc: { start: 2409, end: 2415 },
						},
						loc: { start: 2409, end: 2416 },
					},
					directives: [],
					loc: { start: 2402, end: 2416 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2419, end: 2430 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2432, end: 2438 },
							},
							loc: { start: 2432, end: 2438 },
						},
						loc: { start: 2432, end: 2439 },
					},
					directives: [],
					loc: { start: 2419, end: 2439 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2442, end: 2448 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2450, end: 2453 },
							},
							loc: { start: 2450, end: 2453 },
						},
						loc: { start: 2450, end: 2454 },
					},
					directives: [],
					loc: { start: 2442, end: 2454 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2457, end: 2466 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2468, end: 2476 },
							},
							loc: { start: 2468, end: 2476 },
						},
						loc: { start: 2468, end: 2477 },
					},
					directives: [],
					loc: { start: 2457, end: 2477 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2480, end: 2489 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 2491, end: 2499 },
							},
							loc: { start: 2491, end: 2499 },
						},
						loc: { start: 2491, end: 2500 },
					},
					directives: [],
					loc: { start: 2480, end: 2500 },
				},
			],
			loc: { start: 2376, end: 2502 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 2508, end: 2513 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2503, end: 2513 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 2520, end: 2528 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2515, end: 2528 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 2537, end: 2545 },
			},
			directives: [],
			loc: { start: 2530, end: 2545 },
		},
	],
	loc: { start: 0, end: 2546 },
} as unknown as DocumentNode;
