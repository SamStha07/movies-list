export interface IImage {
	small: string;
	large: string;
}

export interface IDirector {
	name?: string;
	image: IImage;
	bio?: string;
}

export interface IMovie {
	slug: string;
	name: string;
	category: string;
	image: IImage;
	director: IDirector;
}
