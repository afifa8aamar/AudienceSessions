import { SubjectTypeEnum } from './ISubjectType';
import { SubjectEnum } from '../json/subjects';

export interface ISubject {
    Id : number;
    Subject : SubjectEnum;
    Name : string;
    SubjectType : SubjectTypeEnum;
    Count : number;
}