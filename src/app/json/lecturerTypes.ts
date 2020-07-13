import { ILecturerType, LecturerEnum } from '../models/ILecturerType';

export const LecturerTypes : ILecturerType [] = [
    {
        id : 1 ,
        type : LecturerEnum.Permanent,
    },
    {
        id : 2,
        type : LecturerEnum.Invited , 
    }
]