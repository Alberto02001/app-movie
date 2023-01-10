import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeContentComponent } from './components/home-content/home-content.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroHomeComponent,
    HomeContentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
