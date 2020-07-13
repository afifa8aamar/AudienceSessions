import { AuditoriumEnum } from './IAuditorim';

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
