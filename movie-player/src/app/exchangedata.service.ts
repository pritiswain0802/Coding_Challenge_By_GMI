import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// set timeout limit for toast msg show
const toastMsgTimeLimit = 3000;
@Injectable({
  providedIn: 'root'
})

export class ExchangedataService {

  // oberver for urlsource , default url if not getting nay url
  private urlSource = new BehaviorSubject('https://www.youtube.com/embed/6ZfuNTqbHE8');
  url = this.urlSource.asObservable();

  // oberver for toast msg
  private toastMsg = new BehaviorSubject('https://www.youtube.com/embed/6ZfuNTqbHE8');
  msg = this.toastMsg.asObservable();

  constructor() { }

  /**
   *
   *
   * @param {string} url
   * @memberof ExchangedataService
   */
  sendUrl(url: string) {
    this.urlSource.next(url);
  }

/**
 *
 *
 * @param {*} msg get msg and send to app componet for setting that msg on toast
 * @memberof ExchangedataService
 */
showToastMessage(msg) {
  // set new msg
    this.toastMsg.next(msg);
    // get reference by id using toast name
    const myTag = document.getElementById('toast');

    // add show class to toast div
    myTag.classList.add('show');

    // after 3 second remove show class
    setTimeout( function()  {
        myTag.classList.remove('show');
       }, toastMsgTimeLimit);
    }
}
