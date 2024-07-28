const INFO = {
	main: {
		title: "Mayank's Portfolio",
		name: "Mayank Yadav",
		email: "mayank4code@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/mayank4code",
		linkedin: "https://www.linkedin.com/in/mayank-yadav198/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Full-stack web developer - MERN.",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Mayank Yadav. I live in India, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "WasteConnect",
			description:
				"Presented project at National Agro Hackathon 2023, highlighting a web portal connecting farmers and industries for 80-90% efficient crop residue trade among 200+ teams. Implemented custom middleware for token verification and error handling, ensuring a secure and seamless user experience. Integrated multilingual support on the website by adding 8 local languages, incorporating over 700+ keywords and sentences.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/mayank4code/WasteConnect2",
		},
		{
			title: "Evalley",
			description:
				"Website facilitates registration and login via OAuth 2.0 through various methods, resulting in a 15% reduction in storage usage and 5% lower CPU utilization. Executed a user-friendly interface and REST API integration, elevating usability and accessibility metrics by 20%. A slot booking website empowering over 100+ street vendors to reserve slots across an area innovatively.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com/mayank4code/eValley",
		},
		{
			title: "UdyamUplift",
			description:
				"Built a comprehensive website for CAXpert, harmonizing 10+ front-end and back-end functionalities. Implemented a secure login with 6 Digit OTP verification to enhance security using Firebase. Delivered personalized personality analyses for 100+ real-life users, incorporating insights across 3 key parameters.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://udyam-uplift.vercel.app/",
		},
		{
			title: "Yuva Portal",
			description:
				"Developed Yuva Portal, merging React front-end, NodeJS/ExpressJS back-end, and MongoDB, yielding a unified platform serving 100,000+ users, praised for its user-centric interface and seamless integration. Designed YuvaPortal’s REST API, smoothly integrating over 20+ user functions and admin routes. Successfully deployed website on VPS, ensuring 99% uptime, available at yuvaportal.youngindians.net.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://yuvaportal.youngindians.net/",
		},
	],

	experience: [
		{
			title: "Full Stack Developer Intern at Young Indians",
			duration: "Nov 2022 – Apr 2024",
			location: "New Delhi, India",
			description: [
				"Developed Yuva Portal, merging React front-end, NodeJS/ExpressJS back-end, and MongoDB, yielding a unified platform serving 100,000+ users, praised for its user-centric interface and seamless integration.",
				"Optimized dual-database integration, cutting processing time by 30% through approach refinement, enhanced efficiency for both new and existing users, significantly boosting overall operational performance.",
				"Designed YuvaPortal’s REST API, smoothly integrating over 20+ user functions and admin routes.",
				"Successfully deployed website on VPS, ensuring 99% uptime, available at yuvaportal.youngindians.net.",
			],
		},
		{
			title: "Full Stack Developer Intern at CAXPERT",
			duration: "July 2023 – Dec 2023",
			location: "Online",
			description: [
				"Developed Udyam Uplift, a psychometric test with interactive features, and data analytic via charts.js for visualizations and personalized assessments.",
				"Built a secure login with 6 Digit OTP verification to enhance security using Firebase.",
				"Implemented react-i18next to facilitate multilingual support for enhanced accessibility in eight regional languages.",
				"Delivered personalized personality analyses for 100+ real-life users, incorporating insights across 3 key parameters, accessible at udyam-uplift.vercel.app.",
			],
		},
	],
};

export default INFO;
