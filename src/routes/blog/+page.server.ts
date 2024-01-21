import { GraphQLClient, gql } from 'graphql-request';

export const load = async () => {
	const endpoint = import.meta.env.VITE_HYGRAPH_API;
	const hygraph = new GraphQLClient(endpoint, {
		headers: {}
	});

	const query = gql`
		query GetAllPosts {
			posts(first: 10000) {
				title
				tags
				slug
				updatedAt
				id
				excerpt
			}
		}
	`;

	const posts = await hygraph.request(query);

	return {
		props: { posts }
	};
};
