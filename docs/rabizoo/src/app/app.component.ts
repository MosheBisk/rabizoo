import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdsService } from './services/birds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rabizoo';

constructor(public paging:PagingService, public birds:BirdsService){}

getUp(ev){
  console.log('AppComponent  getUp', ev);
  
  switch (this.paging.currentPanel) {
    case 'birds':
        let newBirdIndex = this.getNewCurrentIndex(
          this.birds.currentBirdIndex, ev, this.birds.birds
        )
        this.birds.currentBirdIndex = newBirdIndex
        this.birds.currentBird = this.birds.birds[newBirdIndex]
      break;
  
    default:
      break;
  }
}
  private getNewCurrentIndex(current: number, delta: number, array: {}[]):number {
    let max = array.length -1;
    let newIndex = current + delta
    if (newIndex > max) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = max
    }
    return newIndex
  }


}
