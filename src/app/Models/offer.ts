import { CategoryOffer } from "./category-offer";

export class Offer{
    idOffer!: number;
	title!: string;
	description!: string;
    dateExp!: Date;
	category!: CategoryOffer;
	image!: string;
	point!: number; 
	address!: string; 
	limitedNumber!: number; 
	personsNumber!: number; 
}
