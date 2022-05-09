import { ParsedEventType } from "@angular/compiler";
import { EventTags } from "./event-tags";
import { EventType } from "./event-type";
import { User } from "./user";

export class Event {
    id!:number;
    title!:String;
    description!:String;
    coverimage!:String;
    dateStart!: any;
    dateEnd!: any;
    npDisponible!:number;
    npMax!:number;
    nbrlikes!:number;
    type!:EventType;
    eventTags!:EventTags;
    trouphy!:Boolean;
    eventpoints!:number;
    users!:User[];
    usersLiked!:User[];
    
}
