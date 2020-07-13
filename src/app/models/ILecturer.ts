import { LecturerEnum } from './ILecturerType';
import { SubjectEnum } from '../json/subjects';

export interface ILecturer {
    Id : number ;
    PersonalId : string;
    FirstName : string;
    LastName : string;
    PhoneNumber ? :string;
    HomeNumber ? : string;
    Address ? : string;
    Email ? : string;
    LecturerType : LecturerEnum;
    FreeTime ? : Date[];
    Subjects : SubjectEnum [];
}