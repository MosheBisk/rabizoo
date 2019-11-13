import { Component, OnInit } from '@angular/core';
import { BeastsService } from 'src/app/services/beasts.service';

@Component({
  selector: 'app-beast-card',
  templateUrl: './beast-card.component.html',
  styleUrls: ['./beast-card.component.css']
})
export class BeastCardComponent implements OnInit {

  constructor(public beastsSvc:BeastsService) { }

  ngOnInit() {
  }

}
