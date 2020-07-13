import { AuditoriumEnum, IAuditorium } from '../models/IAuditorim';
import { IAuditoriumType } from '../models/IAuditoriumType';

export const auditoriumTypes : IAuditoriumType[] = [
    {
        AuditoriumTypeId : 1,
        TypeName : AuditoriumEnum.Regular,
        HasComputer : true ,
        HasDrawingTables : true ,
        HasSpecificPrograms : true ,
        IsLawAuditorium : true,
        MaximumNumberOfStudents : 30,
        IsMediaAuditorium : true 
    },
    {
        AuditoriumTypeId : 2,
        TypeName : AuditoriumEnum.Small,
        HasComputer : false ,
        HasDrawingTables : false ,
        HasSpecificPrograms : false ,
        IsLawAuditorium : false,
        MaximumNumberOfStudents : 15,
        IsMediaAuditorium : false 
    },
    {
        AuditoriumTypeId : 3,
        TypeName : AuditoriumEnum.Big60,
        HasComputer : false ,
        HasDrawingTables : false ,
        HasSpecificPrograms : false ,
        IsLawAuditorium : false,
        MaximumNumberOfStudents : 60,
        IsMediaAuditorium : false 
    },
    {
        AuditoriumTypeId : 4,
        TypeName : AuditoriumEnum.Big300,
        HasComputer : false ,
        HasDrawingTables : false ,
        HasSpecificPrograms : false ,
        IsLawAuditorium : false,
        MaximumNumberOfStudents : 300,
        IsMediaAuditorium : false 
    },
    {
        AuditoriumTypeId : 5,
        TypeName : AuditoriumEnum.Computer15,
        HasComputer : true ,
        HasDrawingTables : false ,
        HasSpecificPrograms : true ,
        IsLawAuditorium : false,
        MaximumNumberOfStudents : 15,
        IsMediaAuditorium : false 
    },
    {
        AuditoriumTypeId : 6,
        TypeName : AuditoriumEnum.Computer20,
        HasComputer : true ,
        HasDrawingTables : false ,
        HasSpecificPrograms : false ,
        IsLawAuditorium : false,
        MaximumNumberOfStudents : 20,
        IsMediaAuditorium : false 
    },
    {
        AuditoriumTypeId : 7,
        TypeName : AuditoriumEnum.Drawing,
        HasComputer : false ,
        HasDrawingTables : true ,
        HasSpecificPrograms : false ,
        IsLawAuditorium : false,
        MaximumNumberOfStudents : 30,
        IsMediaAuditorium : false 
    },
    {
        AuditoriumTypeId : 8,
        TypeName : AuditoriumEnum.MediaComputers,
        HasComputer : true ,
        HasDrawingTables : false ,
        HasSpecificPrograms : true ,
        IsLawAuditorium : false,
        MaximumNumberOfStudents : 20,
        IsMediaAuditorium : true 
    },
    {
        AuditoriumTypeId : 9,
        TypeName : AuditoriumEnum.MediaAuditorium,
        HasComputer : true ,
        HasDrawingTables : false ,
        HasSpecificPrograms : true ,
        IsLawAuditorium : false,
        MaximumNumberOfStudents : 20,
        IsMediaAuditorium : true 
    },
    {
        AuditoriumTypeId : 10,
        TypeName : AuditoriumEnum.LawAuditorium,
        HasComputer : false ,
        HasDrawingTables : false ,
        HasSpecificPrograms : false ,
        IsLawAuditorium : true,
        MaximumNumberOfStudents : 30,
        IsMediaAuditorium : false 
    },

]