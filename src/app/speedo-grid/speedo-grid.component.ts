import { Component, ViewChild,OnInit } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import {Sort} from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';
import { NgModel } from '@angular/forms';
import { NgbModalWindow } from '@ng-bootstrap/ng-bootstrap/modal/modal-window';


declare function CheckNull(FieldValueToValidate: string,message: string) : any;
declare function ShowError(rs_ErrorMessage : string) : any;
declare var in2in5:any;
declare let Error_Message : any;
declare let Error_Count : any  ;


export interface CompanyData {
  companyname: string;
  lob: string;
}
const ELEMENT_DATA: CompanyData[] = [
  {companyname: 'Free Lancer',lob:'Software'},
  {companyname: 'In2In Global',lob:'Software'},
  {companyname: 'Tata',lob:'Construction'},
  {companyname: 'Frank',lob:'Finance'}
];
@Component({
  selector: 'app-speedo-grid',
  templateUrl: './speedo-grid.component.html',
  styleUrls: ['./speedo-grid.component.scss']
})
export class SpeedoGridComponent implements OnInit {
  displayedColumns: string[] = ['companyname', 'lob', 'action'];
  dataSource = ELEMENT_DATA;
  sortedData: CompanyData[];
  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(public dialog: MatDialog) {
    this.sortedData = ELEMENT_DATA.slice();
    Error_Count = 1;
    Error_Message = "";
  }

  openDialog(action:any,obj:any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        
        if(!result.data["companyname"])
        { 
          Error_Count = 1;
          Error_Message = "";          
            CheckNull('', in2in5);
         
            if (Error_Message != "") {
                ShowError(Error_Message);               
            }        
        }
        else
        {
        this.addRowData(result.data);
        }
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    
    this.dataSource.push({
       companyname:row_obj.companyname,
      lob:row_obj.lob
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.companyname == row_obj.companyname){
        value.companyname = row_obj.companyname;
      }
      return true;
    });
  }
  deleteRowData(row_obj:any){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.companyname != row_obj.companyname;
    });
  }

  
  ngOnInit(): void {
  }
  sortData(sort: Sort) {
    const data = ELEMENT_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'companyname':
          return compare(a.companyname, b.companyname, isAsc);       
        case 'lob':
          return compare(a.lob, b.lob, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}