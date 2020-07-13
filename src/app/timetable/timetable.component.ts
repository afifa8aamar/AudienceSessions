import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData } from '../json/scheduleData';

import { auditoriums as AuditoriumsData, auditoriums} from '../json/auditoriums';
import { subjects as SubjectsData} from '../json/subjects';
import { lecturers as LecturersData } from '../json/lecturers';
import { ILecturer } from '../models/ILecturer';
import { LecturerEnum } from '../models/ILecturerType';
import { ILecture } from '../models/ILecture';
import { ISubject } from '../models/ISubject';
import { IAuditorium } from '../models/IAuditorim';
import { DateClass, DayEnum, HourEnum } from '../models/DateClass';
import { dateFieldName } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})

export class TimetableComponent implements OnInit {

  currentYear = new Date().getFullYear();
  selectedDate: Date = new Date(this.currentYear, new Date().getMonth(), 30);
  workDayStart = new Date('Jun 30 2020 09:00:00 AM GMT+0400')
  workDayEnd = new Date('Jun 30 2020 09:00:00 PM GMT+0400')
  events = sampleData;
  auditoriums = AuditoriumsData;
  subjects = SubjectsData;
  lecturers = LecturersData;
  minSessions = AuditoriumsData.length * 4;
  regularSessions = AuditoriumsData.length * 5;
  maxSessions = AuditoriumsData.length * 10;
  audienceSessions : ILecture[] = [];

  unregistered : ILecture [] = [];

  totalSubjects = 0;

  constructor() {}

  ngOnInit() {
    this.subjects = this.SortSubjectsFromSpecialToNormal();
    this.auditoriums = this.SortAuditoriumsFromSpecialToNormal();
    this.lecturers = this.SortLecturersFromSpecialToNormal();

    
    // console.log(this.getMostSpecialSubjects(this.subjects));
    

    // this.events.push( <SchedulerEvent> {
    //   id: 150,
    //   start: this.parseAdjust('Tue Jun 30 2020 00:00:00 GMT+0400'),
    //   startTimezone: '',
    //   end: this.parseAdjust('Tue Jun 30 2020 03:30:00 GMT+0400'),
    //   endTimezone: '',
    //   title: '222222222222222222222222222222',
    //   description: 'dataItem.Description',
    //   recurrenceRule: '',
    //   recurrenceId: null,
    //   recurrenceExceptions : null,
    //   roomId: 1,
    //   ownerID: 2
    // })
    this.events.push({
      id: 150,
      start: new Date("2020/6/30 08:00 AM GMT+0400"),
      end: new Date("2020/6/30 09:00 AM GMT+0400"),
      title: "Interview",
    })

    // console.log(this.events)
    this.algorithm();
    this.Unregistered()
    
  }

  parseAdjust(eventDate: string): Date {
    const date = new Date(eventDate);
    return date;
  };

  getInvitedLecturers() : ILecturer[] {
    return this.lecturers.filter(l => l.LecturerType == LecturerEnum.Invited)
  }

  getPermanentLecturers(): ILecturer[] {
    return this.lecturers.filter(l => l.LecturerType == LecturerEnum.Permanent)
  }

  algorithm() {
    for (let subject of this.subjects) {
      for (let auditorium of this.auditoriums) {
        for (let lecturer of this.lecturers) {
          for (let aud of this.auditoriums) 
          if(this.SubjectMatchesAuditorium(subject, auditorium) 
            && this.SubjectMachesLecturer(subject, lecturer)) {
              if(!this.isLectureRegistered(subject)) {

                let startTime = this.getLecturerFreeTime(lecturer, this.getAuditoriumFreeTime(auditorium))
                let endTime = this.getLectureEndTime(this.getLecturerFreeTime(lecturer, this.getAuditoriumFreeTime(auditorium)))
                this.audienceSessions.push({
                  LectureId : this.audienceSessions.length+1,
                  StartTime : startTime,
                  EndTime : endTime,
                  SubjectId : subject.Id,
                  LecturerId : lecturer.Id,
                  AuditoriumId : auditorium.AuditoriumId,
                })
              }
            }
        }
      }
    }
  }

