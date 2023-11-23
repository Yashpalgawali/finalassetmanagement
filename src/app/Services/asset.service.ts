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

  public saveAsset(Assets : Assets):Observable<Assets>
  {
    return this.http.post<Assets>(`${this.base_url}`,Assets  );
  }

  public getAllAssets():Observable<Assets[]>
  {
    return this.http.get<Assets[]>(`${this.base_url}`);
  }

  public getAssetsById(cid :any):Observable<Assets>
  {
    return this.http.get<Assets>(`${this.base_url}${cid}`);
  }

  public updateAssets(Assets : Assets)
  {
    return this.http.put<Assets[]>(`${this.base_url}`,Assets);
  }
}
