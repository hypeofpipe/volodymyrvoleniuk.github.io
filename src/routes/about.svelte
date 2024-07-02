<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import Heading from '../components/Heading.svelte';

	import config from '../config';

	const {
		title,
		about: { intro, bio, picture },
		contact
	} = config.hero;
</script>

<!-- Page title -->
<div class="heading">
	<Heading level="h2" size="2.5rem">About me</Heading>
</div>

<!-- Bio paragraphs -->
<div class="hero-container">
	<div class="heading" in:fade>
		<Heading level="h1" size="3rem">{title}</Heading>
	</div>
	<div class="content">
		<section class="intro" in:fly={{ y: 50, duration: 500 }}>
			<p class="intro-text">{intro}</p>
			{#each bio as bioLine, i}
				<p class="bio-line" in:fly={{ y: 20, duration: 300, delay: i * 100 }}>{@html bioLine}</p>
			{/each}
		</section>
		<section class="profile" in:fade={{ duration: 800 }}>
			<img src={picture} alt="Volodymyr Voleniuk" />
			<div class="social-links">
				{#each contact.social as link}
					<a href={link.url} target="_blank" rel="noopener">{link.name}</a>
				{/each}
			</div>
		</section>
	</div>
	<button class="cta-button">Let's Connect</button>
</div>

<style lang="scss">
	@import '../styles/media-queries.scss';

	:global(body) {
		background-color: var(--color-background);
		color: var(--color-text);
	}

	p {
		text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
	}

	.hero-container {
		background: linear-gradient(135deg, var(--color-background), var(--card-background));
	}

	.heading {
		margin: 1rem calc(5vw + 1rem) 0;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
	}

	.content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		max-width: 1200px;
		@include laptop-up {
			// There's probably a better way to scale this grid, bit idk how
			grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
		}
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		padding: 1rem;
		width: 95vw;
		margin: 0 auto;
	}

	section {
		padding: 1rem;
		border-radius: var(--curve-factor);
		background: var(--card-background);
		// Intro / bio Section
		&.intro {
			grid-column-start: span 2;
			i {
				opacity: 0.8;
			}
			:global(p) {
				margin: 1rem 0;
				font-size: 1.25rem;
				line-height: 1.8rem;
				font-family: RedHatText;
			}
			:global(a) {
				color: var(--accent);
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.hero-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		background: var(--color-background);
		border-radius: 1rem;
	}

	.cta-button {
		margin-top: 2rem;
		padding: 1rem 2rem;
		background-color: var(--accent);
		color: var(--color-background);
		border: none;
		border-radius: 2rem;
		font-size: 1.2rem;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.05);
		}
	}
</style>
