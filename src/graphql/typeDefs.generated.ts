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
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 821, end: 826 },
						},
						loc: { start: 821, end: 826 },
					},
					directives: [],
					loc: { start: 805, end: 826 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 829, end: 835 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 836, end: 841 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 843, end: 846 },
								},
								loc: { start: 843, end: 846 },
							},
							directives: [],
							loc: { start: 836, end: 846 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 848, end: 852 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 854, end: 857 },
								},
								loc: { start: 854, end: 857 },
							},
							directives: [],
							loc: { start: 848, end: 857 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 861, end: 866 },
							},
							loc: { start: 861, end: 866 },
						},
						loc: { start: 860, end: 867 },
					},
					directives: [],
					loc: { start: 829, end: 867 },
				},
			],
			loc: { start: 783, end: 869 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 876, end: 881 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 886, end: 888 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 890, end: 892 },
							},
							loc: { start: 890, end: 892 },
						},
						loc: { start: 890, end: 893 },
					},
					directives: [],
					loc: { start: 886, end: 893 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "total", loc: { start: 896, end: 901 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 903, end: 906 },
							},
							loc: { start: 903, end: 906 },
						},
						loc: { start: 903, end: 907 },
					},
					directives: [],
					loc: { start: 896, end: 907 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 910, end: 916 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 918, end: 924 },
							},
							loc: { start: 918, end: 924 },
						},
						loc: { start: 918, end: 925 },
					},
					directives: [],
					loc: { start: 910, end: 925 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 928, end: 938 },
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
										loc: { start: 941, end: 950 },
									},
									loc: { start: 941, end: 950 },
								},
								loc: { start: 941, end: 951 },
							},
							loc: { start: 940, end: 952 },
						},
						loc: { start: 940, end: 953 },
					},
					directives: [],
					loc: { start: 928, end: 953 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 956, end: 965 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 967, end: 975 },
							},
							loc: { start: 967, end: 975 },
						},
						loc: { start: 967, end: 976 },
					},
					directives: [],
					loc: { start: 956, end: 976 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 979, end: 988 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 990, end: 998 },
							},
							loc: { start: 990, end: 998 },
						},
						loc: { start: 990, end: 999 },
					},
					directives: [],
					loc: { start: 979, end: 999 },
				},
			],
			loc: { start: 871, end: 1001 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1014, end: 1019 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1024, end: 1031 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1032, end: 1034 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1036, end: 1038 },
									},
									loc: { start: 1036, end: 1038 },
								},
								loc: { start: 1036, end: 1039 },
							},
							directives: [],
							loc: { start: 1032, end: 1039 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1042, end: 1049 },
						},
						loc: { start: 1042, end: 1049 },
					},
					directives: [],
					loc: { start: 1024, end: 1049 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1052, end: 1060 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "first",
								loc: { start: 1061, end: 1066 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1068, end: 1071 },
								},
								loc: { start: 1068, end: 1071 },
							},
							directives: [],
							loc: { start: 1061, end: 1071 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1073, end: 1077 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1079, end: 1082 },
								},
								loc: { start: 1079, end: 1082 },
							},
							directives: [],
							loc: { start: 1073, end: 1082 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "category",
								loc: { start: 1084, end: 1092 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1094, end: 1100 },
								},
								loc: { start: 1094, end: 1100 },
							},
							directives: [],
							loc: { start: 1084, end: 1100 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "collection",
								loc: { start: 1102, end: 1112 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1114, end: 1120 },
								},
								loc: { start: 1114, end: 1120 },
							},
							directives: [],
							loc: { start: 1102, end: 1120 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1124, end: 1131 },
							},
							loc: { start: 1124, end: 1131 },
						},
						loc: { start: 1123, end: 1132 },
					},
					directives: [],
					loc: { start: 1052, end: 1132 },
				},
			],
			loc: { start: 1002, end: 1134 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1141, end: 1148 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1153, end: 1155 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1157, end: 1159 },
							},
							loc: { start: 1157, end: 1159 },
						},
						loc: { start: 1157, end: 1160 },
					},
					directives: [],
					loc: { start: 1153, end: 1160 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1163, end: 1167 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1169, end: 1175 },
							},
							loc: { start: 1169, end: 1175 },
						},
						loc: { start: 1169, end: 1176 },
					},
					directives: [],
					loc: { start: 1163, end: 1176 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1179, end: 1183 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1185, end: 1191 },
							},
							loc: { start: 1185, end: 1191 },
						},
						loc: { start: 1185, end: 1192 },
					},
					directives: [],
					loc: { start: 1179, end: 1192 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1195, end: 1206 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1208, end: 1214 },
							},
							loc: { start: 1208, end: 1214 },
						},
						loc: { start: 1208, end: 1215 },
					},
					directives: [],
					loc: { start: 1195, end: 1215 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1218, end: 1223 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1225, end: 1228 },
							},
							loc: { start: 1225, end: 1228 },
						},
						loc: { start: 1225, end: 1229 },
					},
					directives: [],
					loc: { start: 1218, end: 1229 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 1232, end: 1238 },
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
										loc: { start: 1241, end: 1246 },
									},
									loc: { start: 1241, end: 1246 },
								},
								loc: { start: 1241, end: 1247 },
							},
							loc: { start: 1240, end: 1248 },
						},
						loc: { start: 1240, end: 1249 },
					},
					directives: [],
					loc: { start: 1232, end: 1249 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1252, end: 1261 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1263, end: 1271 },
							},
							loc: { start: 1263, end: 1271 },
						},
						loc: { start: 1263, end: 1272 },
					},
					directives: [],
					loc: { start: 1252, end: 1272 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1275, end: 1284 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1286, end: 1294 },
							},
							loc: { start: 1286, end: 1294 },
						},
						loc: { start: 1286, end: 1295 },
					},
					directives: [],
					loc: { start: 1275, end: 1295 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 1298, end: 1305 },
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
										loc: { start: 1308, end: 1314 },
									},
									loc: { start: 1308, end: 1314 },
								},
								loc: { start: 1308, end: 1315 },
							},
							loc: { start: 1307, end: 1316 },
						},
						loc: { start: 1307, end: 1317 },
					},
					directives: [],
					loc: { start: 1298, end: 1317 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1320, end: 1330 },
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
										loc: { start: 1333, end: 1342 },
									},
									loc: { start: 1333, end: 1342 },
								},
								loc: { start: 1333, end: 1343 },
							},
							loc: { start: 1332, end: 1344 },
						},
						loc: { start: 1332, end: 1345 },
					},
					directives: [],
					loc: { start: 1320, end: 1345 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 1348, end: 1358 },
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
										loc: { start: 1361, end: 1369 },
									},
									loc: { start: 1361, end: 1369 },
								},
								loc: { start: 1361, end: 1370 },
							},
							loc: { start: 1360, end: 1371 },
						},
						loc: { start: 1360, end: 1372 },
					},
					directives: [],
					loc: { start: 1348, end: 1372 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 1375, end: 1386 },
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
										loc: { start: 1389, end: 1399 },
									},
									loc: { start: 1389, end: 1399 },
								},
								loc: { start: 1389, end: 1400 },
							},
							loc: { start: 1388, end: 1401 },
						},
						loc: { start: 1388, end: 1402 },
					},
					directives: [],
					loc: { start: 1375, end: 1402 },
				},
			],
			loc: { start: 1136, end: 1404 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 1410, end: 1416 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1421, end: 1423 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1425, end: 1427 },
							},
							loc: { start: 1425, end: 1427 },
						},
						loc: { start: 1425, end: 1428 },
					},
					directives: [],
					loc: { start: 1421, end: 1428 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1431, end: 1436 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1438, end: 1444 },
							},
							loc: { start: 1438, end: 1444 },
						},
						loc: { start: 1438, end: 1445 },
					},
					directives: [],
					loc: { start: 1431, end: 1445 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1448, end: 1459 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1461, end: 1467 },
							},
							loc: { start: 1461, end: 1467 },
						},
						loc: { start: 1461, end: 1468 },
					},
					directives: [],
					loc: { start: 1448, end: 1468 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 1471, end: 1477 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1479, end: 1482 },
							},
							loc: { start: 1479, end: 1482 },
						},
						loc: { start: 1479, end: 1483 },
					},
					directives: [],
					loc: { start: 1471, end: 1483 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 1486, end: 1495 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1497, end: 1505 },
							},
							loc: { start: 1497, end: 1505 },
						},
						loc: { start: 1497, end: 1506 },
					},
					directives: [],
					loc: { start: 1486, end: 1506 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 1509, end: 1518 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 1520, end: 1528 },
							},
							loc: { start: 1520, end: 1528 },
						},
						loc: { start: 1520, end: 1529 },
					},
					directives: [],
					loc: { start: 1509, end: 1529 },
				},
			],
			loc: { start: 1405, end: 1531 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1537, end: 1542 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1532, end: 1542 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 1551, end: 1559 },
			},
			directives: [],
			loc: { start: 1544, end: 1559 },
		},
	],
	loc: { start: 0, end: 1560 },
} as unknown as DocumentNode;
