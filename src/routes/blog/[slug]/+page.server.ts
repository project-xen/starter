import { GraphQLClient, gql } from 'graphql-request';

export const load = async (context) => {
	const endpoint = import.meta.env.VITE_HYGRAPH_URL;

	const hygraph = new GraphQLClient(endpoint, {
		headers: {}
	});

	const query = gql`
		query PostQuery($slug: String!) {
			post(where: { slug: $slug }) {
				title
				tags
				slug
				updatedAt
				id
				excerpt
				content {
					html
				}
			}
		}
	`;

	const variables = {
		slug: context.params.slug
	};

	const post = await hygraph.request(query, variables);

	return {
		props: {
			post
		}
	};
};
