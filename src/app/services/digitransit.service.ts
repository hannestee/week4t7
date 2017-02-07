import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DigitransitService {

  private url: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
  private stop: string = 'E1133';

  constructor(private http: Http) {
  }

  setStop = (stop: string) => {
    this.stop = stop;
  };

  getStop = () => {
    return this.stop;
  };

  getRoutes = () => {
    const data = `{
                    stops(name: "${this.stop}") {
                      name
                      patterns {
                        name
                        route {
                          gtfsId
                        }
                      }
                    }
                  }`;

    const headers = new Headers({'Content-Type': 'application/graphql'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.url, data, options).map(
      resp => resp.json()
    );
  }

  // advanced
  getBus = (line) => {
    return this.http.get(`http://api.digitransit.fi/realtime/vehicle-positions/v1/hfp/journey/bus/+/${line}/#`)
      .map(resp => resp.json());
  };

}
