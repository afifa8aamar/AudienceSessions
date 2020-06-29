import { AuditoriumEnum } from './../json/auditoriumTypes';

export interface IAuditorium {
    AuditoriumId : number ;
    Name : AuditoriumEnum ;
    AuditoriumTypeId : number ;
}