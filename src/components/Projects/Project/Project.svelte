<script lang="ts">
	interface Props {
		title: string;
		description: string;
		url: string;
		technologies: string[];
	}
	let { title, description, url, technologies }: Props = $props();
</script>

<article class="m-4 bg-slate-500 p-4 text-white">
	<h3>{title}</h3>
	<p>{description}</p>
	<a href={url}>Check it out</a>
	<ul>
		{#each technologies as technology}
			<li>{technology}</li>
		{/each}
	</ul>
</article>
