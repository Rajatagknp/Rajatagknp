import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CovidCasesModule } from '../covid-cases/covid-cases.module';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './app.component';

// components

// routes
export const ROUTES: Routes = [
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    CovidCasesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}