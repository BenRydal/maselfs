<script lang="ts">
	import { ArrowRight, Quote } from 'lucide-svelte';
	import { studentQuotes, homepageQuoteIndices } from '$lib/data/quotes';

	const displayQuotes = homepageQuoteIndices.map(i => studentQuotes[i]);
</script>

<svelte:head>
	<title>MaSelfS - Mapping Self in Society</title>
</svelte:head>

<!-- Hero Section with Video Background -->
<section class="relative overflow-hidden min-h-screen flex items-center">
	<!-- Video Background -->
	<div class="video-background absolute inset-0 w-full h-full overflow-hidden">
		<video
			autoplay
			muted
			loop
			playsinline
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
		>
			<source src="/videos/hero-bg.webm" type="video/webm" />
			<source src="/videos/hero-bg.mp4" type="video/mp4" />
		</video>
	</div>

	<!-- Overlay for text readability -->
	<div class="absolute inset-0 bg-white/80"></div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
		<div class="text-center">
			<!-- Main heading -->
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
				Mapping Self in Society
			</h1>

			<!-- Acronym -->
			<p class="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">
				MaSelfS
			</p>

			<!-- Subtitle -->
			<p class="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
				A Personal Geography & Critical Spatial Inquiry Teaching Framework
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<a
					href="/overview"
					class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
				>
					Get Started
					<ArrowRight class="w-5 h-5" />
				</a>
				<a
					href="/about"
					class="inline-flex items-center gap-2 px-8 py-4 bg-slate-900/10 text-slate-900 font-semibold rounded-xl hover:bg-slate-900/20 transition-colors border border-slate-900/20"
				>
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Student Voices Section -->
<section class="py-16 lg:py-24 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
				What Students Experience
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Hear from students who have explored their personal geography with MaSelfS.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			{#each displayQuotes as quote}
				<div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
					<Quote class="w-10 h-10 text-blue-100 absolute top-4 left-4" />
					<blockquote class="relative z-10">
						<p class="text-gray-700 text-lg leading-relaxed mb-4 pl-6">
							"{quote.text}"
						</p>
						<footer class="text-sm text-gray-500 pl-6">
							— {quote.theme}
						</footer>
					</blockquote>
				</div>
			{/each}
		</div>
	</div>
</section>
