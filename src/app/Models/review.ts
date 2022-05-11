import { CategoryReview } from "./category-review";
import { Classification } from "./classification";
import { TypeReview } from "./type-review";

export class Review {
    id!:number;
    societeName!:String;
    employeeName!:String;
    contentReview!:String;
    

    category!:CategoryReview;
    review!:TypeReview;
    classf!:Classification;
}
