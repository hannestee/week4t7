import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import {RouterModule} from "@angular/router";
import {DigitransitService} from "./services/digitransit.service";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/routes'
  },
  {
    path: 'routes',
    component: RoutesComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
