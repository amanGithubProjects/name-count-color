import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getName(){
    return[
      'aman','rohit','abhi','aman','abhi','abhi','abhi','abhi','rohit','rohit','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat','rajat'
    ]
  }
}
