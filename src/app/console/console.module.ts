/**
 * Created by yzf on 2017/4/26.
 */

import { NgModule } from "@angular/core";
import { SharedModule } from "../share/share.module";
import { RouterModule } from "@angular/router";
import { ROUTER_CONFIG } from "./console.routes";
import { ConsoleComponent } from "./console.component";
import { BhIndexComponent } from "./branch/bh-index/bh-index.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SmIndexComponent } from "./subitem/sm-index/sm-index.component";
import { BhTrendComponent } from "./branch/bh-trend/bh-trend.component";
import { SmTrendComponent } from "./subitem/sm-trend/sm-trend.component";
@NgModule({
  imports:[
    SharedModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations:[
    ConsoleComponent,
    DashboardComponent,
    BhIndexComponent,
    BhTrendComponent,
    SmIndexComponent,
    SmTrendComponent,
  ]
})

export class ConsoleModule{}
