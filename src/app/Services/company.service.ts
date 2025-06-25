import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Company } from 'src/Models/Company';
import { GlobalComponents } from '../GlobalComponents';
import { ResponseDto } from 'src/Models/ResponseDto';
import { ErrorResponseDto } from 'src/Models/ErrorResponseDto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  app_url = GlobalComponents.base_url;
  base_url= this.app_url+"company/";
  
  constructor(private http : HttpClient) { }

  public saveCompany(company : Company):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.post<ResponseDto>(`${this.base_url}`,company  ).pipe(
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

  public getAllCompanies():Observable<Company[]>
  {
    return this.http.get<Company[]>(`${this.base_url}`);
  }

  public getCompanyById(cid :any):Observable<Company>
  {
    return this.http.get<Company>(`${this.base_url}${cid}`);
  }

  public updateCompany(company : Company):Observable<ResponseDto | ErrorResponseDto>
  {
    return this.http.put<ResponseDto>(`${this.base_url}`,company  ).pipe(
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
