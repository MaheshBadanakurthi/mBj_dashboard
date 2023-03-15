import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BugattiComponent } from './bugatti/bugatti.component';
import { DashboardComponent } from './dashboard.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BenzComponent } from './benz/benz.component';
import { JaguarComponent } from './jaguar/jaguar.component';
import {CarouselModule} from 'primeng/carousel';
import {GMapModule} from 'primeng/gmap';
import { GoogleMapsModule } from '@angular/google-maps'

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
@NgModule({
  declarations: [
    DashboardComponent,
    ProductDashboardComponent,
    BugattiComponent,
    BenzComponent,
    JaguarComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OverlayPanelModule,
    ButtonModule,
    SidebarModule,
    AvatarModule,
    FormsModule,
    MessagesModule,
    CarouselModule,
    GMapModule,
    GoogleMapsModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoiaGJoamhzIiwiYSI6ImNsNWo3ZGNhODBmODAzY3BqODhuejB3ZmoifQ.RqsEoPXFgDUq1mryoReotg',
    }),


  ],
  exports: [],
})
export class DashboardModule {}
