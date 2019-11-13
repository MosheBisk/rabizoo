import { Injectable } from '@angular/core';
import { Beast } from '../models/beast.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor(private http:HttpClient) {
    console.log('ctor BeastsService');

    http.get('https://raw.githubusercontent.com/bresleveloper/breslev-zoo/master/src/assets/beasts.json')
      .subscribe(data =>{
        this.beasts = data as Beast[]
        this.currentBeast = this.beasts[0]
      })
  }

  beasts:Beast[] = [];

  currentBeastIndex = 0;
  currentBeast: any;
}