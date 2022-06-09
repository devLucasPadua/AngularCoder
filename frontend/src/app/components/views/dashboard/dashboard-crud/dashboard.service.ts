import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dashboard} from "./dashboard.module";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    baseURL = "http://localhost:3001/products"

    constructor(private snackBar: MatSnackBar,
                private http: HttpClient) {
    }

    showOnConsole(msg: string): void {
        console.log(msg)
    }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X',
            {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top"
            })
    }

    create(dashboard: Dashboard): Observable<Dashboard> {
        return this.http.post<Dashboard>(this.baseURL, dashboard)
    }
}
