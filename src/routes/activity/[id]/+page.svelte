<script lang="ts">
	import type { PageData } from './$types';
	import ActivityIcon from '$lib/components/ActivityIcon.svelte';
	import { getActivityColors } from '$lib/data/activities';
	import { AlertCircle, CheckCircle, BookOpen, Video, FileText, ArrowRight, Clock } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();

	const colors = $derived(getActivityColors(data.activity.id));
</script>

<svelte:head>
	<title>Activity {data.activity.id}: {data.activity.title} - MaSelfS</title>
	<meta name="description" content={data.activity.description} />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-10 lg:py-14 overflow-hidden">
	{#if data.activity.heroImage}
		<div class="absolute inset-0">
			<img
				src={data.activity.heroImage}
				alt=""
				class="w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-br {colors.gradient} opacity-70"></div>
		</div>
	{/if}

	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
				<span class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
					<ActivityIcon activityId={data.activity.id} class="w-3.5 h-3.5" />
				</span>
				Activity {data.activity.id} of 3
			</div>
			<h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
				{data.activity.title}
			</h1>
			<p class="text-xl text-white/90 mb-4">
				{data.activity.subtitle}
			</p>
			{#if data.activity.duration}
				<div class="inline-flex items-center gap-2 text-white/80 text-sm">
					<Clock class="w-4 h-4" />
					<span>{data.activity.duration}</span>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Navigation Pills -->
<div class="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<nav class="flex gap-1 py-3 overflow-x-auto">
			<a href="#overview" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg whitespace-nowrap">Overview</a>
			{#if data.activity.steps && data.activity.steps.length > 0}
				<a href="#steps" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg whitespace-nowrap">Steps</a>
			{/if}
			<a href="#questions" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg whitespace-nowrap">Guiding Questions</a>
			<a href="#concepts" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg whitespace-nowrap">Key Concepts</a>
			<a href="#readings" class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg whitespace-nowrap">Readings</a>
		</nav>
	</div>
</div>

<!-- Main Content -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="grid lg:grid-cols-3 gap-12">
		<!-- Main Column -->
		<div class="lg:col-span-2 space-y-12">
			<!-- Overview -->
			<section id="overview">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
				<p class="text-lg text-gray-600 leading-relaxed">
					{data.activity.description}
				</p>
			</section>

			<!-- Steps Section -->
			{#if data.activity.steps && data.activity.steps.length > 0}
				<section id="steps">
					<h2 class="text-2xl font-bold text-gray-900 mb-6">How to Complete This Activity</h2>
					<div class="space-y-4">
						{#each data.activity.steps as step, i}
							<div class="p-5 bg-gray-50 rounded-xl border border-gray-100">
								<div class="flex gap-4">
									<div class="w-10 h-10 {colors.bgSolid} text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0">
										{i + 1}
									</div>
									<div class="flex-1">
										<h3 class="font-semibold text-gray-900 mb-1">{step.title}</h3>
										<p class="text-gray-600">{step.description}</p>
									</div>
								</div>
								{#if step.video}
									<div class="mt-4 ml-14">
										<div class="aspect-video rounded-xl overflow-hidden">
											<iframe
												src="https://www.youtube.com/embed/{step.video.youtubeId}"
												title={step.video.title}
												frameborder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowfullscreen
												class="w-full h-full"
											></iframe>
										</div>
									</div>
								{/if}
								{#if step.loopingVideo}
									{@const v = step.loopingVideo}
									<div class="mt-4 ml-14">
										<svelte:element
											this={v.link ? 'a' : 'div'}
											href={v.link}
											target={v.link ? '_blank' : undefined}
											rel={v.link ? 'noopener noreferrer' : undefined}
											aria-label={v.link ? 'Open IGS Visualization Tool' : undefined}
											class="block aspect-video rounded-xl overflow-hidden border border-gray-200 {v.link ? 'hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer' : ''}"
										>
											<video autoplay muted loop playsinline class="w-full h-full object-cover">
												<source src={v.webm} type="video/webm" />
												<source src={v.mp4} type="video/mp4" />
											</video>
										</svelte:element>
									</div>
								{/if}
								{#if step.image}
									{@const img = step.image}
									<div class="mt-4 ml-14">
										<svelte:element
											this={img.link ? 'a' : 'div'}
											href={img.link}
											target={img.link ? '_blank' : undefined}
											rel={img.link ? 'noopener noreferrer' : undefined}
											class="block aspect-video rounded-xl overflow-hidden border border-gray-200 {img.link ? 'hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer' : ''}"
										>
											<img src={img.src} alt={img.alt} class="w-full h-full object-cover" />
										</svelte:element>
									</div>
								{/if}
								{#if step.links && step.links.length > 0}
									<div class="mt-4 ml-14 flex flex-wrap gap-3">
										{#each step.links as link}
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-300 hover:shadow-sm transition-all"
											>
												<FileText class="w-4 h-4 text-green-600" />
												{link.title}
											</a>
										{/each}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Considerations Section -->
			{#if data.activity.considerations && data.activity.considerations.length > 0}
				<section id="considerations">
					<div class="bg-amber-50 border border-amber-200 rounded-xl p-6">
						<div class="flex items-center gap-3 mb-4">
							<div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
								<AlertCircle class="w-5 h-5" />
							</div>
							<h2 class="text-lg font-bold text-gray-900">Important Considerations</h2>
						</div>
						<ul class="space-y-3">
							{#each data.activity.considerations as consideration}
								<li class="flex items-start gap-3">
									<CheckCircle class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
									<span class="text-gray-700">{consideration}</span>
								</li>
							{/each}
						</ul>
					</div>
				</section>
			{/if}

			<!-- Guiding Questions -->
			<section id="questions">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Guiding Questions</h2>
				<div class="space-y-3">
					{#each data.activity.guidingQuestions as question, i}
						<div class="flex items-start gap-4 p-4 {colors.bg} rounded-xl border border-gray-100">
							<span class="w-8 h-8 {colors.bgSolid} text-white rounded-lg flex items-center justify-center text-sm font-semibold shrink-0">
								{i + 1}
							</span>
							<p class="text-gray-700 pt-1">{question}</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- Key Concepts -->
			<section id="concepts">
				<h2 class="text-2xl font-bold text-gray-900 mb-6">Key Concepts</h2>
				<div class="space-y-4">
					{#each data.activity.keyConcepts as concept}
						<div class="border border-gray-200 rounded-xl p-5 {colors.hoverBorder} transition-colors">
							<h3 class="font-semibold text-gray-900 mb-2">{concept.term}</h3>
							<p class="text-gray-600">{concept.definition}</p>
						</div>
					{/each}
				</div>
			</section>
		</div>

		<!-- Sidebar -->
		<div class="lg:col-span-1">
			<div class="sticky top-32 space-y-6">
				<!-- Readings Card -->
				<section id="readings" class="bg-gray-50 rounded-2xl p-6">
					<h2 class="text-lg font-bold text-gray-900 mb-4">Readings & Resources</h2>
					<div class="space-y-3">
						{#each data.activity.readings as reading}
							<a
								href={reading.url}
								class="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
							>
								<span class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 {reading.type === 'academic' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}">
									{#if reading.type === 'academic'}
										<BookOpen class="w-4 h-4" />
									{:else}
										<Video class="w-4 h-4" />
									{/if}
								</span>
								<span class="text-sm text-gray-700 group-hover:text-gray-900">{reading.title}</span>
							</a>
						{/each}
					</div>
				</section>
			</div>
		</div>
	</div>
</div>

<!-- Next Activity CTA -->
{#if data.nextActivity}
	{@const nextColors = getActivityColors(data.nextActivity.id)}
	<section class="relative py-10 overflow-hidden">
		<div class="absolute inset-0">
			<img
				src={data.nextActivity.heroImage}
				alt=""
				class="w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-br {nextColors.gradient} opacity-70"></div>
		</div>
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-2xl font-bold text-white mb-4">
				Ready for the next step?
			</h2>
			<p class="text-white/90 mb-8">
				Continue to Activity {data.nextActivity.id}: {data.nextActivity.title}
			</p>
			<a
				href="/activity/{data.nextActivity.id}"
				class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
			>
				Continue to Activity {data.nextActivity.id}
				<ArrowRight class="w-5 h-5" />
			</a>
		</div>
	</section>
{:else}
	<section class="bg-gradient-to-br from-gray-800 to-gray-900 py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-2xl font-bold text-white mb-4">
				Congratulations!
			</h2>
			<p class="text-white/80 mb-8">
				You've completed all three activities of the MaSelfS framework.
			</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<a
					href="/overview"
					class="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
				>
					Review Overview
				</a>
				<a
					href="/about"
					class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
				>
					Learn About Us
				</a>
			</div>
		</div>
	</section>
{/if}
