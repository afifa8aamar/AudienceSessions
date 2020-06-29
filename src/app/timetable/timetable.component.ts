import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './../data';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  public selectedDate: Date = displayDate;
  public events = sampleData;

  constructor(){}

  ngOnInit() {

    const currentYear = new Date().getFullYear();
    const parseAdjust = (eventDate: string): Date => {
        const date = new Date(eventDate);
        date.setFullYear(currentYear);
        return date;
    };

    this.events.push( <SchedulerEvent> {
      id: 150,
      start: parseAdjust('2020-06-24T19:00:00.000Z'),
      startTimezone: 'Europe/Georgia',
      end: parseAdjust('2020-06-24T21:00:00.000Z'),
      endTimezone: 'Europe/Georgia',
      title: '222222222222222222222222222222',
      description: 'dataItem.Description',
      recurrenceRule: '',
      recurrenceId: null,
      recurrenceExceptions : null,
      roomId: 1,
      ownerID: 2

    })

    console.log(this.events)

  }
}
