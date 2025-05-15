export default {
	introspection: {
		type: "url",
		url: "http://localhost:3000/api/graphql",
	},
	website: {
		template: "carbon-multi-page",
		options: {
			queryGenerationFactories: {
				EmailAddress: "foo@foo.com",
				JSONObject: "{ foo: 'bar' }",
			},
		},
	},
};
