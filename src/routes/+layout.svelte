<script lang="ts">
	import { theme } from '$lib/stores';
	import ThemeSwitcher from '$lib/components/ThemeSwitch.svelte';

	// Set the initial theme
	const href = `/theme/${$theme}.css`;
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme} />
	<link rel="stylesheet" {href} type="text/css" />
</svelte:head>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<!-- Add more navigation items as needed -->
		</ul>
	</nav>
	<ThemeSwitcher />
</header>

<main>
	<slot />
</main>

<style>
	header {
		background-color: var(--color-header-background, #f0f0f0);
		color: var(--color-header-text, #333);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	nav ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 1rem;
	}

	nav a {
		text-decoration: none;
		color: inherit;
		font-weight: bold;
	}

	main {
		padding: 1rem;
	}
</style>
