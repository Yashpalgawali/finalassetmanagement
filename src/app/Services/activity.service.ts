import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Activity } from 'src/Models/Activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  app_url = GlobalComponents.base_url;
  base_url= this.app_url+"activity/";
  
  constructor(private http : HttpClient) { }

  public getAllActivities():Observable<Activity[]>
  {
    return this.http.get<Activity[]>(`${this.base_url}`)
  }
}
