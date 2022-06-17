// * Core Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// * Material Imports
import { MatSidenavModule } from'@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule} from "@angular/material/menu";
import { MatIconModule} from "@angular/material/icon";
import { MatDividerModule} from "@angular/material/divider";
import { MatListModule } from'@angular/material/list';
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";

// * Components Imports
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ColaboradoresComponent } from './components/views/colaboradores/colaboradores.component';
import { FerramentasComponent } from './components/views/ferramentas/ferramentas.component';
import { EmprestimosComponent } from './components/views/emprestimos/emprestimos.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { DashboardCreateComponent } from './components/views/dashboard/dashboard-crud/dashboard-create/dashboard-create.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ColaboradoresCreateComponent } from './components/views/colaboradores/colaboradores-crud/colaboradores-create/colaboradores-create.component';
import { EmprestimosCreateComponent } from './components/views/emprestimos/emprestimos-crud/emprestimos-create/emprestimos-create.component';



@NgModule({
  declarations: [
    // * Components Imports
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    ColaboradoresComponent,
    FerramentasComponent,
    EmprestimosComponent,
    RedDirective,
    ForDirective,
    DashboardCreateComponent,
    ColaboradoresCreateComponent,
    EmprestimosCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,

        // * Material Imports
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
