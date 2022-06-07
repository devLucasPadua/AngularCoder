import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/views/home/home.component";
import {EmprestimosComponent} from "./components/views/emprestimos/emprestimos.component";
import {FerramentasComponent} from "./components/views/ferramentas/ferramentas.component";
import {ColaboradoresComponent} from "./components/views/colaboradores/colaboradores.component";
import {DashboardCrudComponent} from "./components/views/dashboard/dashboard-crud/dashboard-crud.component";

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardCrudComponent},
  { path: 'colaboradores', component: ColaboradoresComponent},
  { path: 'ferramentas', component: FerramentasComponent},
  { path: 'emprestimos', component: EmprestimosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
