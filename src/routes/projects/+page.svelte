<script>
	import Section from '../../components/Projects/Section/Section.svelte';
	import { APIProjects, FMComponentProjects, WebAppProjects } from './projects';
</script>

<h1 class="mb-4 text-3xl text-white">My Projects</h1>
<p class="text-lg text-white">
	Below you can find both projects I have completed and ones I am working on. These projects will be
	divided in the following sections:
</p>
<ul class="my-4 ml-6 list-disc text-white">
	<li>Web Applications</li>
	<li>Frontend Mentor components</li>
</ul>
<Section title="Web Applications" projects={WebAppProjects} />
<Section title="API's" projects={APIProjects} />
<Section title="Frontend Mentor components" projects={FMComponentProjects} />
