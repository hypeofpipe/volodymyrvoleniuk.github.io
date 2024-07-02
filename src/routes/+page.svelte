<script>
	import About from './about.svelte';
	import InteractiveBackground from '../components/InteractiveBackground.svelte';
</script>

<div>
	<InteractiveBackground>
		<About />
	</InteractiveBackground>
</div>

<style>
	:global(body) {
		background-color: var(--color-background);
		color: var(--color-text);
	}
</style>
