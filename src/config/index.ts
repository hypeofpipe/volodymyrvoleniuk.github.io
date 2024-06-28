export type SiteConfig = {
	hero: {
		title: string;
		about: { intro: string; bio: string[]; picture: string };
		contact: { email: string; social: { name: string; url: string }[] };
	};
};

const config: SiteConfig = {
	hero: {
		title: 'Volodymyr Voleniuk - Software Engineer',
		about: {
			intro:
				'🚀 Hi there! I’m Volodymyr - a tech enthusiast at the crossroads of programming and artificial intelligence. Transforming ideas into reality, I’m deep-diving into the world of LLMs (and not only) to shape the future. 🌟',
			bio: [
				'From modding games to mastering AI, my journey is fueled by an insatiable curiosity and a desire to solve real-world problems.',
				'With a solid foundation in backend development using Node.js and a creative foray into game development, I’ve pivoted towards exploring the limitless potential of artificial intelligence and Large Language Models (LLMs).',
				'My toolkit includes (and not limited to) technologies like Nest.js, ExpressJS, TypeORM, React, Svelte, and a proficiency in DevOps practices with AWS, Docker, and more, ensuring a versatile approach to building robust solutions.',
				'My recent explorations have led me to install and experiment with cutting - edge models like Llama 2, Mixtral, and the formidable GPT- 4 Turbo.Watching lectures by luminaries such as Sam Altman and Andy Karpathy, I’m continually expanding my understanding and application of AI technologies.',
				'My aim? To experiment with LLMs to discover innovative tools and solutions, harnessing the power of AI to streamline and enhance the development process.',
				'I believe in using AI not just as a technological advancement, but as a means to contribute meaningfully to the world.',
				'Let’s connect and explore how we can solve complex challenges, push boundaries, and innovate for a brighter future. 🚀💡'
			],
			picture: 'https://avatars.githubusercontent.com/u/14982064'
		},
		contact: {
			email: 'hypeofpipe+contact@gmail.com',
			social: [{ name: 'GitHub', url: 'https://github.com/hypeofpipe' }]
		}
	}
};

export default config;
