import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['../app.component.scss']
})

export class CompanyManagementComponent  implements OnInit{
  
  apiError : boolean = false;
  selected = 'option2';
  
  
  constructor() { 
    // this.companyGrid.displayedColumns = this.displayedColumns;   

  }

  ngOnInit(): void {
    
  }

 
}
