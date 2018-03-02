import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { HttpModule } from '@angular/http';
import { DataService } from '../.././data.service';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule, Ng2SmartTableModule, HttpModule],
  declarations: [ItemsComponent],
  providers: [DataService]
})
export class ItemsModule {
  
}
