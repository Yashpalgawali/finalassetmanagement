import { Injectable } from '@angular/core';
import { GlobalComponent } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { AssetType } from 'src/Models/AssetType';
import { Observable, ObservableNotification } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {

  app_url = GlobalComponent.base_url;
  base_url= this.app_url+"assettype/";
  
  constructor(private http : HttpClient) { }

  public saveAssetType(assettype : AssetType):Observable<AssetType>
  {
    return this.http.post<AssetType>(`${this.base_url}`,assettype)
  }

  public getAllAssetTypes():Observable<AssetType[]>
  {
    return this.http.get<AssetType[]>(`${this.base_url}`);
  }

  public getAssetTypeById(aid : any):Observable<AssetType>
  {
    return  this.http.get<AssetType>(`${this.base_url}${aid}`)
  }
  public updateAssetType(assettype : AssetType):Observable<AssetType[]>
  {
    return this.http.put<AssetType[]>(`${this.base_url}`,assettype);
  }
}
