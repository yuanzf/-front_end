/**
 * Created by yzf on 2017/4/26.
 */
import { Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {BhIndexComponent} from "./branch/bh-index/bh-index.component";
import {BhTrendComponent} from "./branch/bh-trend/bh-trend.component";

import {SmIndexComponent} from "./subitem/sm-index/sm-index.component";
import {SmTrendComponent} from "./subitem/sm-trend/sm-trend.component";



export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: ConsoleComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'console/dashboard' },
      { path: 'console/dashboard', component: DashboardComponent },
      { path: 'console/branch/bh-index', component: BhIndexComponent },
      { path: 'console/branch/bh-trend', component: BhTrendComponent },

      { path: 'console/subitem/sm-index', component: SmIndexComponent },
      { path: 'console/subitem/sm-trend', component: SmTrendComponent },

    ]
  }
];


