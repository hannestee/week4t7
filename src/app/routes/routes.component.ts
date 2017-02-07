import {Component, OnInit} from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";
import {tryCatch} from "rxjs/util/tryCatch";
import {Router} from "@angular/router";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  private routes: any = [];
  private user: any = [];
  private favstop: any = [];

  constructor(private digitransitService: DigitransitService, private router: Router) {
  }

  ngOnInit() {

    if (localStorage.getItem('info') === null){
      this.router.navigate(['setup']);
    } else {
      this.user = JSON.parse(localStorage.getItem('info'));

      this.digitransitService.setStop(this.user.stop);
      this.digitransitService.getRoutes().subscribe(
        (res) => {
          console.log(res.data.stops[0].patterns);
          this.routes = res.data.stops[0].patterns;
          this.routes.map((reitti) => {
            reitti.route.gtfsId = reitti.route.gtfsId.replace('HSL:', '');
          });
        }
      )
    }
  }

  showBus = (line: string) => {
    console.log(line);
    this.digitransitService.getBus(line).subscribe(
      (resp) => {
        // console.log(resp[Object.keys(resp)[0]].VP.lat);
        // console.log(resp[Object.keys(resp)[0]].VP.long);
        try {
          const lat = resp[Object.keys(resp)[0]].VP.lat;
          const lon = resp[Object.keys(resp)[0]].VP.long;
          window.open(`https://maps.google.fi/maps/place/${lat}+${lon}`);
        } catch (e) {
          alert('Not in transit.');
        }
      }
    )
  };

  setFavourite(favstop) {
    localStorage.setItem('favstop', JSON.stringify(favstop));
  }

}
