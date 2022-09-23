import { ExchangedataService } from './exchangedata.service';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

// toast msg value in string
  toastMsg: string;

  constructor(private exchangedataService:ExchangedataService, private el: ElementRef) {}

ngOnInit() {
// any updates happen in msg then updated msg will set to toast div
  this.exchangedataService.msg.subscribe(
    // responce
    msg =>{
    this.toastMsg = msg;
  }, // error show  toast erro if catch any error
  err => {
    this.exchangedataService.showToastMessage(err);
  });
}

}
