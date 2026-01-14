export interface Video {
	youtubeId: string;
	title: string;
	description: string;
}

export interface LoopingVideo {
	webm: string;
	mp4: string;
	link?: string;
}

export interface ActivityStep {
	title: string;
	description: string;
	video?: Video;
	loopingVideo?: LoopingVideo;
	image?: {
		src: string;
		alt: string;
		link?: string;
	};
	links?: {
		title: string;
		url: string;
	}[];
}

export interface Activity {
	id: number;
	title: string;
	subtitle: string;
	description: string;
	heroImage: string;
	duration?: string;
	steps?: ActivityStep[];
	considerations?: string[];
	guidingQuestions: string[];
	keyConcepts: { term: string; definition: string }[];
	readings: { title: string; url: string; type: 'academic' | 'media' }[];
}

export const activities: Activity[] = [
	{
		id: 1,
		title: 'Collect',
		subtitle: 'Capturing your daily movement',
		description: 'This introductory activity teaches you to collect physical movement data using OutdoorActive, a free GPS tracking application. While collecting data, you\'ll explore fundamental concepts of human geography and ethical data use, building a picture of your personal geography through the data you generate in daily life.',
		heroImage: '/images/activity-1-hero.jpg',
		duration: '1 day minimum; 1 week recommended',
		steps: [
			{
				title: 'Introduction to Personal Geography',
				description: 'Before collecting data, watch this video to understand the key concepts of personal geography and critical spatial inquiry that frame this activity.',
				video: {
					youtubeId: 'AiLQQh6vCYE',
					title: 'Key Concepts: Personal Geography',
					description: 'An introduction to the concepts of personal geography and daily movement patterns.'
				}
			},
			{
				title: 'Set Up Your Tracking App',
				description: 'Download the free OutdoorActive app from the App Store or Google Play. Create an account and familiarize yourself with the interface. Watch the video below for a walkthrough.',
				video: {
					youtubeId: 'fEu--QqHCXQ',
					title: 'Getting Started with OutdoorActive',
					description: 'Learn how to set up the OutdoorActive app and begin collecting your movement data.'
				}
			},
			{
				title: 'Take a Practice Run',
				description: 'Before collecting real data, do a short test: start recording, walk around your building or block for 5-10 minutes, then stop and save the track. Check that your path appears on the map. This ensures the app is working correctly.'
			},
			{
				title: 'Record Your Daily Movements',
				description: 'Each day, start recording before you leave home. Go about your normal routine—the goal is to capture authentic movement, not special trips. At the end of each day, stop recording and save your track with a descriptive name (e.g., "Monday Commute + Errands"). Collect for at least one day, though one week reveals richer patterns.'
			}
		],
		considerations: [
			'You own your data completely. You decide what to collect, keep, share, or delete.',
			'Location data can reveal sensitive information about your habits, relationships, and frequently visited places. Only share what you\'re comfortable with.',
			'You can opt out or pause collection at any time—skip recording on days you prefer to keep private.',
			'Before sharing with classmates or instructors, review your tracks and remove any you\'d rather keep private.'
		],
		guidingQuestions: [
			'How do companies and organizations use location-based data?',
			'What patterns exist in my daily mobility and movements?',
			'How does my daily geography compare to others in my community?',
			'What design choices in technology affect how personal data is collected?',
			'Who has control over personal data once it\'s collected?',
			'What are the implications of tracking and quantifying daily life?',
			'How might location data reveal aspects of identity and social position?'
		],
		keyConcepts: [
			{
				term: 'Personal Geography',
				definition: 'The spatial patterns of an individual\'s daily life, including where they go, how often, and for how long. It reflects relationships between a person and the places they inhabit.'
			},
			{
				term: 'Personal Data',
				definition: 'Information that relates to an identified or identifiable individual, including location data, movement patterns, and temporal information about activities.'
			},
			{
				term: 'Physical Movement Data',
				definition: 'GPS coordinates and related information that track a person\'s location over time, creating a digital record of their movements through space.'
			},
			{
				term: 'Daily Round',
				definition: 'The routine spatial patterns of daily life, including commutes, errands, and regular activities that create predictable movement through geographic space.'
			},
			{
				term: 'Quantified Self',
				definition: 'The practice of self-tracking with technology to acquire data on aspects of daily life, including location, activity, and behavior patterns.'
			}
		],
		readings: [
			{ title: 'Personal Data Practices in the Age of Lively Data', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2636709', type: 'academic' },
			{ title: 'Critical Questions for Big Data', url: 'https://people.cs.kuleuven.be/~bettina.berendt/teaching/ViennaDH15/boyd_crawford_2012.pdf', type: 'academic' },
			{ title: 'How we can find ourselves in data - Giorgia Lupi (TED Talk)', url: 'https://www.ted.com/talks/giorgia_lupi_how_we_can_find_ourselves_in_data', type: 'media' },
			{ title: 'Your Apps Know Where You Were Last Night (NYT)', url: 'https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html', type: 'media' },
			{ title: 'Mapping - This American Life', url: 'https://www.thisamericanlife.org/110/mapping', type: 'media' },
			{ title: 'Personal Geography - Eric Fischer (Flickr)', url: 'https://www.flickr.com/photos/walkingsf/albums/72157628738161697', type: 'media' }
		]
	},
	{
		id: 2,
		title: 'Visualize',
		subtitle: 'Mapping self in society',
		description: 'Import your GPS data into the IGS visualization tool to map your daily movements, then overlay thematic maps to see how your personal geography intersects with broader social patterns in your community.',
		heroImage: '/images/activity-2-hero.jpg',
		steps: [
			{
				title: 'Export Your GPX Files',
				description: 'First, export your recorded tracks from OutdoorActive as GPX files. Open each track, tap share/export, and select GPX format. Watch the video below for a walkthrough.',
				video: {
					youtubeId: 'VG0Hwo5jibg',
					title: 'Downloading GPX Tracks from OutdoorActive',
					description: 'Learn how to export your GPS tracks for use in the IGS visualization tool.'
				}
			},
			{
				title: 'Open the IGS Visualization Tool',
				description: 'Go to interactiongeography.org and launch the IGS tool. Click the preview below to open it. Take a moment to explore the interface—notice the map view, time controls, and layer options.',
				loopingVideo: {
					webm: '/videos/card-video.webm',
					mp4: '/videos/card-video.mp4',
					link: 'https://interactiongeography.org'
				}
			},
			{
				title: 'Import Your GPX Files',
				description: 'Click the import button and load your GPX files. Your movement tracks will appear as colored paths on the map. If you have multiple days of data, import them all to see your full pattern.'
			},
			{
				title: 'Explore Your Movement',
				description: 'Use the map view to see your tracks at different scales. Try the time slider to watch your movement unfold chronologically, and the space-time cube to see patterns in 3D. Notice: Where are the dense clusters? What routes do you repeat? Where are the gaps?'
			},
			{
				title: 'Optional: Compare with Thematic Maps',
				description: 'To deepen your analysis, consider overlaying thematic maps that show social data for your area—income levels, demographics, historical redlining, environmental data, and more. You can download ready-made thematic maps from the spreadsheets below. Watch the video to learn how thematic maps work and how to use them effectively.',
				video: {
					youtubeId: 'Jghwpw-YdBc',
					title: 'Understanding Thematic Maps',
					description: 'How to find and interpret thematic maps showing social data in your community.'
				},
				links: [
					{
						title: 'Thematic Maps of the U.S.',
						url: 'https://docs.google.com/spreadsheets/d/16gciGsHexKhoICwLcjCtKBPrynHnOUFnf9zRAAQH7vs/edit?usp=sharing'
					},
					{
						title: 'Thematic Maps of Nashville, TN',
						url: 'https://docs.google.com/spreadsheets/d/1fy2KD-y34AcMyJw4_CW1WimuW3aLaPBIHLZDsKJYv2g/edit?usp=sharing'
					}
				]
			},
			{
				title: 'Document Your Observations',
				description: 'Take screenshots of meaningful views. Write down 3-5 key observations about what you see. What does your movement reveal when placed in social context? What questions do these visualizations raise?'
			}
		],
		considerations: [
			'Seeing your movement from above can feel strange or revealing—this is normal. Take time to process what you see.',
			'Maps are not neutral. They reflect choices about what data to show, what colors to use, and what boundaries to draw.',
			'Historical maps (like redlining maps) show how past policies continue to shape present-day geography.',
			'When sharing visualizations, you control what to show. You can zoom to hide specific locations or share patterns without revealing exact addresses.'
		],
		guidingQuestions: [
			'How does seeing my movement on a map differ from my ground-level experience?',
			'What spaces do I access or avoid, and why?',
			'How does my personal geography relate to patterns of inequality in my community?',
			'What historical patterns visible in maps still affect my neighborhood today?',
			'What does it mean to see myself as data within larger social systems?'
		],
		keyConcepts: [
			{
				term: 'Thematic Map',
				definition: 'A map designed to show a particular theme or subject area, such as population density, income levels, or historical boundaries.'
			},
			{
				term: 'Space-Time Cube',
				definition: 'A three-dimensional representation showing movement across both space (x, y) and time (z), revealing patterns in daily routines.'
			},
			{
				term: 'Activity Space',
				definition: 'The locations an individual has direct contact with during daily activities, shaped by both choice and constraint.'
			},
			{
				term: 'Critical Cartography',
				definition: 'An approach examining the power relations embedded in maps, questioning whose perspectives are represented.'
			},
			{
				term: 'Spatial Inequality',
				definition: 'The unequal distribution of resources and opportunities across geographic space, often visible through thematic mapping.'
			}
		],
		readings: [
			{ title: 'How to Lie with Maps (Monmonier)', url: 'https://www.researchgate.net/publication/38327043_Lying_with_Maps', type: 'academic' },
			{ title: 'Mapping Inequality: Redlining in New Deal America', url: 'https://dsl.richmond.edu/panorama/redlining/', type: 'academic' },
			{ title: 'Counter-Mapping the Neighborhood on Bicycles', url: 'https://peabody.vanderbilt.edu/departments/tl/teaching_and_learning_research/space_learning_mobility/Taylor_bicycles.pdf', type: 'academic' },
			{ title: 'All Maps Are Wrong (Vox)', url: 'https://www.vox.com/world/2016/12/2/13817712/map-projection-mercator-globe', type: 'media' },
			{ title: 'The Unequal Commute (Urban Institute)', url: 'https://www.urban.org/features/unequal-commute', type: 'media' },
			{ title: 'The True Size Of (Interactive)', url: 'https://thetruesize.com/', type: 'media' }
		]
	},
	{
		id: 3,
		title: 'Reflect',
		subtitle: 'Data ethics & critical inquiry',
		description: 'Synthesize your experiences from Activities 1 and 2 through guided reflection on personal geography, data ethics, and your relationship to place. Consider what your data reveals, who controls it, and what it means to see yourself as data.',
		heroImage: '/images/activity-3-hero.jpg',
		steps: [
			{
				title: 'Revisit Your Data Journey',
				description: 'Before reflecting, take 10 minutes to review your experience. Look back at your GPX tracks from Activity 1 and your visualizations from Activity 2. What stands out? What surprised you? What did you learn about your daily patterns?'
			},
			{
				title: 'Watch: Reflecting on Personal Data',
				description: 'Watch this video featuring educators discussing how to think critically about the data you\'ve collected and what it reveals about your relationship to place.',
				video: {
					youtubeId: 'uvFAb5dR2Vk',
					title: 'Reflecting on Personal Data',
					description: 'A guided reflection on what we\'ve learned about personal geography and data ethics.'
				}
			},
			{
				title: 'Individual Written Reflection',
				description: 'Spend 15-20 minutes writing responses to 2-3 of the guiding questions below. Write freely—this is for your own thinking, not for grading. Focus on questions that resonate with your experience.'
			},
			{
				title: 'Consider the "So What?"',
				description: 'Now think critically: What does it mean that you generated all this data just by living your life? Who else might have access to similar data about you? How does it feel to see yourself represented as points and paths on a map?'
			},
			{
				title: 'Small Group Discussion',
				description: 'In groups of 3-4, share one insight from your reflection. Listen to how others experienced the same activities differently. Discuss: What patterns did you notice across the group? What surprised you about others\' experiences?'
			},
			{
				title: 'Explore Data Ethics Concepts',
				description: 'Review the key concepts below (surveillance capitalism, informed consent, data sovereignty). Discuss with your group: How do these concepts connect to your experience collecting and visualizing your own data?'
			},
			{
				title: 'Whole Class Synthesis',
				description: 'As a class, discuss: What have we learned about personal geography? About data and privacy? About our relationship to the places we inhabit? What questions remain?'
			},
			{
				title: 'Personal Takeaways',
				description: 'End by writing 2-3 personal takeaways. How has this experience changed how you think about location data? About your daily geography? What, if anything, will you do differently?'
			}
		],
		considerations: [
			'Reflection can surface unexpected emotions. Some students may feel empowered by seeing their data; others may feel exposed or uncomfortable.',
			'Create a safe space for discussion. Students should share only what they\'re comfortable sharing.',
			'There are no "right answers" to these questions—the goal is thoughtful engagement, not correct conclusions.',
			'Connect personal experience to broader systems. Help students see how their individual data exists within larger contexts of surveillance, commerce, and social inequality.'
		],
		guidingQuestions: [
			'What have I learned about myself through this data collection process?',
			'How comfortable am I with companies having access to my location data?',
			'What are the benefits and risks of location tracking at a societal level?',
			'How might location data be used to discriminate or control?',
			'What rights should people have over their personal geographic data?',
			'How can we advocate for ethical data practices in our communities?',
			'How does reflecting on personal data relate to concepts of fairness and privacy?'
		],
		keyConcepts: [
			{
				term: 'Data Ethics',
				definition: 'The branch of ethics that studies and evaluates moral problems related to data, including privacy, consent, and the fairness of data-driven systems.'
			},
			{
				term: 'Surveillance Capitalism',
				definition: 'An economic system centered on the commodification of personal data, where companies profit from predicting and modifying human behavior.'
			},
			{
				term: 'Informed Consent',
				definition: 'The principle that individuals should understand and agree to how their data is collected and used before participating in data collection.'
			},
			{
				term: 'Data Sovereignty',
				definition: 'The concept that individuals or communities have the right to control data about themselves and their activities.'
			},
			{
				term: 'Algorithmic Bias',
				definition: 'Systematic errors in computer systems that create unfair outcomes, often reflecting and amplifying existing social inequalities.'
			},
			{
				term: 'Mobility Capital',
				definition: 'The ability to be mobile, influenced by access to transportation, physical ability, financial resources, and social networks.'
			}
		],
		readings: [
			{ title: 'The Age of Surveillance Capitalism (Zuboff)', url: 'https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395694/', type: 'academic' },
			{ title: 'Weapons of Math Destruction (O\'Neil)', url: 'https://www.penguinrandomhouse.com/books/241363/weapons-of-math-destruction-by-cathy-oneil/', type: 'academic' },
			{ title: 'Learning at the Intersection of Self & Society', url: 'https://www.tandfonline.com/doi/full/10.1080/10508406.2019.1693377', type: 'academic' },
			{ title: 'Your Apps Know Where You Were Last Night (NYT)', url: 'https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html', type: 'media' },
			{ title: 'Data Humanism (Giorgia Lupi)', url: 'http://giorgialupi.com/data-humanism-my-manifesto-for-a-new-data-wold', type: 'media' }
		]
	}
];

export function getActivity(id: number): Activity | undefined {
	return activities.find(a => a.id === id);
}

export function getNextActivity(id: number): Activity | undefined {
	return activities.find(a => a.id === id + 1);
}

// Shared activity color schemes for consistent theming
export const activityColors = {
	1: {
		bg: 'bg-blue-50',
		bgSolid: 'bg-blue-600',
		bgLight: 'bg-blue-100',
		border: 'border-blue-200',
		text: 'text-blue-600',
		textOnSolid: 'text-white',
		gradient: 'from-blue-600 to-blue-800',
		hoverBorder: 'hover:border-blue-200'
	},
	2: {
		bg: 'bg-purple-50',
		bgSolid: 'bg-purple-600',
		bgLight: 'bg-purple-100',
		border: 'border-purple-200',
		text: 'text-purple-600',
		textOnSolid: 'text-white',
		gradient: 'from-purple-600 to-purple-800',
		hoverBorder: 'hover:border-purple-200'
	},
	3: {
		bg: 'bg-green-50',
		bgSolid: 'bg-green-600',
		bgLight: 'bg-green-100',
		border: 'border-green-200',
		text: 'text-green-600',
		textOnSolid: 'text-white',
		gradient: 'from-green-600 to-green-800',
		hoverBorder: 'hover:border-green-200'
	}
} as const;

export function getActivityColors(id: number) {
	return activityColors[id as keyof typeof activityColors] || activityColors[1];
}
