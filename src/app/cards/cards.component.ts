import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CardService } from './card.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  unsubscribe$ = new Subject();
  @Input()
  maxlength!: string | number;
  cardForm = new FormGroup({
    amount: new FormControl(''),
    userName: new FormControl(''),
    cardNumber: new FormControl(''),
    cardDate: new FormControl(''),
    cardYear: new FormControl(''),
    cardCVV: new FormControl(''),
  });
  statusActions: boolean = false;
  // CardService: any;
  // private _CardService: any;
  constructor(
    private router: Router,
    private _CardService: CardService,
  ) {}
  cardFormVal: FormGroup;
  errorMessage: string;
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth() + 1;
  currentYear = this.currentDate.getFullYear();

  ngOnInit(): void {}

  cardTransection() {
    if (Math.random() * 9 < 5) {
      this.router.navigate(['/status']);
      this.statusActions = true;
      // CardService.myCardService(this.cardForm.value);
      return true;
    } else {
      this.router.navigate(['/status']);
      this.statusActions = false;
      return false;
    }
  }
  onSubmit() {
    console.warn(this.cardForm.value);
    let status = this._CardService.changeMessage(this.cardForm.value);
    if (this.cardTransection() == true) {
      localStorage.setItem('cardFormData', JSON.stringify(this.cardForm.value));
    } else {
      localStorage.setItem('cardFormData', JSON.stringify(this.cardForm.value));
    }
  }
}
