import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// * Material Imports
import { MatSidenavModule } from'@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule} from "@angular/material/menu";
import { MatIconModule} from "@angular/material/icon";
import { MatDividerModule} from "@angular/material/divider";
import { MatListModule } from'@angular/material/list';

// * Components Imports
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { FooterComponent } from './components/template/footer/footer.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    // * Components Imports
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        // * Material Imports
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