  Unregistered() {
    // for (let subject of this.subjects) {
    //   for (let auditorium of this.auditoriums) {
    //     for (let lecturer of this.lecturers) {
    //       if(this.SubjectMatchesAuditorium(subject, auditorium) 
    //         && this.SubjectMachesLecturer(subject, lecturer) 
    //         && !this.isLectureRegistered(subject)) {
    //             // let startTime = this.getLecturerFreeTime(lecturer, this.getAuditriumFreeTime(auditorium))
    //             // let endTime = this.getLectureEndTime(this.getLecturerFreeTime(lecturer, this.getAuditriumFreeTime(auditorium)))
    //           this.unregistered.push({
    //             LectureId : this.audienceSessions.length+1,
    //             StartTime : new DateClass(0,0,0),
    //             EndTime : new DateClass(0,0,0),
    //             SubjectId : subject.Id,
    //             LecturerId : lecturer.Id,
    //             AuditoriumId : auditorium.AuditoriumId,
    //           })
    //         }
    //     }
    //   }
    // }
  }


  isLectureRegistered(subject : ISubject) : boolean {
    let lectures = this.audienceSessions.filter(s => s.SubjectId == subject.Id)
    return  lectures.length >= subject.Count;
  }

  SubjectMatchesAuditorium(subject: ISubject, auditorium: IAuditorium) : boolean {
    let type = subject.Subject;
    let isFound = auditorium.Subjects.find(s => s.toString() == type.toString())
    return isFound > -1;
  }

  SubjectMachesLecturer(subject: ISubject, lecturer: ILecturer) : boolean {
    let type = subject.Subject;
    let isFound = lecturer.Subjects.find(s => s.toString() == type.toString())
    return isFound > -1;
  }

  getAuditriumFreeTime(auditorium: IAuditorium) : DateClass {
    if(this.audienceSessions.find(obj => auditorium.AuditoriumId == obj.AuditoriumId)) {
      let auds = this.audienceSessions.filter(obj => auditorium.AuditoriumId == obj.AuditoriumId);
      let aud = auds[auds.length-1];
      let date = new DateClass(aud.StartTime.Day, aud.StartTime.Hour, aud.StartTime.Min);
      date = date.getNextDate(date); 
      return date;
    } 
    let date = new DateClass(DayEnum.Monday, HourEnum.startTime, 0);
    return date.getFirstDate();
  }

  getLecturerFreeTime(lecturer: ILecturer, dateInit ? : DateClass) {

    if(!dateInit)
      return (new DateClass(0,0,0)).getFirstDate()
      if(!this.audienceSessions.find(obj => obj.LecturerId == lecturer.Id && obj.StartTime.Day == dateInit.Day && obj.StartTime.Hour == dateInit.Hour)) {
        return dateInit;
      }
    return this.getLecturerFreeTime(lecturer, dateInit.getNextDate(dateInit))
  }


  getAuditoriumAndLecturerFreeTime(lecturer: ILecturer, auditorium : IAuditorium, dateLec ? : DateClass, DateAud ? : DateClass) {
    let lec : DateClass = this.getLecturerFreeTime(lecturer);
    let aud : DateClass= this.getAuditoriumFreeTime(auditorium);

    if(lec.Day == aud.Day && lec.Hour == aud.Hour)
      return new DateClass(lec.Day , lec.Hour, lec.Min)
    
    if(lec.Day > aud.Day || lec.Hour > aud.Hour)
      this.getAuditoriumAndLecturerFreeTime(lecturer, auditorium, lec, this.getAuditoriumFreeTime(auditorium, aud.getNextDate(aud)))

    if(lec.Day < aud.Day || lec.Hour < aud.Hour)
      this.getAuditoriumAndLecturerFreeTime(lecturer, auditorium, this.getLecturerFreeTime(lecturer, lec.getNextDate(lec)), aud)

  }

  getAuditoriumFreeTime(auditorium: IAuditorium, dateInit ? : DateClass) {
    if(!dateInit)
      return (new DateClass(0,0,0)).getFirstDate()
    if(!this.audienceSessions.find(obj => obj.AuditoriumId == auditorium.AuditoriumId && obj.StartTime.Day == dateInit.Day && obj.StartTime.Hour == dateInit.Hour)) {
      return dateInit;
    }
    return this.getAuditoriumFreeTime(auditorium, dateInit.getNextDate(dateInit))
  }



  getLectureEndTime(date : DateClass) {
    return new DateClass(date.Day, date.Hour + HourEnum.LectureDuration , 0)
  }

  getSessionDay(session : ILecture)  {
    return this.getDayNameFromEnum(session.StartTime.Day);
  }

  getStartTime(session : ILecture)  {
    return `${session.StartTime.Hour.toString()}:${session.StartTime.Min.toString()}`;
  }

  getEndTime(session : ILecture)  {
    return `${session.EndTime.Hour.toString()}:${session.EndTime.Min.toString()}`
  }

  getLectureName(session : ILecture) : string {
    return this.subjects.find(s => s.Id == session.SubjectId).Name;
  }

