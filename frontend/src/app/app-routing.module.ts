import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/views/home/home.component";
import {EmprestimosComponent} from "./components/views/emprestimos/emprestimos.component";
import {FerramentasComponent} from "./components/views/ferramentas/ferramentas.component";
import {ColaboradoresComponent} from "./components/views/colaboradores/colaboradores.component";
import {DashboardComponent} from "./components/views/dashboard/dashboard.component";
import {
  DashboardCreateComponent
} from "./components/views/dashboard/dashboard-crud/dashboard-create/dashboard-create.component";
import {
  ColaboradoresCreateComponent
} from "./components/views/colaboradores/colaboradores-crud/colaboradores-create/colaboradores-create.component";
import {
  EmprestimosCreateComponent
} from "./components/views/emprestimos/emprestimos-crud/emprestimos-create/emprestimos-create.component";

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboardCreate', component: DashboardCreateComponent},
  { path: 'colaboradores', component: ColaboradoresComponent},
  { path: 'colaboradoresCreate', component: ColaboradoresCreateComponent},
  { path: 'ferramentas', component: FerramentasComponent},
  { path: 'emprestimos', component: EmprestimosComponent},
  { path: 'emprestimosCreate', component: EmprestimosCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
