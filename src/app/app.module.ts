import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { HeroesComponent } from './content/heroes/heroes.component';
import { HomeComponent } from './content/home/home.component';
import { DetailComponent } from './content/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './content/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    HeroesComponent,
    HomeComponent,
    DetailComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
