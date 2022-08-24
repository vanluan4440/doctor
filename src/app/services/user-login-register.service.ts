import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserLoginRegisterService {
  constructor(private http: HttpClient) {}

  register(formData:any) {
    return this.http.post<any>(`${environment.target}/users/register`,formData)
  }
}
