export interface IImage {
	medium: string;
	original: string;
}

export interface ICountry {
	name: string;
	code: string;
	timezone: string;
}

export interface IRating {
	average: number;
}

export interface INetwork {
	id: number;
	name: string;
	country: ICountry;
}

export interface IShow {
	id: number;
	image: IImage;
	name: string;
	genres: string[];
	network: INetwork;
	runtime: number;
	rating: IRating;
}