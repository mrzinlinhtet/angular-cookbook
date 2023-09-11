import {RouterModule, Routes} from "@angular/router";
import {NaviComponent} from "../navi/navi.component";
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";

const BM_ROUTING: Routes = [
  {path: 'nav', component: NaviComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent}
]

export const BMRouting = RouterModule.forRoot(BM_ROUTING);
