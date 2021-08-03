import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;

  constructor(private _shortUrlService: ShortUrlService) { 
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
  }

  ngOnInit(): void {
  }

  procesarUrl(){
    this.urlProcesada = false;
    this.loading = true;

    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data =>{
      this.loading = false;
      this.urlShort = data.link
      this.urlProcesada = true;
      
    })
  }

}
