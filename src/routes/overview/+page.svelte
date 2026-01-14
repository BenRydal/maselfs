<script lang="ts">
	import { activities, getActivityColors } from '$lib/data/activities';
	import { studentQuotes } from '$lib/data/quotes';
	import ActivityIcon from '$lib/components/ActivityIcon.svelte';
	import { ChevronRight, ArrowRight, Quote } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Overview - MaSelfS</title>
	<meta name="description" content="Overview of the Mapping Self in Society teaching framework and its three sequential activities." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-10 lg:py-14 overflow-hidden">
	<div class="absolute inset-0">
		<img
			src="/images/overview-hero.jpg"
			alt=""
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 opacity-70"></div>
	</div>

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
				Overview
			</h1>
			<p class="text-xl text-white/90 leading-relaxed">
				Mapping Self in Society (MaSelfS) is a teaching and learning framework that helps people
				explore the connections between their daily movements and the communities they're part of.
			</p>
		</div>
	</div>
</section>

<!-- Introduction Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
				About the Framework
			</h2>
			<div class="prose prose-lg text-gray-600">
				<p class="mb-6">
					The framework uses free, open-source mapping tools for learners to collect and visualize
					personal movement data. Through three focused activities, participants build skills in
					data collection, visualization, and critical analysis.
				</p>
				<p class="mb-6">
					MaSelfS guides exploration of fundamental questions about personal geography, including:
				</p>
				<ul class="space-y-4 mb-6">
					<li class="flex items-start gap-3">
						<div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-sm">
							<ActivityIcon activityId={1} variant="image" class="w-full h-full" />
						</div>
						<span class="pt-2">How do I allocate my time across different places, and why?</span>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-sm">
							<ActivityIcon activityId={2} variant="image" class="w-full h-full" />
						</div>
						<span class="pt-2">What connections exist between my movement patterns and community involvement?</span>
					</li>
					<li class="flex items-start gap-3">
						<div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-sm">
							<ActivityIcon activityId={3} variant="image" class="w-full h-full" />
						</div>
						<span class="pt-2">How does reflecting on personal data relate to concepts of fairness and privacy?</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Activities Section -->
<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
				Three Activities
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				A streamlined learning journey from data collection through visualization to critical reflection.
			</p>
		</div>

		<div class="space-y-6">
			{#each activities as activity}
				{@const colors = getActivityColors(activity.id)}
				<a
					href="/activity/{activity.id}"
					class="block group {colors.bg} border {colors.border} rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
				>
					<div class="flex flex-col lg:flex-row lg:items-center gap-6">
						<div class="flex items-center gap-4 lg:w-1/3">
							<div class="w-16 h-16 rounded-xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform shadow-md">
								<ActivityIcon activityId={activity.id} variant="image" class="w-full h-full" />
							</div>
							<div>
								<h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
									{activity.title}
								</h3>
								<p class="text-sm text-gray-500">{activity.subtitle}</p>
							</div>
						</div>
						<div class="lg:w-2/3">
							<p class="text-gray-600">
								{activity.description}
							</p>
						</div>
						<div class="hidden lg:flex items-center text-gray-400 group-hover:text-blue-600 transition-colors">
							<ChevronRight class="w-6 h-6" />
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Student Perspectives Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
				Student Perspectives
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Students from computer science and human geography reflect on what it means to see themselves as data.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
			{#each studentQuotes as perspective}
				<div class="bg-gray-50 rounded-2xl p-6 lg:p-8 relative border border-gray-100">
					<div class="flex items-center gap-2 mb-4">
						<Quote class="w-5 h-5 text-blue-500" />
						<span class="text-sm font-medium text-blue-600">{perspective.theme}</span>
					</div>
					<blockquote>
						<p class="text-gray-700 leading-relaxed">
							"{perspective.text}"
						</p>
					</blockquote>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Tools Section -->
<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-10">
				<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
					Tools We Use
				</h2>
				<p class="text-lg text-gray-600">
					Free tools that make personal geography accessible to everyone.
				</p>
			</div>
			<div class="grid sm:grid-cols-2 gap-8">
				<a
					href="https://www.outdooractive.com"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group"
				>
					<div class="aspect-video bg-gray-100 overflow-hidden">
						<img src="/images/outdoor-active.jpg" alt="OutdoorActive app" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
					</div>
					<div class="p-6">
						<h3 class="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">OutdoorActive</h3>
						<p class="text-sm text-gray-600">
							Mobile app for collecting GPS tracks and recording your daily movements across different locations.
						</p>
					</div>
				</a>
				<a
					href="https://interactiongeography.org"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group"
				>
					<div class="aspect-video bg-gray-900 overflow-hidden">
						<video autoplay muted loop playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
							<source src="/videos/card-video.webm" type="video/webm" />
							<source src="/videos/card-video.mp4" type="video/mp4" />
						</video>
					</div>
					<div class="p-6">
						<h3 class="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">IGS Visualization Tool</h3>
						<p class="text-sm text-gray-600">
							Interactive tool for visualizing your GPS tracks alongside social data layers. Import GPX files directly.
						</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="relative py-10 overflow-hidden">
	<div class="absolute inset-0">
		<img
			src="/images/activity-1-hero.jpg"
			alt=""
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-70"></div>
	</div>
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">
			Ready to Begin?
		</h2>
		<p class="text-white/90 mb-8 max-w-2xl mx-auto">
			Start your journey into personal geography with Activity 1: Capturing Daily Movement.
		</p>
		<a
			href="/activity/1"
			class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
		>
			Start Activity 1
			<ArrowRight class="w-5 h-5" />
		</a>
	</div>
</section>
