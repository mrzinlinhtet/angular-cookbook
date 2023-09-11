import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NaviComponent } from './navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : 'navi',
        component : NaviComponent
      },
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'about',
        component : AboutComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
