import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CardService {
  private formDataSource = new BehaviorSubject<string>("");
  cardFormDataHold = this.formDataSource.asObservable();
  jsonData: {};
  constructor() {}
    myCardService(cardForm: any){
      console.log("from card serice----", cardForm);
    }  
    changeMessage(jsonData: any){
      this.jsonData =  jsonData;
      this.formDataSource.next(JSON.stringify(jsonData));
    }
}
