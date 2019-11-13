import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private http:HttpClient) {
    console.log('ctor FishService');

    http.get('').subscribe(data =>{})

  }
}
