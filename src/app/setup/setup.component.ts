import {Component, OnInit} from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";
import {Router} from "@angular/router";
import any = jasmine.any;

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  private favstop: any = '';
  private userinfo: any = [];

  constructor(private digitransitService: DigitransitService, private router: Router) {
  }

  stop = '';
  firstname = 'Your name here';
  lastname = '';
  zip = '';
  city = '';
  gsm = '';
  address = '';

  ngOnInit() {

    if (localStorage.getItem('info') !== null) {
      console.log(localStorage.getItem('info'));
      this.userinfo = localStorage.getItem('info');
      this.firstname = this.userinfo.name;
      this.lastname = this.userinfo.lastname;
      this.zip = this.userinfo.zip;
      this.city = this.userinfo.city;
      this.gsm = this.userinfo.gsm;
      this.address = this.userinfo.address;
    }


    if (localStorage.getItem('favstop') !== null) {
      this.favstop = JSON.parse(localStorage.getItem('favstop'));
      //console.log(JSON.parse(localStorage.getItem('favstop')));
      this.stop = this.favstop;
    }
  }

  logForm(value: any){
    console.log(value);
    localStorage.setItem("info", JSON.stringify(value));
    this.router.navigate(['routes']);
  }

  delForm(){
    localStorage.removeItem("info");
    localStorage.removeItem("favstop");
    this.router.navigate(['routes']);
  }

}
