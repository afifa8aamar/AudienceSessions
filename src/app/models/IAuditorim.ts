import { SubjectEnum } from '../json/subjects';

export enum AuditoriumEnum {
    Regular, 
    Small, 
    Big60, 
    Big300, 
    Computer15, 
    Computer20, 
    Drawing, 
    MediaComputers, 
    MediaAuditorium, 
    LawAuditorium
}

export interface IAuditorium {
    AuditoriumId : number ;
    Name : AuditoriumEnum ;
    AuditoriumTypeId : number ;
    Subjects : SubjectEnum[];
}