import { ExchangedataService } from './../exchangedata.service';
import { GetPlaylistFromApiService } from '../get-playlist-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  // store the value of playList videos in the form of array of object
  playListItems: any;

  // get first url form list itmes in api request
  playerUrlItem: string;

  constructor(private playlistItemsService: GetPlaylistFromApiService,
              private exchangedataService: ExchangedataService) { }

  ngOnInit() {
    this.getPlayListItems();
  }


/**
 *get the list of object of data
 *
 * @memberof PlaylistComponent
 */
getPlayListItems() {
    this.playlistItemsService.getTrailerListFromApi()
      .subscribe(
        // responce
        (data) => {
        this.playListItems = data;
        this.playerUrlItem = data[0].trailer;
        this.exchangedataService.sendUrl(this.playerUrlItem);
      },
      // error msg to toast
      err => {
        this.exchangedataService.showToastMessage(err);
      });

  }

  /**
   *
   *send trailer url to player
   * @param {*} playitems having current playlistobject while click {
    "name": "Avengers: Infinity War",
    "trailer": "https://www.youtube.com/embed/6ZfuNTqbHE8",
    "poster": "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Avengers-3-teaser-poster-1143901.jpg",
    "year": "2018"
  }
   * @memberof PlaylistComponent
   */
  setUrlForPlayer(playitems){
    this.exchangedataService.sendUrl(playitems.trailer);
    this.exchangedataService.showToastMessage(playitems.name);
  }

}
