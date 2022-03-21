import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EhttpParamType } from 'src/app/shared/enums';
import { HttpserviceService } from 'src/app/shared/services/httpservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  countryName = "Bangladesh";
  constructor(private hc: HttpClient) { }

  ngOnInit(): void {
    this.getContries();
  }

  getContries(): void {
    let value = this.countryName;
    if (this.countryName === "") {
      value = "Bangladesh";
    }
    // this.hs.getUniversities(param, EhttpParamType.param)
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    let httpParams = new HttpParams();
    httpParams.set('country', value);
    this.hc.get<any>("http://universities.hipolabs.com/search?country="+value, { observe:'response' })
      .subscribe(data => {
        console.log(data);
      }

      )
  }

}
