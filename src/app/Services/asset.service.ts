import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Assets } from 'src/Models/Assets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {


  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"asset/";
  
  constructor(private http : HttpClient) { }

  // public saveCompany(company : Company):Observable<Company>
  // {
  //   return this.http.post<Company>(`${this.base_url}`,company  );
  // }

  public getAllAssets():Observable<Assets[]>
  {
    return this.http.get<Assets[]>(`${this.base_url}`);
  }

  // public getCompanyById(cid :any):Observable<Company>
  // {
  //   return this.http.get<Company>(`${this.base_url}${cid}`);
  // }

  // public updateCompany(company : Company)
  // {
  //   return this.http.put<Company[]>(`${this.base_url}`,company);
  // }
}
