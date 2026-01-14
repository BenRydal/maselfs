<script lang="ts">
	import { activities } from '$lib/data/activities';
	import { BookOpen, Video } from 'lucide-svelte';

	// Collect all unique readings from activities
	const allReadings = activities.flatMap(a =>
		a.readings.map(r => ({ ...r, activityId: a.id, activityTitle: a.title }))
	);

	const academicReadings = allReadings.filter(r => r.type === 'academic');
	const mediaReadings = allReadings.filter(r => r.type === 'media');

	// Collect all videos from activity steps
	const allVideos = activities.map(activity => ({
		activityId: activity.id,
		activityTitle: activity.title,
		videos: (activity.steps || [])
			.filter(step => step.video)
			.map(step => step.video!)
	})).filter(a => a.videos.length > 0);

	const tools = [
		{
			name: 'OutdoorActive',
			description: 'Mobile app for collecting GPS tracks and recording your daily movements. Available for iOS and Android.',
			url: 'https://www.outdooractive.com',
			image: '/images/outdoor-active.jpg'
		},
		{
			name: 'IGS Visualization Tool',
			description: 'Interactive tool for visualizing your GPS tracks and exploring social data layers. Import GPX files directly.',
			url: 'https://interactiongeography.org',
			video: { webm: '/videos/card-video.webm', mp4: '/videos/card-video.mp4' },
			darkBg: true
		}
	];

</script>

<svelte:head>
	<title>Resources - MaSelfS</title>
	<meta name="description" content="Tools, readings, and downloadable resources for the Mapping Self in Society framework." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-gray-50 to-green-50 py-16 lg:py-24">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
				Resources
			</h1>
			<p class="text-xl text-gray-600 leading-relaxed">
				Everything you need to explore personal geography: tools, readings, and downloadable materials.
			</p>
		</div>
	</div>
</section>

<!-- Tools Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-10">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
				Tools We Use
			</h2>
			<p class="text-lg text-gray-600">
				Free, open-source tools that make personal geography accessible to everyone.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
			{#each tools as tool}
				<a
					href={tool.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer"
				>
					<div class="aspect-video overflow-hidden {tool.darkBg ? 'bg-gray-900' : 'bg-gray-100'}">
						{#if tool.video}
							<video autoplay muted loop playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
								<source src={tool.video.webm} type="video/webm" />
								<source src={tool.video.mp4} type="video/mp4" />
							</video>
						{:else}
							<img
								src={tool.image}
								alt={tool.name}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						{/if}
					</div>
					<div class="p-6">
						<h3 class="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
							{tool.name}
						</h3>
						<p class="text-gray-600 text-sm">
							{tool.description}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Readings Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-10">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
				Readings & Media
			</h2>
			<p class="text-lg text-gray-600">
				Academic articles and media resources referenced throughout the activities.
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Academic Readings -->
			<div>
				<div class="flex items-center gap-3 mb-6">
					<div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
						<BookOpen class="w-5 h-5" />
					</div>
					<h3 class="text-xl font-semibold text-gray-900">Academic Articles</h3>
				</div>
				<div class="space-y-3">
					{#each academicReadings as reading}
						<a
							href={reading.url}
							class="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
						>
							<p class="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
								{reading.title}
							</p>
							<p class="text-sm text-gray-500">
								Activity {reading.activityId}: {reading.activityTitle}
							</p>
						</a>
					{/each}
				</div>
			</div>

			<!-- Media Resources -->
			<div>
				<div class="flex items-center gap-3 mb-6">
					<div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
						<Video class="w-5 h-5" />
					</div>
					<h3 class="text-xl font-semibold text-gray-900">Media & Videos</h3>
				</div>
				<div class="space-y-3">
					{#each mediaReadings as reading}
						<a
							href={reading.url}
							class="block p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors group"
						>
							<p class="font-medium text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
								{reading.title}
							</p>
							<p class="text-sm text-gray-500">
								Activity {reading.activityId}: {reading.activityTitle}
							</p>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Video Tutorials Section -->
<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-10">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
				Video Tutorials
			</h2>
			<p class="text-lg text-gray-600">
				Step-by-step guides for each activity.
			</p>
		</div>

		<div class="space-y-8">
			{#each allVideos as activityVideos}
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-4">Activity {activityVideos.activityId}: {activityVideos.activityTitle}</h3>
					<div class="grid md:grid-cols-2 gap-6">
						{#each activityVideos.videos as video}
							<div class="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
								<div class="aspect-video">
									<iframe
										src="https://www.youtube.com/embed/{video.youtubeId}"
										title={video.title}
										frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
										class="w-full h-full"
									></iframe>
								</div>
								<div class="p-5">
									<h4 class="font-semibold text-gray-900 mb-1">{video.title}</h4>
									<p class="text-sm text-gray-600">{video.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

