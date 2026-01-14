<script lang="ts">
	import { FileText, Mail } from 'lucide-svelte';

	const teamMembers = [
		{
			name: 'Ben Rydal Shapiro',
			institution: 'Georgia State University',
			image: '/images/bios/ben-opt.jpg'
		},
		{
			name: 'Rogers Hall',
			institution: 'Vanderbilt University',
			image: '/images/bios/hall-opt.jpg'
		},
		{
			name: 'Natalie Robbins',
			institution: 'Vanderbilt University',
			image: '/images/bios/robbins-opt.jpg'
		},
		{
			name: 'Steve Wernke',
			institution: 'Vanderbilt University',
			image: '/images/bios/wernke-opt.jpg'
		},
		{
			name: 'Amanda Meng',
			institution: 'Georgia Tech',
			image: '/images/bios/meng-opt.jpg'
		},
		{
			name: 'Sierra Gilliam',
			institution: 'Georgia State University',
			image: '/images/bios/gilliam-opt.jpg'
		},
		{
			name: 'Edwin Zhao',
			institution: 'Georgia State University',
			image: '/images/bios/edwin-opt.jpg'
		}
	];

	const pastContributors = [
		'Cody O\'Donnell',
		'Bianca Dankwa',
		'Charlotte Lou',
		'Emma Reimers',
		'Sachin Bangalore'
	];

	const publications = [
		{
			title: 'Re-Shape: A Method to Teach Data Ethics for Data Science Education',
			authors: 'Shapiro, B.R., Meng, A., O\'Donnell, C., Lou, C., Zhao, E., Dankwa, B., & Hostetler, A.',
			journal: 'Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems',
			year: 2020,
			link: 'https://www.researchgate.net/publication/338789145_Re-Shape_A_Method_to_Teach_Data_Ethics_for_Data_Science_Education'
		},
		{
			title: 'Why Learning on the Move: Intersecting Research Pathways for Mobility, Learning and Teaching',
			authors: 'Marin, A., Headrick-Taylor, K., Shapiro, B.R., & Hall, R.',
			journal: 'Cognition and Instruction, 38(3), 265-280',
			year: 2020,
			link: 'https://www.tandfonline.com/doi/full/10.1080/07370008.2020.1769100'
		}
	];
</script>

<svelte:head>
	<title>About - MaSelfS</title>
	<meta name="description" content="Learn about the team and institutions behind the Mapping Self in Society project." />
	<meta property="og:title" content="About - MaSelfS" />
	<meta property="og:description" content="Learn about the team and institutions behind the Mapping Self in Society project." />
	<meta property="og:url" content="https://maselfs.org/about" />
	<link rel="canonical" href="https://maselfs.org/about" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
				About
			</h1>
			<p class="text-xl text-gray-600 leading-relaxed">
				MaSelfS is a partnership between Georgia State University and Vanderbilt University,
				funded by the Spencer Foundation and National Science Foundation.
			</p>
		</div>
	</div>
</section>

<!-- Mission Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
				Our Mission
			</h2>
			<div class="prose prose-lg text-gray-600">
				<p class="mb-6">
					We develop teaching and learning frameworks that help people explore the connections
					between their daily movements and the communities they're part of. Through free,
					open-source tools and carefully designed activities, we make personal geography
					and critical spatial inquiry accessible to learners of all backgrounds.
				</p>
				<p>
					We welcome collaborators interested in expanding either this framework or other
					efforts to teach and conduct research related to personal geography and critical
					spatial inquiry.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Team Section -->
<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
				Our Team
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Meet the researchers and educators behind MaSelfS.
			</p>
		</div>

		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
			{#each teamMembers as member}
				<div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
					<div class="w-28 h-28 rounded-full overflow-hidden mb-3 mx-auto ring-4 ring-gray-100">
						{#if member.image}
							<img src={member.image} alt={member.name} class="w-full h-full object-cover" />
						{:else}
							<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
								{member.name.split(' ').map(n => n[0]).join('')}
							</div>
						{/if}
					</div>
					<h3 class="font-semibold text-gray-900">
						{member.name}
					</h3>
					<p class="text-sm text-gray-500">{member.institution}</p>
				</div>
			{/each}
		</div>

		<!-- Past Contributors -->
		<div class="text-center">
			<h3 class="text-lg font-semibold text-gray-900 mb-4">Past Contributors</h3>
			<p class="text-gray-600">
				{pastContributors.join(' • ')}
			</p>
		</div>
	</div>
</section>

<!-- Institutions Section -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
				Partner Institutions
			</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			<div class="bg-gray-50 rounded-2xl p-8 text-center">
				<h3 class="text-xl font-bold text-gray-900 mb-2">Georgia State University</h3>
				<p class="text-gray-600">Department of Learning Sciences</p>
			</div>
			<div class="bg-gray-50 rounded-2xl p-8 text-center">
				<h3 class="text-xl font-bold text-gray-900 mb-2">Vanderbilt University</h3>
				<p class="text-gray-600">Spatial Analysis Research Lab</p>
			</div>
			<div class="bg-gray-50 rounded-2xl p-8 text-center">
				<h3 class="text-xl font-bold text-gray-900 mb-2">Georgia Tech</h3>
				<p class="text-gray-600">School of Interactive Computing</p>
			</div>
		</div>
	</div>
</section>

<!-- Publications Section -->
<section class="py-16 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
				Publications
			</h2>

			<div class="space-y-4">
				{#each publications as pub}
					<a
						href={pub.link}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
					>
						<div class="shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
							<FileText class="w-5 h-5" />
						</div>
						<div class="flex-1 min-w-0">
							<h3 class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
								{pub.title}
							</h3>
							<p class="text-sm text-gray-600 mb-1">{pub.authors}</p>
							<p class="text-sm text-gray-500">
								<span class="italic">{pub.journal}</span>, {pub.year}
							</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">
			Interested in Collaborating?
		</h2>
		<p class="text-blue-100 mb-8 max-w-2xl mx-auto">
			We welcome researchers and educators interested in expanding our frameworks
			or conducting related research in personal geography and critical spatial inquiry.
		</p>
		<a
			href="mailto:bshapiro@gsu.edu"
			class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
		>
			Get in Touch
			<Mail class="w-5 h-5" />
		</a>
	</div>
</section>
