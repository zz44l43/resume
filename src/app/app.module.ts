import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PortraitCardComponent } from './side/portrait-card.component';
import { MainNavComponent } from './side/main-nav/main-nav.component';
import { SharedComponentsModule } from './share-components/shared-components.module';
import { MainNavsModule } from './side/main-nav/main-nav.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortraitCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MainModule,
    MainNavsModule,
    SharedComponentsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