  getAuditoryName(session : ILecture) {
    return `Aud: ${session.AuditoriumId}`
  }

  getLecturerName(session : ILecture) {
    let lecturer =this.lecturers.find(le => le.Id == session.LecturerId)
    return `${lecturer.FirstName} ${lecturer.LastName}`
  }
 
  getSessionsForAuditorium(aud : IAuditorium) : ILecture [] {
    if(aud)
      return this.audienceSessions.filter(obj => obj.AuditoriumId == aud.AuditoriumId)
  }

  getSessionsForLecturer(lect : ILecturer) : ILecture [] {
    if(lect)
      return this.audienceSessions.filter(obj => obj.LecturerId == lect.Id)
  }

  getInHowManyAuditoriumsCanBeTougthTheSubject(subject  : ISubject) : number {
    let count = 0;
    this.auditoriums.map(aud => {
      if(aud.Subjects.find(sub => sub == subject.Subject))
        count++;
    })
    return count;
  }

  getMostSpecialSubjects(subjects: ISubject[]) : ISubject{
    let min = this.getInHowManyAuditoriumsCanBeTougthTheSubject(subjects[0]);
    let minSub = subjects[0];

    this.subjects.map(sub => {
      let temp = this.getInHowManyAuditoriumsCanBeTougthTheSubject(sub)
      if( temp < min) {
        min = temp
        minSub = sub;
      }
    })
    return minSub;
  }

  SortSubjectsFromSpecialToNormal() : ISubject[] {

    let tempSubjects: ISubject[] = SubjectsData;
    let finalSubjects : ISubject[] = [];
    while(tempSubjects.length > 0) {
      let temp = this.getMostSpecialSubjects(tempSubjects)
      finalSubjects.push(temp)
      let index = tempSubjects.indexOf(temp)
      if (index > -1) {
        tempSubjects.splice(index, 1);
      }
    }
    return finalSubjects;
  }

  getMostSpecialAuditorium(auditoriums : IAuditorium[]) : IAuditorium {
    let min = auditoriums[0].Subjects.length;
    let minAud = auditoriums[0];

    auditoriums.map(aud => {
      let temp = aud.Subjects.length;
      if( temp < min) {
        min = temp
        minAud = aud;
      }
    })
    return minAud;
  }


  SortAuditoriumsFromSpecialToNormal() : IAuditorium[] {
    let tempAuditoriums : IAuditorium [] = AuditoriumsData;
    let finalAuditoriums : IAuditorium [] = [];
    
    while(tempAuditoriums.length > 0) {
      let temp = this.getMostSpecialAuditorium(tempAuditoriums);
      finalAuditoriums.push(temp);

      let index = tempAuditoriums.indexOf(temp)
      if (index > -1) {
        tempAuditoriums.splice(index, 1);
      }
    }
    return finalAuditoriums;

  }

  getMostSpecialLecturer(tempLecturers : ILecturer []) {

    let min = tempLecturers[0].Subjects.length;
    let minLect = tempLecturers[0];

    tempLecturers.map(Lect => {
      let temp = Lect.Subjects.length;
      if( temp < min) {
        min = temp
        minLect = Lect;
      }
    })
    return minLect;
  }


  SortLecturersFromSpecialToNormal() : ILecturer[] {

    // let permanentLecturers = tempLecturers.filter(l => l.LecturerType == LecturerEnum.Permanent)
    // let minPermanent = permanentLecturers[0].Subjects.length;
    // let minLectPerm = permanentLecturers[0];

    // permanentLecturers.map(Lect => {
    //   let temp = Lect.Subjects.length;
    //   if( temp < minPermanent) {
    //     min = temp
    //     minLectPerm = Lect;
    //   }
    // })


    let tempLecturers : ILecturer [] = LecturersData;
    let finalLecturers : ILecturer [] = [];
    
    while(tempLecturers.length > 0) {
      let temp = this.getMostSpecialLecturer(tempLecturers);
      finalLecturers.push(temp);

      let index = tempLecturers.indexOf(temp)
      if (index > -1) {
        tempLecturers.splice(index, 1);
      }
    }
    return finalLecturers;

  }


  getBestMatchAuditoriumForSubject(subject: ISubject) : IAuditorium {

    return 
  }

  getDayNameFromEnum(day : number ) {
    switch (day) {
      case 1:
        return 'Sunday'
      case 2:
        return 'Monday'
      case 3:
        return 'Tuesday'
      case 4:
        return 'Wednesday'
      case 5:
        return 'Thursday'
      case 6:
        return 'Friday'
      default:
        return 'Friday'
    }
  }

}
