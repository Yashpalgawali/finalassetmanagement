import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AssetType } from 'src/Models/AssetType';
import { catchError, Observable, ObservableNotification, of } from 'rxjs';
import { ResponseDto } from 'src/Models/ResponseDto';
import { ErrorResponseDto } from 'src/Models/ErrorResponseDto';
import { error } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {

  app_url = GlobalComponents.base_url;
  base_url= this.app_url+"assettype/";
  
  constructor(private http : HttpClient) { }

  public saveAssetType(assettype : AssetType):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.post<ResponseDto>(`${this.base_url}`,assettype).pipe(
      catchError((error : HttpErrorResponse) => {
        const errorResponse : ErrorResponseDto = {
              apiPath: error.error.apiPath,
              errorCode: error.status,
              errorMessage: error.error.errorMessage || error.message,
              errorTime: error.error.errorTime || new Date()
        };
        return of(errorResponse)
      })
    )
  }

  public getAllAssetTypes():Observable<AssetType[]>
  {
    return this.http.get<AssetType[]>(`${this.base_url}`);
  }

  public getAssetTypeById(aid : any):Observable<AssetType | ErrorResponseDto>
  {
    return  this.http.get<AssetType>(`${this.base_url}${aid}`).pipe(
      catchError((error : HttpErrorResponse) => {
        const errorResponse : ErrorResponseDto = {
            apiPath : error.error.apiPath,
            errorCode: error.status,
            errorMessage: error.error.errorMessage || error.message,
            errorTime: error.error.errorTime || new Date()
        };
        return of(errorResponse)
      })
    );
  }
  public updateAssetType(assettype : AssetType):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.put<ResponseDto>(`${this.base_url}`,assettype).pipe(
      catchError((error : HttpErrorResponse) => {
        const errorResponse : ErrorResponseDto = {
            apiPath : error.error.apiPath,
            errorCode: error.status,
            errorMessage: error.error.errorMessage || error.message,
            errorTime: error.error.errorTime || new Date()
        };
        return of(errorResponse)
      })
    );
  }
}
