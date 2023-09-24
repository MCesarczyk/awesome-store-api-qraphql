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
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 696, end: 705 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 710, end: 712 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 714, end: 716 },
							},
							loc: { start: 714, end: 716 },
						},
						loc: { start: 714, end: 717 },
					},
					directives: [],
					loc: { start: 710, end: 717 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 720, end: 728 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 730, end: 733 },
							},
							loc: { start: 730, end: 733 },
						},
						loc: { start: 730, end: 734 },
					},
					directives: [],
					loc: { start: 720, end: 734 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 737, end: 746 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 748, end: 756 },
							},
							loc: { start: 748, end: 756 },
						},
						loc: { start: 748, end: 757 },
					},
					directives: [],
					loc: { start: 737, end: 757 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 760, end: 769 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 771, end: 779 },
							},
							loc: { start: 771, end: 779 },
						},
						loc: { start: 771, end: 780 },
					},
					directives: [],
					loc: { start: 760, end: 780 },
				},
			],
			loc: { start: 691, end: 782 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 795, end: 800 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 805, end: 810 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 811, end: 813 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 815, end: 817 },
									},
									loc: { start: 815, end: 817 },
								},
								loc: { start: 815, end: 818 },
							},
							directives: [],
							loc: { start: 811, end: 818 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 820, end: 826 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 828, end: 834 },
								},
								loc: { start: 828, end: 834 },
							},
							directives: [],
							loc: { start: 820, end: 834 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 837, end: 842 },
						},
						loc: { start: 837, end: 842 },
					},
					directives: [],
					loc: { start: 805, end: 842 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 845, end: 851 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 852, end: 857 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 859, end: 862 },
								},
								loc: { start: 859, end: 862 },
							},
							directives: [],
							loc: { start: 852, end: 862 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 864, end: 868 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 870, end: 873 },
								},
								loc: { start: 870, end: 873 },
							},
							directives: [],
							loc: { start: 864, end: 873 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 875, end: 881 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 883, end: 889 },
								},
								loc: { start: 883, end: 889 },
							},
							directives: [],
							loc: { start: 875, end: 889 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 893, end: 898 },
							},
							loc: { start: 893, end: 898 },
						},
						loc: { start: 892, end: 899 },
					},
					directives: [],
					loc: { start: 845, end: 899 },
				},
			],
			loc: { start: 783, end: 901 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 908, end: 913 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 918, end: 920 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 922, end: 924 },
							},
							loc: { start: 922, end: 924 },
						},
						loc: { start: 922, end: 925 },
					},
					directives: [],
					loc: { start: 918, end: 925 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 928, end: 933 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 935, end: 938 },
							},
							loc: { start: 935, end: 938 },
						},
						loc: { start: 935, end: 939 },
					},
					directives: [],
					loc: { start: 928, end: 939 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 942, end: 948 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 950, end: 956 },
							},
							loc: { start: 950, end: 956 },
						},
						loc: { start: 950, end: 957 },
					},
					directives: [],
					loc: { start: 942, end: 957 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 960, end: 970 },
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
										loc: { start: 973, end: 982 },
									},
									loc: { start: 973, end: 982 },
								},
								loc: { start: 973, end: 983 },
							},
							loc: { start: 972, end: 984 },
						},
						loc: { start: 972, end: 985 },
					},
					directives: [],
					loc: { start: 960, end: 985 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 988, end: 997 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 999, end: 1007 },
							},
							loc: { start: 999, end: 1007 },
						},
						loc: { start: 999, end: 1008 },
					},
					directives: [],
					loc: { start: 988, end: 1008 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1011, end: 1020 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1022, end: 1030 },
							},
							loc: { start: 1022, end: 1030 },
						},
						loc: { start: 1022, end: 1031 },
					},
					directives: [],
					loc: { start: 1011, end: 1031 },
				},
			],
			loc: { start: 903, end: 1033 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductColor",
				loc: { start: 1039, end: 1051 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1056, end: 1058 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1060, end: 1062 },
							},
							loc: { start: 1060, end: 1062 },
						},
						loc: { start: 1060, end: 1063 },
					},
					directives: [],
					loc: { start: 1056, end: 1063 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1066, end: 1070 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1072, end: 1078 },
							},
							loc: { start: 1072, end: 1078 },
						},
						loc: { start: 1072, end: 1079 },
					},
					directives: [],
					loc: { start: 1066, end: 1079 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1082, end: 1087 },
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
					loc: { start: 1082, end: 1096 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1099, end: 1107 },
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
										loc: { start: 1110, end: 1117 },
									},
									loc: { start: 1110, end: 1117 },
								},
								loc: { start: 1110, end: 1118 },
							},
							loc: { start: 1109, end: 1119 },
						},
						loc: { start: 1109, end: 1120 },
					},
					directives: [],
					loc: { start: 1099, end: 1120 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1123, end: 1132 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1134, end: 1142 },
							},
							loc: { start: 1134, end: 1142 },
						},
						loc: { start: 1134, end: 1143 },
					},
					directives: [],
					loc: { start: 1123, end: 1143 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1146, end: 1155 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1157, end: 1165 },
							},
							loc: { start: 1157, end: 1165 },
						},
						loc: { start: 1157, end: 1166 },
					},
					directives: [],
					loc: { start: 1146, end: 1166 },
				},
			],
			loc: { start: 1034, end: 1168 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductSize",
				loc: { start: 1174, end: 1185 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1190, end: 1192 } },
					arguments: [],
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
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1200, end: 1204 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1206, end: 1212 },
							},
							loc: { start: 1206, end: 1212 },
						},
						loc: { start: 1206, end: 1213 },
					},
					directives: [],
					loc: { start: 1200, end: 1213 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "value",
						loc: { start: 1216, end: 1221 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1223, end: 1226 },
							},
							loc: { start: 1223, end: 1226 },
						},
						loc: { start: 1223, end: 1227 },
					},
					directives: [],
					loc: { start: 1216, end: 1227 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1230, end: 1238 },
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
										loc: { start: 1241, end: 1248 },
									},
									loc: { start: 1241, end: 1248 },
								},
								loc: { start: 1241, end: 1249 },
							},
							loc: { start: 1240, end: 1250 },
						},
						loc: { start: 1240, end: 1251 },
					},
					directives: [],
					loc: { start: 1230, end: 1251 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1254, end: 1263 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1265, end: 1273 },
							},
							loc: { start: 1265, end: 1273 },
						},
						loc: { start: 1265, end: 1274 },
					},
					directives: [],
					loc: { start: 1254, end: 1274 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1277, end: 1286 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1288, end: 1296 },
							},
							loc: { start: 1288, end: 1296 },
						},
						loc: { start: 1288, end: 1297 },
					},
					directives: [],
					loc: { start: 1277, end: 1297 },
				},
			],
			loc: { start: 1169, end: 1299 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductsInputFilter",
				loc: { start: 1306, end: 1325 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1330, end: 1332 } },
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ID",
							loc: { start: 1334, end: 1336 },
						},
						loc: { start: 1334, end: 1336 },
					},
					directives: [],
					loc: { start: 1330, end: 1336 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1339, end: 1343 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1345, end: 1351 },
						},
						loc: { start: 1345, end: 1351 },
					},
					directives: [],
					loc: { start: 1339, end: 1351 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1354, end: 1365 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1367, end: 1373 },
						},
						loc: { start: 1367, end: 1373 },
					},
					directives: [],
					loc: { start: 1354, end: 1373 },
				},
			],
			loc: { start: 1300, end: 1375 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1389, end: 1394 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1399, end: 1406 },
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
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1417, end: 1424 },
						},
						loc: { start: 1417, end: 1424 },
					},
					directives: [],
					loc: { start: 1399, end: 1424 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1427, end: 1435 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 1436, end: 1441 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1443, end: 1449 },
								},
								loc: { start: 1443, end: 1449 },
							},
							directives: [],
							loc: { start: 1436, end: 1449 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1451, end: 1456 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1458, end: 1461 },
								},
								loc: { start: 1458, end: 1461 },
							},
							directives: [],
							loc: { start: 1451, end: 1461 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1463, end: 1467 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1469, end: 1472 },
								},
								loc: { start: 1469, end: 1472 },
							},
							directives: [],
							loc: { start: 1463, end: 1472 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1474, end: 1482 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1484, end: 1490 },
								},
								loc: { start: 1484, end: 1490 },
							},
							directives: [],
							loc: { start: 1474, end: 1490 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "collection",
								loc: { start: 1492, end: 1502 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1504, end: 1510 },
								},
								loc: { start: 1504, end: 1510 },
							},
							directives: [],
							loc: { start: 1492, end: 1510 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1512, end: 1516 },
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
							loc: { start: 1512, end: 1524 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "description",
								loc: { start: 1526, end: 1537 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1539, end: 1545 },
								},
								loc: { start: 1539, end: 1545 },
							},
							directives: [],
							loc: { start: 1526, end: 1545 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1549, end: 1556 },
							},
							loc: { start: 1549, end: 1556 },
						},
						loc: { start: 1548, end: 1557 },
					},
					directives: [],
					loc: { start: 1427, end: 1557 },
				},
			],
			loc: { start: 1377, end: 1559 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1566, end: 1573 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1578, end: 1580 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1582, end: 1584 },
							},
							loc: { start: 1582, end: 1584 },
						},
						loc: { start: 1582, end: 1585 },
					},
					directives: [],
					loc: { start: 1578, end: 1585 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1588, end: 1592 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1594, end: 1600 },
							},
							loc: { start: 1594, end: 1600 },
						},
						loc: { start: 1594, end: 1601 },
					},
					directives: [],
					loc: { start: 1588, end: 1601 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1604, end: 1608 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1610, end: 1616 },
							},
							loc: { start: 1610, end: 1616 },
						},
						loc: { start: 1610, end: 1617 },
					},
					directives: [],
					loc: { start: 1604, end: 1617 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1620, end: 1631 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1633, end: 1639 },
							},
							loc: { start: 1633, end: 1639 },
						},
						loc: { start: 1633, end: 1640 },
					},
					directives: [],
					loc: { start: 1620, end: 1640 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "sizes",
						loc: { start: 1643, end: 1648 },
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
										loc: { start: 1651, end: 1662 },
									},
									loc: { start: 1651, end: 1662 },
								},
								loc: { start: 1651, end: 1663 },
							},
							loc: { start: 1650, end: 1664 },
						},
						loc: { start: 1650, end: 1665 },
					},
					directives: [],
					loc: { start: 1643, end: 1665 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "colors",
						loc: { start: 1668, end: 1674 },
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
										loc: { start: 1677, end: 1689 },
									},
									loc: { start: 1677, end: 1689 },
								},
								loc: { start: 1677, end: 1690 },
							},
							loc: { start: 1676, end: 1691 },
						},
						loc: { start: 1676, end: 1692 },
					},
					directives: [],
					loc: { start: 1668, end: 1692 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1695, end: 1700 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1702, end: 1705 },
							},
							loc: { start: 1702, end: 1705 },
						},
						loc: { start: 1702, end: 1706 },
					},
					directives: [],
					loc: { start: 1695, end: 1706 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 1709, end: 1715 },
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
										loc: { start: 1718, end: 1723 },
									},
									loc: { start: 1718, end: 1723 },
								},
								loc: { start: 1718, end: 1724 },
							},
							loc: { start: 1717, end: 1725 },
						},
						loc: { start: 1717, end: 1726 },
					},
					directives: [],
					loc: { start: 1709, end: 1726 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1729, end: 1738 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1740, end: 1748 },
							},
							loc: { start: 1740, end: 1748 },
						},
						loc: { start: 1740, end: 1749 },
					},
					directives: [],
					loc: { start: 1729, end: 1749 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1752, end: 1761 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1763, end: 1771 },
							},
							loc: { start: 1763, end: 1771 },
						},
						loc: { start: 1763, end: 1772 },
					},
					directives: [],
					loc: { start: 1752, end: 1772 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 1775, end: 1782 },
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
										loc: { start: 1785, end: 1791 },
									},
									loc: { start: 1785, end: 1791 },
								},
								loc: { start: 1785, end: 1792 },
							},
							loc: { start: 1784, end: 1793 },
						},
						loc: { start: 1784, end: 1794 },
					},
					directives: [],
					loc: { start: 1775, end: 1794 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1797, end: 1807 },
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
										loc: { start: 1810, end: 1819 },
									},
									loc: { start: 1810, end: 1819 },
								},
								loc: { start: 1810, end: 1820 },
							},
							loc: { start: 1809, end: 1821 },
						},
						loc: { start: 1809, end: 1822 },
					},
					directives: [],
					loc: { start: 1797, end: 1822 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1825, end: 1835 },
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
										loc: { start: 1838, end: 1846 },
									},
									loc: { start: 1838, end: 1846 },
								},
								loc: { start: 1838, end: 1847 },
							},
							loc: { start: 1837, end: 1848 },
						},
						loc: { start: 1837, end: 1849 },
					},
					directives: [],
					loc: { start: 1825, end: 1849 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 1852, end: 1863 },
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
										loc: { start: 1866, end: 1876 },
									},
									loc: { start: 1866, end: 1876 },
								},
								loc: { start: 1866, end: 1877 },
							},
							loc: { start: 1865, end: 1878 },
						},
						loc: { start: 1865, end: 1879 },
					},
					directives: [],
					loc: { start: 1852, end: 1879 },
				},
			],
			loc: { start: 1561, end: 1881 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1887, end: 1893 } },
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
						value: "title",
						loc: { start: 1908, end: 1913 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1915, end: 1921 },
							},
							loc: { start: 1915, end: 1921 },
						},
						loc: { start: 1915, end: 1922 },
					},
					directives: [],
					loc: { start: 1908, end: 1922 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1925, end: 1936 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1938, end: 1944 },
							},
							loc: { start: 1938, end: 1944 },
						},
						loc: { start: 1938, end: 1945 },
					},
					directives: [],
					loc: { start: 1925, end: 1945 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 1948, end: 1954 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1956, end: 1959 },
							},
							loc: { start: 1956, end: 1959 },
						},
						loc: { start: 1956, end: 1960 },
					},
					directives: [],
					loc: { start: 1948, end: 1960 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1963, end: 1972 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1974, end: 1982 },
							},
							loc: { start: 1974, end: 1982 },
						},
						loc: { start: 1974, end: 1983 },
					},
					directives: [],
					loc: { start: 1963, end: 1983 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1986, end: 1995 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1997, end: 2005 },
							},
							loc: { start: 1997, end: 2005 },
						},
						loc: { start: 1997, end: 2006 },
					},
					directives: [],
					loc: { start: 1986, end: 2006 },
				},
			],
			loc: { start: 1882, end: 2008 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 2014, end: 2019 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 2009, end: 2019 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 2028, end: 2036 },
			},
			directives: [],
			loc: { start: 2021, end: 2036 },
		},
	],
	loc: { start: 0, end: 2037 },
} as unknown as DocumentNode;
