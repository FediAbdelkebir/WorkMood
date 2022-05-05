import { Badge } from "./badge";
import { Comments } from "./comments";
import { LikeArticle } from "./like-article";
import { Messagerie } from "./messagerie";
import { Offer } from "./offer";
import { Reclamation } from "./reclamation";
import { Review } from "./review";
import { Roles } from "./roles";
import { SurveyQuestion } from "./survey-question";

export class User {
    idUser!:number;
    firstname!:String;
    name!:String;
    emailAddress!:String;
    username!:String;
    salary!:any;
    address!:String;
    PhoneNumber!:number;
    Points!:number;
    Trouphies!:number;
    subDate!:Date;
    passwd!:String;
    confirmPasswd!:String;
    enabled!:Boolean;
    roles!:Roles[];
    surveys!:SurveyQuestion[];
    reviews!:Review[];
    messageries!:Messagerie[];
    offers!:Offer[];
    reclamations!:Reclamation[];
    events!:Event[];
    LikedEvent!:Event[];
    AcquiredBadges!:Badge[];
    Comments!:Comments[];
    likeArticle!:LikeArticle[];
}
