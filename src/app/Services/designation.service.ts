import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { GlobalComponents } from '../GlobalComponents';
import { Designation } from 'src/Models/Designation';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  app_url = GlobalComponents.base_url;
  base_url = this.app_url+"designation/"
  constructor(private http : HttpClient) { }

  public saveDesignation(desig : Designation):Observable<Designation>
  {
    return this.http.post<Designation>(`${this.base_url}`,desig);
  }

  public getAllDesignations():Observable<Designation[]>
  {
    return this.http.get<Designation[]>(`${this.base_url}`);
  }

  public getDesignationById(did : any):Observable<Designation>
  {
    return this.http.get<Designation>(`${this.base_url}${did}`);
  }
  public updateDesignation(desig : Designation):Observable<Designation[]>
  {
    return this.http.put<Designation[]>(`${this.base_url}`,desig);
  }
}
