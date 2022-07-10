import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Chronique } from './chronique.model';

@Injectable({
  providedIn: 'root'
})
export class TempEauService {

  private REST_API_SERVER = "https://hubeau.eaufrance.fr/api/v1/temperature/chronique";

  constructor(private httpClient: HttpClient) { }


  public getResult(codeDep: string, size: number): Observable<Array<Chronique>> {
 
    const params = new HttpParams()
      .set('code_station', codeDep)
      .set('size', size);
    return this.httpClient.get(this.REST_API_SERVER, {params : params}).pipe(
      map((value: any) => {
        return value!.data;
    }),
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
