import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Activity } from 'src/Models/Activity';
import { ActivityService } from 'src/app/Services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  
  constructor(private activityserv : ActivityService,private router : Router){ }
  activities : Activity[] = []
  dtOptions : DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>

  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers',
      responsive : true
    }

    this.activityserv.getAllActivities().subscribe({
      next:(data)=>{
        this.activities=data
        this.dtTrigger.next(null)
      }
    })  
  }
}
