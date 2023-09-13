import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NaviComponent } from './navi/navi.component';
import { BMRouting} from "./sysgen/BMRouting";
import { BmserviceService } from "./sysgen/bmservice.service";
import { TestoneComponent } from './testone/testone.component';
import { TesttwoComponent } from './testtwo/testtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NaviComponent,
    TestoneComponent,
    TesttwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [BmserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
