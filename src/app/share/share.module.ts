/**
 * Created by yzf on 2017/4/26.
 */


import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { JsonpModule , HttpModule } from "@angular/http";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppSiderComponent } from "./app-slider/app-sider.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { ModalComponent } from "./modal/modal.component";
@NgModule({
  imports:[
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations:[
    AppHeaderComponent,
    AppSiderComponent,
    AppFooterComponent,
    ModalComponent,
  ],
  providers:[

  ],
  exports: [
    CommonModule,
    FormsModule,
    AppHeaderComponent,
    AppSiderComponent,
    AppFooterComponent,
    ModalComponent,

  ]
})
export class SharedModule{}
