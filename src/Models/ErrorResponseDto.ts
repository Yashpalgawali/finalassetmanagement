export class ErrorResponseDto {
     apiPath !: string;
    errorCode !: number;
  errorMessage !: string;
  errorTime !: string | Date;
}