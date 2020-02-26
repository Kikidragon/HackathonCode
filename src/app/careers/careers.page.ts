import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.page.html',
  styleUrls: ['./careers.page.scss'],
})
export class CareersPage {

  constructor(private router: Router) {
  }
ontechnology(){
  this.router.navigate(['/technology'])
  }

}
