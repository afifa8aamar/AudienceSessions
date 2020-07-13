export class DateClass {
    Day : DayEnum;
    Hour : number;
    Min : number;
    //initial = new DateClass(DayEnum.Monday, HourEnum.startTime , 0)


    constructor(Day , Hour , Min ) {
        this.Day = Day;
        this.Hour = Hour;
        this.Min = Min;
    }

    getDay() : DayEnum {
        return this.Day;
    }

    getHour() : number {
        return this.Hour
    }

    getMin() :number {
        return this.Min;
    }

    getNextDate(date : DateClass ) : DateClass | null{
        if(date.Day == DayEnum.Friday && date.Hour >= HourEnum.EndTime)
            return null;
        if(date.Hour >= HourEnum.EndTime - HourEnum.LectureDuration)
            return new DateClass(this.getNextDay(date.Day), HourEnum.startTime , 0);
        return new DateClass(date.Day, date.Hour + HourEnum.LectureDuration, 0);
    }

    getFinishDate(date : DateClass) {
        return new DateClass(date.Day, date.Hour + 2, date.Min)
    }

    getFirstDate() : DateClass {
        return new DateClass(DayEnum.Monday, HourEnum.startTime , 0)
    }

    getNextDay(day : number) : number{
        return day + 1;
    }


}

export enum HourEnum {
    startTime = 9,
    EndTime = 21,
    LectureDuration = 2
}


export enum DayEnum {
    // Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    // Saturday = 7
}