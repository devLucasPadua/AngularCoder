import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {FerramentaCreate} from "./ferramentas.module";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FerramentasService {

  baseURL = "http://localhost:3001/ferramenta"

  constructor(private snackBar: MatSnackBar,
              private  http: HttpClient) { }


  create(ferramenta: FerramentaCreate): Observable<FerramentaCreate>{
    return this.http.post<FerramentaCreate>(this.baseURL, ferramenta)
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
