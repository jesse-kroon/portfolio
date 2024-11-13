<script lang="ts">
	import type { IProject } from '../interfaces';
	import Project from '../Project/Project.svelte';
	interface Props {
		title: string;
		projects: IProject[];
	}

	let { title, projects }: Props = $props();
</script>

{#if projects.length > 0}
	<h2 class="text-bold text-2xl text-white">{title}</h2>
	<div class="gap-4 md:grid md:grid-cols-2">
		{#each projects as project}
			<Project {...project} />
		{/each}
	</div>
{/if}
