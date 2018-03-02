import { Component } from '@angular/core';
//import {StoreComponent} from '../../store/store.component'

import { DataService } from '../.././data.service';
@Component({
  selector: 'app-dashboard-items',
  //templateUrl: '../../store/store.component.html' 
  template: ``
})

//db.products.insert({"id":"1","name":"Good Will Hunting","price":"30",
//"createdAt":"27/2/2018","updatedAt":"27/2/2018","seller":"aly"})

export class ItemsComponent {
  settings = {
    columns: {
      id: {
        title: 'ID'
      }
    }
  };

  products: Array<any>;

  

  constructor(private _dataService: DataService) {

    this._dataService.getProducts()
      .subscribe(res => this.products = res);

      
  }
  
/*
  data = [
    {
      id: 1
    },
    {
      id: 2
    },
    
    {
      id: 11
    }
  ];

  num:number = 5; 
  while (num < 5 ) {
    
  };
*/
}
