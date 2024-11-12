<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer/Footer.svelte';
	import Header from '../components/Header/Header.svelte';
	let { children } = $props();
</script>

<Header />
<main class="container mx-auto">
	{@render children()}
</main>
<Footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.950);
	}
</style>
