import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage{

  tab:string="classes"
   constructor(private router: Router) {
   }
  ontab(tab:string){
   this.tab=tab
 }
 onhome(){
   this.router.navigate(['/home'])
   }
  }