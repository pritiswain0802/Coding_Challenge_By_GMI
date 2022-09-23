import { ExchangedataService } from './../exchangedata.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {


  constructor(private exchangedataService: ExchangedataService, public sanitizer: DomSanitizer) { }

  // store the url for video on player
  playerUrlItem: string;

  ngOnInit() {
    this.exchangedataService.url.subscribe(
      // get the url from other component like playlist
      url => {
        this.playerUrlItem = url;
      },
      // error show  toast erro if catch any error
      err => {
        this.exchangedataService.showToastMessage(err);
      });

  }

}

