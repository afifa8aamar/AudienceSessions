import { DateClass } from './DateClass';

export interface ILecture {
    LectureId : number ;
    StartTime ?: DateClass;
    EndTime ?: DateClass;
    SubjectId : number;
    LecturerId : number;
    AuditoriumId : number;
}