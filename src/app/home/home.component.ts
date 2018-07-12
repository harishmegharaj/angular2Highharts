import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

constructor(private http: Http) {
        http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json').subscribe(res => {
            this.options = {
                title : { text : 'AAPL Stock Price' },   
                series : [{
                    name : 'AAPL', 
                    data : res.json(), 
                    tooltip: {
                        valueDecimals: 2 
                    }
                }]
            };
        });
    }
    options: Object;

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
