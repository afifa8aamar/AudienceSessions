import { IAuditorium } from '../models/IAuditorim';

export enum AuditoriumEnum {
    Regular, 
    Small, 
    Big60, 
    Big300, 
    Computer15, 
    Computer20, 
    Drawing, 
    MediaComputers, 
    MediaAuditorium, 
    LawAuditorium
}

export const AuditoriumTypes : IAuditorium [] = [
    {
        AuditoriumId : 1,
        Name : AuditoriumEnum.Regular , 
        AuditoriumTypeId : 1
    },
    {
        AuditoriumId : 2,
        Name : AuditoriumEnum.Small , 
        AuditoriumTypeId : 1
    },
    {
        AuditoriumId : 3,
        Name : AuditoriumEnum.Big60 , 
        AuditoriumTypeId : 1
    }, 
    {
        AuditoriumId : 4,
        Name :AuditoriumEnum.Big300 , 
        AuditoriumTypeId : 1
    },
    {
        AuditoriumId : 5,
        Name : AuditoriumEnum.Computer15 , 
        AuditoriumTypeId : 1
    }, 
    {
        AuditoriumId : 6,
        Name : AuditoriumEnum.Computer20 , 
        AuditoriumTypeId : 1
    }, 
    {
        AuditoriumId : 7,
        Name : AuditoriumEnum.Drawing , 
        AuditoriumTypeId : 1 
    }, 
    {
        AuditoriumId : 8,
        Name : AuditoriumEnum.MediaComputers , 
        AuditoriumTypeId : 1 
    }, 
    {
        AuditoriumId : 9,
        Name : AuditoriumEnum.MediaAuditorium , 
        AuditoriumTypeId : 1 
    }, 
    {
        AuditoriumId : 10,
        Name : AuditoriumEnum.LawAuditorium , 
        AuditoriumTypeId : 1
    }
]


