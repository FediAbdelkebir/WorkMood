import { StatusReclamation } from "./status-reclamation";

export class Reclamation {
    idReclamation!: number;
    objet!: string;
    message!: string;
    creationDate!: Date;
    processingDate!: Date;
    status!: StatusReclamation;
    response!: string;
}
