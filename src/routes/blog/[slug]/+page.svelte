<script>
	export let data;

	// @ts-ignore
	const post = data.props.post.post;

	console.log(data);
</script>

<div>
	<a href="/blog">
		<h1 class="mb-4 text-xl font-bold text-sky-500">Back to Blog</h1>
	</a>

	<div>
		<h2 class="mb-4 text-3xl font-medium underline">{post.title}</h2>
		<div>
			{@html post.content.html}
		</div>
	</div>
</div>
