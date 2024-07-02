<script lang="ts">
	import { theme } from '$lib/stores';

	const themes = ['light', 'dark', 'system'];

	function cycleTheme() {
		theme.update((currentTheme) => {
			const currentIndex = themes.indexOf(currentTheme);
			const nextIndex = (currentIndex + 1) % themes.length;
			return themes[nextIndex];
		});
	}
</script>

<button on:click={cycleTheme} aria-label="Switch theme">
	{#if $theme === 'light'}
		🌞
	{:else if $theme === 'dark'}
		🌙
	{:else}
		💻
	{/if}
	{$theme}
</button>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.25rem;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: var(--color-background-hover, #f0f0f0);
	}
</style>
