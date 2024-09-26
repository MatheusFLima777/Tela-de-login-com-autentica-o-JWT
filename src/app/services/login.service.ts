import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/auth"

  constructor(private hhtpClient: HttpClient) { }
  login(email: String, password: string){
  
    return this.hhtpClient.post<LoginResponse>(this.apiUrl + "/login",{name, password}).pipe(
    tap((value) =>{
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )}
    signup(name: String, email: String, password: String){
  
      return this.hhtpClient.post<LoginResponse>(this.apiUrl + "/register",{name, email, password}).pipe(
      tap((value) =>{
          sessionStorage.setItem("auth-token", value.token)
          sessionStorage.setItem("username", value.name)
        })
      )
    }
  }
