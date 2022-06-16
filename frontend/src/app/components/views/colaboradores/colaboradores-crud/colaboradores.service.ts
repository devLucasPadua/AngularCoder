import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Colaborador} from "./colaboraores.module";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  baseURL = "http://localhost:3001/colaborador"

  constructor(private snackBar: MatSnackBar,
      private http: HttpClient) { }

  create(colaborador: Colaborador): Observable<Colaborador>{
    return this.http.post<Colaborador>(this.baseURL, colaborador)
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',
        {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top"
        })
  }
}
