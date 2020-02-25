import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: 'technology.page.html',
  styleUrls: ['technology.page.scss'],
})
export class TechnologyPage {

  constructor(private router: Router) {
  }
ontechnology(){
  this.router.navigate(['/technology'])
}



}
