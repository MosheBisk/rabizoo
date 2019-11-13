import { Component, OnInit } from '@angular/core';
import { BeastsService } from 'src/app/services/beasts.service';

@Component({
  selector: 'app-beast-panel',
  templateUrl: './beast-panel.component.html',
  styleUrls: ['./beast-panel.component.css']
})
export class BeastPanelComponent implements OnInit {

  constructor(public beastsSvc:BeastsService) {
    console.log('BeastsPanelComponent ctor');
  }

  ngOnInit() {
  }

}
