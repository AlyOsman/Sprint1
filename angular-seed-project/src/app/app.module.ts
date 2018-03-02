import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreComponent } from './dashboard/store/store.component';

import { HttpModule } from '@angular/http';
import { DataService } from './data.service'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    HttpModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, DataService]
})
export class AppModule {}
