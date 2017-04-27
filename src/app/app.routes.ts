import { Routes, RouterModule } from '@angular/router';
import { ConsoleComponent } from "./console/console.component";


export const ROUTER_CONFIG: Routes = [
  { path: '', redirectTo:'/console',pathMatch:'full' }
];

export const ROUTING = RouterModule.forRoot(ROUTER_CONFIG);
