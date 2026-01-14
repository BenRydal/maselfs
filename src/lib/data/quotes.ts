export interface StudentQuote {
	text: string;
	theme: string;
}

export const studentQuotes: StudentQuote[] = [
	{
		text: "Gathering and reflecting on my location data in class was something I experienced for the first time. Even though my location data is publicly available through applications like Google Maps, Facebook, Weather Channel and many more; it was the first time that I got to talk about it and reflect on it face to face with other people.",
		theme: "Novel experience"
	},
	{
		text: "Gathering data about myself felt inconsequential at first as I already use countless technologies that rely on my sharing personal information daily. Once I was able to visualize my movements over that one day, however, I felt like these few numbers—latitude and longitude pairs on a map—revealed so much about me. I felt able to scrutinize my life in a very intimate, personal way.",
		theme: "The intimacy of data"
	},
	{
		text: "Observing and interacting with my own data felt both empowering and unsettling. On one hand, seeing my own whereabouts and patterns across several days gave me knowledge of my daily habits. At the same time, noticing the accuracy and speed at which my phone can track my location made me think deeply about the types and quantity of personal data we afford to technology companies.",
		theme: "Empowerment and critique"
	},
	{
		text: "When asked to share our location data with the class, I opted out. I live alone off campus. I'm a small female. I don't want people to know where I live and when I'm home. After discussion, I realized this was a ridiculous line of thinking, as I rarely opt out of giving apps on my phone access to my location. It is interesting that I was more concerned about 30 or so of my peers viewing my data but have ignored the many companies that have access to even more information. This exercise has made me rethink who has access to my data.",
		theme: "The privacy paradox"
	}
];

// Shorter quotes for homepage - indices into studentQuotes
export const homepageQuoteIndices = [1, 3]; // "The intimacy of data" and "The privacy paradox"
