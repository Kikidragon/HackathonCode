import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.page.html',
  styleUrls: ['./nature.page.scss'],
})
export class NaturePage{

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