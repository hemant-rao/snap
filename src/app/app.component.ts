import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Card Details';
  @Input()
  maxlength!: string | number;
  cardForm = new FormGroup({
    amount: new FormControl(''),
    userName: new FormControl(''),
    cardNumber: new FormControl(''),
    cardDate: new FormControl(''),
    cardYear: new FormControl(''),
    cardCVV: new FormControl('')
  });
  constructor(private appServ: AppServiceService) {}
  onSubmit() {
    console.warn(this.cardForm.value);
    let status = this.appServ.cardTransection;
    if (status) {
      console.log('this is the value is true....', status);
      localStorage.setItem('cardFormData', JSON.stringify(this.cardForm.value));
    } else {
      console.log('this is the value is false....', status);
      localStorage.setItem('cardFormData', JSON.stringify(this.cardForm.value));
    }
  }
}
