import { GraphQLClient, gql } from 'graphql-request';

export const load = async () => {
	const endpoint = import.meta.env.VITE_HYGRAPH_URL;
	const hygraph = new GraphQLClient(endpoint, {
		headers: {}
	});

	const query = gql`
		query AllPosts {
			posts(first: 1000) {
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
