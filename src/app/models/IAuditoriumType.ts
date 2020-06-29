import { AuditoriumEnum } from './../json/auditoriumTypes';

export interface IAuditoriumType {
    AuditoriumTypeId : number;
    TypeName ? : AuditoriumEnum;
    HasComputer ? : boolean ;
    HasDrawingTables ? : boolean ;
    HasSpecificPrograms ? : boolean ;
    IsLawAuditorium ? : boolean;
    MaximumNumberOfStudents : number;
    IsMediaAuditorium ? : boolean ;
}
