import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { HeroesComponent } from './content/heroes/heroes.component';
import { HomeComponent } from './content/home/home.component';
import { ROUTING_PATH } from './core/const/routing-path.const';

const routes: Routes = [
  {
    path: ROUTING_PATH.HOME,
    component: HomeComponent
  },
  {
    path: ROUTING_PATH.DASHBOARD,
    component: DashboardComponent
  },
  {
    path: ROUTING_PATH.HEROES,
    component: HeroesComponent
  },
  {
    path: '**',
    redirectTo: ROUTING_PATH.HOME,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
