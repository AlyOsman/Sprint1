import { Component,  OnInit } from '@angular/core';
import { DataService } from '../.././data.service';
import { TimingPipe } from '../.././@theme/pipes/timing.pipe';

import { DataTable, DataTableResource } from 'angular-4-data-table';
import { DatePipe } from '@angular/common';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  
  settings = {
    delete:{
      confirmDelete:true
    },
    edit:{
      confirmSave:true
    },add:{
      confirmCreate:true
    },
    columns: {
      name: {
        title: 'Name'
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created At'
      },
      updatedAt: {
        title: 'Updated At'
      }
    }
  };

  onDeleteConfirm(event){

    this._dataService.deleteProducts(event.data).subscribe(res => alert(res.toString));
  }

  onSaveConfirm(event){
    this._dataService.patchProducts(event.newData).subscribe(res => alert(res.toString));
  }

  onCreateConfirm(event){
    this._dataService.postProducts(event.newData).subscribe(res => alert(res.toString));
  }
  
  products: Array<any>;

  

  constructor(private _dataService: DataService) {
    
    this._dataService.getProducts()
      .subscribe(res => this.products = res);

      
  }

  ngOnInit() {
  }

}
