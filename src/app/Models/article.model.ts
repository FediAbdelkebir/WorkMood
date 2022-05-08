import { ArticleCategory } from "./article-category.moel";

export class Article {
  idArticle!:any;
  title!:string;
  description!:string;
  dateCreation!:Date;
  Image!:string;
  category!:ArticleCategory;
}
