import { ILecturer } from './ILecturer';
import { ISubject } from './ISubject';

export interface ILecture {
    LectureId : number ;
    StartTime : Date;
    EndTime : Date;
    SubjectId : number;
    LecturerId : number;
    AuditoriumId : number;
}