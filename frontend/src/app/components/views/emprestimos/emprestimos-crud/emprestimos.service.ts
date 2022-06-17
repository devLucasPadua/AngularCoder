import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {EmprestimoCreate} from "./emprestimos.module";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  baseURL = "http://localhost:3001/emprestimo"

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  create(emprestimo: EmprestimoCreate): Observable<EmprestimoCreate>{
    return this.http.post<EmprestimoCreate>(this.baseURL, emprestimo)
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
