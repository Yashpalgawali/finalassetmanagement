import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class AssignedAssetService {

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"employee/";
  
  constructor(private http : HttpClient) { }

  getAssignedAssetsByEmpId(empid: number):Observable<AssignedAssets[]>
  {
    return this.http.get<AssignedAssets[]>(`${this.base_url}retrieveassetsbyempid/${empid}`)
  }
  
  exportAssignedAssetsToExcel()
  {
    return this.http.get<any>(`${this.base_url}exportassignedassets/excel`, { responseType : 'arraybuffer' as 'json'});
  }

  exportAssignedAssetsHistoryToExcel(empid: number)
  {
    return this.http.get<any>(`${this.base_url}exportassignshistory/excel/${empid}`, { responseType : 'arraybuffer' as 'json'});
  }
}
