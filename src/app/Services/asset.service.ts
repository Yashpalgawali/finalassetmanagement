import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Assets } from 'src/Models/Assets';
import { catchError, Observable, of } from 'rxjs';
import { ResponseDto } from 'src/Models/ResponseDto';
import { ErrorResponseDto } from 'src/Models/ErrorResponseDto';

@Injectable({
  providedIn: 'root'
})
export class AssetService {


  app_url = GlobalComponents.base_url;
  base_url= this.app_url+"asset/";
  
  constructor(private http : HttpClient) { }

  public saveAsset(Assets : Assets):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.post<ResponseDto>(`${this.base_url}`,Assets).pipe(
      catchError((error : HttpErrorResponse) => {
        const errorResponse = {
          apiPath: error.error.apiPath,
          errorCode: error.status,
          errorMessage: error.error.errorMessage || error.message,
          errorTime: error.error.errorTime || new Date()
        }
        return of(errorResponse)
      })
    );
  }

  public getAllAssets():Observable<Assets[]>
  {
    return this.http.get<Assets[]>(`${this.base_url}`);
  }

  public getAssetsById(cid :any):Observable<Assets | ErrorResponseDto>
  {
    return this.http.get<Assets>(`${this.base_url}${cid}`).pipe(
      catchError((error : HttpErrorResponse) => {
         const errorResponse = {
          apiPath: error.error.apiPath,
          errorCode: error.status,
          errorMessage: error.error.errorMessage || error.message,
          errorTime: error.error.errorTime || new Date()
        }
        return of(errorResponse)
      })
    );
  }

  public updateAssets(Assets : Assets):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.put<ResponseDto>(`${this.base_url}`,Assets).pipe(
      catchError((error : HttpErrorResponse) => {
        const errorResponse = {
          apiPath: error.error.apiPath,
          errorCode: error.status,
          errorMessage: error.error.errorMessage || error.message,
          errorTime: error.error.errorTime || new Date()
        }
        return of(errorResponse)
      })
    );
  }
}
