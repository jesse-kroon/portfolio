<script lang="ts">
	import Project from '../Project/Project.svelte';
	interface Props {
		title: string;
		projects: { title: string; url: string; description: string; technologies: string[] }[];
	}

	let {
		title = 'HI',
		projects = [
			{
				title: 'Some Title',
				url: 'https://www.whatever.com',
				description: 'I made this with my own hands and I love it',
				technologies: ['HTML', 'CSS']
			},
			{
				title: 'Some Title',
				url: 'https://www.whatever.com',
				description: 'I made this with my own hands and I love it',
				technologies: ['HTML', 'CSS']
			}
		]
	}: Props = $props();
</script>

<h2 class="text-bold text-2xl text-white">{title}</h2>
{#each projects as project}
	<Project {...project} />
{/each}
