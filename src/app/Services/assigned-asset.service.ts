import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignedAssetService {

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"asset/";
  
  constructor(private http : HttpClient) { }

  
}
