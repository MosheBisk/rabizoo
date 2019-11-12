import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {

  constructor() {
    console.log('ctor BirdsService', this.birds);
   }
  birds = [
    {name: 'red-tail', size: 'large', lifeSpan: '15y', habitat: 'africa', img: 'https://i.pinimg.com/474x/57/9c/1e/579c1e0b47d5133391227e22b1533438--african-jungle-african-love.jpg'},
    {name: 'blue-beak', size: 'medium', lifeSpan: '11y', habitat: 'madagascar', img: 'https://media-cdn.tripadvisor.com/media/photo-s/09/9c/c9/36/masoala-forest-lodge.jpg'},
    {name: 'red-head', size: 'small', lifeSpan: '5y', habitat: 'america', img: 'https://www.wesa.fm/sites/wesa/files/styles/medium/public/201712/8398285357_d0119f9d9d_o.jpg'},
    {name: 'cyan-bird', size: 'small', lifeSpan: '8y', habitat: 'india', img: 'https://i.pinimg.com/474x/90/0c/59/900c59fa4ef275cc7e5776e2b23fcbb2--small-birds-colorful-birds.jpg'},
  ]
  
  currentBirdIndex = 0
  currentBird = this.birds[this.currentBirdIndex]
}
