<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>MaSelfS - Mapping Self in Society</title>
	<meta name="description" content="A Personal Geography & Critical Spatial Inquiry Teaching Framework" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="MaSelfS - Mapping Self in Society" />
	<meta property="og:description" content="A teaching framework for personal geography and critical spatial inquiry. Collect, visualize, and reflect on your location data." />
	<meta property="og:image" content="/images/overview-hero.jpg" />
	<meta property="og:site_name" content="MaSelfS" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="MaSelfS - Mapping Self in Society" />
	<meta name="twitter:description" content="A teaching framework for personal geography and critical spatial inquiry. Collect, visualize, and reflect on your location data." />
	<meta name="twitter:image" content="/images/overview-hero.jpg" />

	<!-- Additional SEO -->
	<meta name="author" content="Ben Rydal Shapiro" />
	<meta name="keywords" content="personal geography, spatial inquiry, data ethics, GPS tracking, location data, education, teaching framework" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://maselfs.org" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
