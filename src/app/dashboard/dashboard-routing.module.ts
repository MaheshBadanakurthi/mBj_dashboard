import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BugattiComponent } from './bugatti/bugatti.component';
import { JaguarComponent } from './jaguar/jaguar.component';
import { BenzComponent } from './benz/benz.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ProductDashboardComponent,
      },
      {
        path: 'bugatti',
        component: BugattiComponent,
      },

      {
        path: 'jaguar',
        component: JaguarComponent,
      },
      {
        path:'benz', component:BenzComponent
      },
      {
        path:"**", component: DashboardComponent
      }
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
