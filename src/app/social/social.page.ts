import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage{

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