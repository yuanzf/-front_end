
/**
 * Created by yzf on 2017/4/26.
 */
declare var $:any;
import { Component ,  OnInit } from "@angular/core";
import {Location} from '@angular/common';
@Component({
  selector:'app-sidebar',
  templateUrl:'app-sider.html',
  styleUrls:['./app-slider.css'],
  providers:[]
})

export class AppSiderComponent implements OnInit{
  public oldPath:string;

  public menu;

  constructor(location:Location){
    this.oldPath=location.path();

    this.menu=[
        {
          name:'dashboard',
          icon:'fa-home',
          active:false,
          expand:false,
          children:[
            {name:'首页',path:'/console/dashboard',active:false}
          ]
        },
        {
          name:'支路用能',
          icon:'fa-bolt',
          active:false,
          expand:false,
          children:[
            {name:'支路概况',path:'/console/branch/bh-index',active:false},
            {name:'趋势分析',path:'/console/branch/bh-trend',active:false},
          ]

        },
        {
          name:'分项用能',
          icon:'fa-bolt',
          active:false,
          expand:false,
          children:[
            {name:'分项用能概况',path:'/console/subitem/sm-index',active:false},
            {name:'趋势分析',path:'/console/subitem/sm-trend',active:false}
          ]

        }
    ];
  }

  ngOnInit(){
    let find:boolean =false;

    this.menu.forEach((items)=>{
      items.children.forEach((names)=>{

        if (names.path==this.oldPath) {
          find=true;
          names.active=true;
        }

        if (find==true) {
          items.active=true;
          find=false;
        }

      });



    });
  }

  menuExpand($event,item){

    item.expand = !item.expand;

    $($event.currentTarget).next().slideToggle();

    return false;

  }

  menuActive($event,name){
    let find:boolean=false;
    this.menu.forEach((items)=>{
      items.active = false;
      items.children.forEach((names)=>{
        names.active=false;
        if(names.path == name.path){
          find = true;
          names.active = true;
        }
      });

      if(find == true){
        items.active = true;
        find = false;
      }

    });
  }
}
