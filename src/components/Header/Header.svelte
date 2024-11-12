<script>
	import { base } from '$app/paths';
</script>

<header class="p-4 text-white lg:container lg:m-auto lg:px-0">
	<nav class="flex justify-between">
		<div class="flex gap-2">
			<img class="rounded-full" src="{base}/images/profile.jpeg" alt="" width="28" height="28" />
			<h1>Jesse Kroon</h1>
		</div>
		<div class="flex justify-between gap-2">
			<a href="{base}/" class="hover:text-amber-400">Home</a>
			<a href="{base}/projects" class="hover:text-amber-400">Projects</a>
		</div>
	</nav>
</header>
