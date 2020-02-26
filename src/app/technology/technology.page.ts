import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-technology',
  templateUrl: 'technology.page.html',
  styleUrls: ['technology.page.scss'],
})
export class TechnologyPage {

 @ViewChildren(IonTabs)
  tabs:IonTabs[]

  constructor(private router: Router) {
  }

get topic(){
  return (async ()=> await this.tabs[0].getSelected())
}

}
