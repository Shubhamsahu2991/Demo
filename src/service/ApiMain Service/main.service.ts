import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private instructionListurl ='http://localhost:51188/api/Getinstruction'
  private serivceList1url ='http://localhost:51188/api/GetSERVICE1'
  private insertstudenturl ='http://localhost:51188/api/insertstudent'
  private Studycenterurl ='http://localhost:51188/api/GetStudycenter'
  private StudycenterZilaurl ='http://localhost:51188/api/GetStudycenterZila'
  private streamurl ='http://localhost:51188/api/GetStream'
  private g2gloginurl ='http://localhost:51188/api/G2Glogin'
  private g2glogouturl ='http://localhost:51188/api/logout'
  private token: string | undefined;


  constructor(private http:HttpClient) { }

  insertStudent(studentData: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Create the headers object
    // You can also add other headers if needed (e.g., authorization token)
  
    return this.http.post(this.insertstudenturl, studentData, { headers }).pipe(
      catchError(this.handleError)
    );
  }


  g2glogin(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.post(this.g2gloginurl, { username, password }, { headers });
  }
  //for login and logout logs

  g2glogout(username: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.post(this.g2glogouturl, { username }, { headers }).pipe(
      catchError(this.handleError)
    );
  }





  




getinstructionList(): Observable<any[]> {
  return this.http.get<any[]>(this.instructionListurl).pipe(
    catchError(this.handleError)
  );
}

getserviceList1(): Observable<any[]> {
    return this.http.get<any[]>(this.serivceList1url).pipe(
      catchError(this.handleError)
    );
}

getStudyCenter(): Observable<any[]> {
  return this.http.get<any[]>(this.Studycenterurl).pipe(
    catchError(this.handleError)
  )
}

getStudyCenterZila(): Observable<any[]> {
  return this.http.get<any[]>(this.StudycenterZilaurl).pipe(
    catchError(this.handleError)
  )
}

getStream(): Observable<any[]> {
  return this.http.get<any[]>(this.streamurl).pipe(
    catchError(this.handleError)
  )
}


private handleError(error: HttpErrorResponse) {
  console.error('An error occurred:', error.message);
  return throwError('Something went wrong; please try again later.');
}


}
