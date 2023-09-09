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
						value: "products",
						loc: { start: 22, end: 30 },
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
										loc: { start: 33, end: 40 },
									},
									loc: { start: 33, end: 40 },
								},
								loc: { start: 33, end: 41 },
							},
							loc: { start: 32, end: 42 },
						},
						loc: { start: 32, end: 43 },
					},
					directives: [],
					loc: { start: 22, end: 43 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 46, end: 53 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 54, end: 56 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 58, end: 60 },
									},
									loc: { start: 58, end: 60 },
								},
								loc: { start: 58, end: 61 },
							},
							directives: [],
							loc: { start: 54, end: 61 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 64, end: 71 },
						},
						loc: { start: 64, end: 71 },
					},
					directives: [],
					loc: { start: 46, end: 71 },
				},
			],
			loc: { start: 0, end: 73 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 80, end: 87 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 92, end: 94 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 96, end: 98 } },
							loc: { start: 96, end: 98 },
						},
						loc: { start: 96, end: 99 },
					},
					directives: [],
					loc: { start: 92, end: 99 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 102, end: 106 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 108, end: 114 },
							},
							loc: { start: 108, end: 114 },
						},
						loc: { start: 108, end: 115 },
					},
					directives: [],
					loc: { start: 102, end: 115 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 118, end: 129 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 131, end: 137 },
							},
							loc: { start: 131, end: 137 },
						},
						loc: { start: 131, end: 138 },
					},
					directives: [],
					loc: { start: 118, end: 138 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 141, end: 146 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 148, end: 151 },
							},
							loc: { start: 148, end: 151 },
						},
						loc: { start: 148, end: 152 },
					},
					directives: [],
					loc: { start: 141, end: 152 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 155, end: 159 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 161, end: 167 },
							},
							loc: { start: 161, end: 167 },
						},
						loc: { start: 161, end: 168 },
					},
					directives: [],
					loc: { start: 155, end: 168 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 171, end: 178 },
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
										loc: { start: 181, end: 187 },
									},
									loc: { start: 181, end: 187 },
								},
								loc: { start: 181, end: 188 },
							},
							loc: { start: 180, end: 189 },
						},
						loc: { start: 180, end: 190 },
					},
					directives: [],
					loc: { start: 171, end: 190 },
				},
			],
			loc: { start: 75, end: 192 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 198, end: 204 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 209, end: 211 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 213, end: 215 },
							},
							loc: { start: 213, end: 215 },
						},
						loc: { start: 213, end: 216 },
					},
					directives: [],
					loc: { start: 209, end: 216 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 219, end: 224 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 226, end: 232 },
							},
							loc: { start: 226, end: 232 },
						},
						loc: { start: 226, end: 233 },
					},
					directives: [],
					loc: { start: 219, end: 233 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 236, end: 247 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 249, end: 255 },
							},
							loc: { start: 249, end: 255 },
						},
						loc: { start: 249, end: 256 },
					},
					directives: [],
					loc: { start: 236, end: 256 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 259, end: 265 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 267, end: 270 },
							},
							loc: { start: 267, end: 270 },
						},
						loc: { start: 267, end: 271 },
					},
					directives: [],
					loc: { start: 259, end: 271 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 274, end: 283 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 285, end: 293 },
							},
							loc: { start: 285, end: 293 },
						},
						loc: { start: 285, end: 294 },
					},
					directives: [],
					loc: { start: 274, end: 294 },
				},
			],
			loc: { start: 193, end: 296 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 302, end: 307 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 297, end: 307 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 316, end: 324 } },
			directives: [],
			loc: { start: 309, end: 324 },
		},
	],
	loc: { start: 0, end: 325 },
} as unknown as DocumentNode;
