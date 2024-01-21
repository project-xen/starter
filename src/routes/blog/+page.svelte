<script>
	export let data;

	// @ts-ignore
	const posts = data.props.posts.posts;

	console.log(data);
</script>

<div>
	<h1 class="mb-6 text-3xl font-bold">BLOG</h1>

	<ul>
		{#each posts as post}
			<li class="border-b border-gray-500 py-4 text-2xl">
				<a href={`/blog/${post.slug}`}>
					<h2>{post.title}</h2>
				</a>
			</li>
		{/each}
	</ul>
</div>
