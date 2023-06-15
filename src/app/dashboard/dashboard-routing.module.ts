import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { AuthGuard } from '@auth0/auth0-angular';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'dashboard2',
    component: Dashboard2Component,
  },
  {
    path: 'dashboard3',
    component: Dashboard3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
