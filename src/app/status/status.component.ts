import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CardService } from '../cards/card.service';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusActions: boolean;
  state$: Observable<object>;
  cardForm: any; 
  jsonData: string;
  // private _CardService: any;
  constructor(public activatedRoute: ActivatedRoute,private _CardService : CardService) {}

  ngOnInit() {
    this._CardService.cardFormDataHold.subscribe((jsonData: string) => this.jsonData = jsonData);
  }
}
