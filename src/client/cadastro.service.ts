import { Posts } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,EMPTY } from 'rxjs';
import {catchError, map}from 'rxjs/operators'
import {MatSnackBar} from '@angular/material/snack-bar'



@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3000/posts"

constructor( private httpClient:HttpClient, private snackBar: MatSnackBar) { }

showMessage(msg:string, isError: Boolean = false):void{
  this.snackBar.open(msg,'x',{
    duration:3000,
    horizontalPosition:"right",
    verticalPosition:"top",
    panelClass:isError?['msg-error']:['msg-sucess']
  })
}

  create(posts:Posts): Observable<Posts>{
    return this.httpClient.post<Posts>(this.baseUrl, posts).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }



  read(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Posts>{
    const url= `${this.baseUrl}/${id}`
   return this.httpClient.get<Posts>(url).pipe(
    map(obj => obj),
    catchError(e => this.errorHandler(e))
  )
  }

  update(posts: Posts): Observable<Posts>{
    const url= `${this.baseUrl}/${posts.id}`
    return this.httpClient.put<Posts>(url,posts).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id:number): Observable<Posts>{
    const url= `${this.baseUrl}/${id}`
    return this.httpClient.delete<Posts>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e:any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}

