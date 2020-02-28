import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art',
  templateUrl: './art.page.html',
  styleUrls: ['./art.page.scss'],
})
export class ArtPage{

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