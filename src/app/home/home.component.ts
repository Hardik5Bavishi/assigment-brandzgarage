import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  tracks: number;
  artistInfo: any;
  totalRecords: any = 5;
  isValid: boolean = true;
  isSearch: boolean;

  constructor(private _homeService: HomeService) { }

  ngOnInit() { }

  searchArtist() {
    this.isValid = false;
    this.isSearch = true;
  }

  search(): void {
    this._homeService.getArtist(this.name, this.tracks).subscribe(res => {
      this.artistInfo = res.results;
      this.isValid = false;
      this.isSearch = false;
    });
  }

  back() {
    this.isSearch = true;
    this.name = null;
    this.tracks = null;
  }

}
