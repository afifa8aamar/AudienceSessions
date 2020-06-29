import { ISubjectType } from './ISubjectType';

export interface ISubject {
    Id : number;
    Name : string;
    Type : ISubjectType;
}