import { StatusReclamation } from "./status-reclamation";
import { User } from "./user";

export class Reclamation {
    idReclamation!: number;
    objet!: string;
    message!: string;
    creationDate!: Date;
    processingDate!: Date;
    status!: StatusReclamation;
    response!: string;
    user!: User;
}
