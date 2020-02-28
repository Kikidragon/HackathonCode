import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage{

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