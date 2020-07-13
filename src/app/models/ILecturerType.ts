export enum LecturerEnum {
    Permanent, 
    Invited, 
}

export interface ILecturerType {
    id : number ;
    type : LecturerEnum;
    FreeTime ? : Date;

}