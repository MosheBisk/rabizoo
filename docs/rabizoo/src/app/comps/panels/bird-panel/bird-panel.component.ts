import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';

@Component({
  selector: 'app-bird-panel',
  templateUrl: './bird-panel.component.html',
  styleUrls: ['./bird-panel.component.css']
})
export class BirdPanelComponent implements OnInit {

  constructor(public birdsSvc:BirdsService) { }

  ngOnInit() {
  }

}
