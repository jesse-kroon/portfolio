<script lang="ts">
	import { base } from '$app/paths';
	import type { IProject } from '../interfaces';

	let { title, description, imageSrc, url, githubUrl, technologies }: IProject = $props();
</script>

<article class="my-4 flex flex-col gap-2 rounded bg-slate-500 px-8 py-4 text-white lg:max-w-lg">
	<h3 class="text-2xl">{title}</h3>
	<a href={url}>
		<img src={base + imageSrc} alt="" class="size-auto rounded" />
	</a>
	<ul class="flex gap-2">
		{#each technologies as technology}
			<li class="rounded bg-slate-600 px-2 py-1 text-xs">{technology}</li>
		{/each}
	</ul>
	<p>{description}</p>
	<a href={url} class="text-amber-400 hover:text-green-400">Visit page</a>
	<a href={githubUrl} target="_blank"
		><img src="{base}/images/github-mark.png" alt="" class="size-10 hover:invert" /></a
	>
</article>
