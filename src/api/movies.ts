import InstellarImage from '../../public/images/movies/interstellar.png';
import CocoImage from '../../public/images/movies/coco.png';
import MagadhiraImage from '../../public/images/movies/magadhira.png';
import ChristopherImage from '../../public/images/director/christopher-nolan.png';
import RajhmouliImage from '../../public/images/director/ss-rajhmouli.jpeg';
import LeeUnkrichImage from '../../public/images/director/lee-unkrich.jpeg';

const moviesData = [
	{
		id: 0,
		slug: 'interstellar',
		name: 'Interstellar',
		category: 'space movie',
		image: InstellarImage,
		description: `Interstellar is a 2014 American-British epic science fiction flm directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, John Lithgow, Michael , and Matt Damon. Set in a dystopian future where humanity is  to survive, the flm follows a group of astronauts who travel  a wormhole near Saturn in search of a new home for mankind.`,
		director: {
			name: 'christopher nolan',
			image: ChristopherImage,
			bio: `Christopher Edward Nolan is a British-American flm director, producer, and screenwriter. His directorial eforts have grossed more than US$5.1 billion worldwide, garnered 34 Oscar nominations and ten wins. Born and raised in London, Nolan developed an interest in flmmaking from a young age`,
		},
		recommendation: {
			id: 1,
			slug: 'magadhira',
			name: 'magadhira',
			category: 'telugu',
			image: MagadhiraImage,
			description:
				'A warrior gets reincarnated 400 years later, after trying to save the princess and the kingdom, who also dies along with him. He then sets back again to fight against all odds and win back his love.',
			director: {
				name: 'S. S. Rajamouli',
				image: RajhmouliImage,
				bio: 'S.S. Rajamouli was born on October 10, 1973 in Manvi, Karnataka, India. He is a writer and producer, known for Baahubali: The Beginning (2015), RRR (2022) and Baahubali 2: The Conclusion (2017).',
			},
		},
	},
	{
		id: 1,
		slug: 'magadhira',
		name: 'magadhira',
		category: 'telugu',
		image: MagadhiraImage,
		description:
			'A warrior gets reincarnated 400 years later, after trying to save the princess and the kingdom, who also dies along with him. He then sets back again to fight against all odds and win back his love.',
		director: {
			name: 'S. S. Rajamouli',
			image: RajhmouliImage,
			bio: 'S.S. Rajamouli was born on October 10, 1973 in Manvi, Karnataka, India. He is a writer and producer, known for Baahubali: The Beginning (2015), RRR (2022) and Baahubali 2: The Conclusion (2017).',
		},
		recommendation: {
			id: 0,
			slug: 'interstellar',
			name: 'Interstellar',
			category: 'space movie',
			image: InstellarImage,
			description:
				'Interstellar is a 2014 American-British epic science fiction flm directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, John Lithgow, Michael , and Matt Damon. Set in a dystopian future where humanity is  to survive, the flm follows a group of astronauts who travel  a wormhole near Saturn in search of a new home for mankind.',
			director: {
				name: 'christopher nolan',
				image: ChristopherImage,
				bio: 'Christopher Edward Nolan is a British-American flm director, producer, and screenwriter. His directorial eforts have grossed more than US$5.1 billion worldwide, garnered 34 Oscar nominations and ten wins. Born and raised in London, Nolan developed an interest in flmmaking from a young age',
			},
		},
	},
	{
		id: 2,
		slug: 'coco',
		name: 'coco',
		category: 'animated',
		image: CocoImage,
		description:
			'Aspiring musician Miguel, confronted with his family ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
		director: {
			name: 'Lee Unkrich',
			image: LeeUnkrichImage,
			bio: `Lee Unkrich is an Academy Award-winning director at Pixar Animation Studios. He most recently directed Disney.Pixar's critically-acclaimed "Coco", which received the Academy Award for Best Animated Feature and Best Song.`,
		},
		recommendation: {
			id: 0,
			slug: 'interstellar',
			name: 'Interstellar',
			category: 'space movie',
			image: InstellarImage,
			description:
				'Interstellar is a 2014 American-British epic science fiction flm directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, John Lithgow, Michael , and Matt Damon. Set in a dystopian future where humanity is  to survive, the flm follows a group of astronauts who travel  a wormhole near Saturn in search of a new home for mankind.',
			director: {
				name: 'christopher nolan',
				image: ChristopherImage,
				bio: `Christopher Edward Nolan is a British-American flm director, producer, and screenwriter. His directorial eforts have grossed more than US$5.1 billion worldwide, garnered 34 Oscar nominations and ten wins. Born and raised in London, Nolan developed an interest in flmmaking from a young age`,
			},
		},
	},
];

export default moviesData;
