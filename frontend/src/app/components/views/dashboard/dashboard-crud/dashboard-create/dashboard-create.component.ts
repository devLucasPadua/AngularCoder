import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {Router} from "@angular/router";
import {Dashboard} from "../dashboard.module";

@Component({
  selector: 'app-dashboard-create',
  templateUrl: './dashboard-create.component.html',
  styleUrls: ['./dashboard-create.component.scss']
})
export class DashboardCreateComponent implements OnInit {

  dashboard: Dashboard = {
    name: '',
    price: null
  }

  constructor(private dashboardService: DashboardService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createDashboard(): void{
    this.dashboardService.create(this.dashboard).subscribe(() => {
        this.dashboardService.showMessage('Dashboard cadastrado com sucesso!')})
    this.router.navigate(['/dashboard']);
  }

  cancelDashboard(): void{
    this.router.navigate(['/dashboard']);
  }

}
