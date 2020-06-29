import { ILecturerType } from './ILecturerType';
import { ISubject } from './ISubject';

export interface ILecturer {
    Id : number ;
    PersonalId : string;
    FirstName : string;
    LastName : string;
    PhoneNumber ? :string;
    HomeNumber ? : string;
    Address ? : string;
    Email ? : string;
    Type : ILecturerType;
    Subjects : ISubject [];

}