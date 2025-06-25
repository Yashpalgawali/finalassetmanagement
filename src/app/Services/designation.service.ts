import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, of } from 'rxjs';
import { GlobalComponents } from '../GlobalComponents';
import { Designation } from 'src/Models/Designation';
import { ResponseDto } from 'src/Models/ResponseDto';
import { ErrorResponseDto } from 'src/Models/ErrorResponseDto';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  app_url = GlobalComponents.base_url;
  base_url = this.app_url+"designation/"
  constructor(private http : HttpClient) { }

  public saveDesignation(desig : Designation):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.post<ResponseDto>(`${this.base_url}`,desig).pipe(
     catchError((error: HttpErrorResponse) => {
      const errorResponse: ErrorResponseDto = {
        apiPath: error.error.apiPath,
        errorCode: error.status,
        errorMessage: error.error.errorMessage || error.message,
        errorTime: error.error.errorTime || new Date()
      };
      return of(errorResponse);  // convert error to observable
    })
   );
  }

  public getAllDesignations():Observable<Designation[]>
  {
    return this.http.get<Designation[]>(`${this.base_url}`);
  }

  public getDesignationById(did : any):Observable<Designation>
  {
    return this.http.get<Designation>(`${this.base_url}${did}`);
  }
  public updateDesignation(desig : Designation):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.put<ResponseDto>(`${this.base_url}`,desig).pipe(
     catchError((error: HttpErrorResponse) => {
      const errorResponse: ErrorResponseDto = {
        apiPath: error.error.apiPath,
        errorCode: error.status,
        errorMessage: error.error.errorMessage || error.message,
        errorTime: error.error.errorTime || new Date()
      };
      return of(errorResponse);  // convert error to observable
    })
   );
  }
}
