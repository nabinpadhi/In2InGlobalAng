import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class User {
    FirstName!: string;
    LastName!: string;
    Company!: string;
    Email!: string;
    Role!: string;
    Password!: string;
    ActivityAccess!: string;
    Status!: string;
    PhoneNo!: string;
    ProjectID!: string;
}
@Injectable({ providedIn: 'root'})
export class UserService {

  private requestUrl = 'https://localhost:7030/api/UserProfile?email=';

  constructor(
    private http: HttpClient
  ) { }

  getUser(email:string): Observable<User> {
    this.requestUrl = this.requestUrl +email;
    return this.http.get<User>(this.requestUrl);
  }
 
  viewUser(email:string) {
    this.requestUrl = this.requestUrl +email;
    return this.http.get(this.requestUrl).toPromise();
  }
}