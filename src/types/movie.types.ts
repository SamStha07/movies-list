export interface IDirector {
	name?: string;
	image: string;
	bio?: string;
}

export interface IMovie {
	slug: string;
	name: string;
	category: string;
	image: string;
	director: IDirector;
}
