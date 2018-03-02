import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreRoutingModule } from './store-routing.module';

import { StoreComponent } from './store.component';

import { HttpModule } from '@angular/http';
import { DataService } from '../.././data.service';
import { AppComponent } from '../../app.component';


@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    StoreRoutingModule,
    HttpModule
  ],
  declarations: [StoreComponent],
  providers: [DataService],
  bootstrap: [StoreComponent]
})
export class StoreModule { 
  settings = {
    columns: {
      id: {
        title: 'ID'
      }
    }
  };
  
}
