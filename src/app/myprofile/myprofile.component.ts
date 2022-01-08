import { Component, OnInit} from '@angular/core';
import { UserService} from 'src/app/myprofile/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['../app.component.scss'],
  providers:[UserService]
})
export class MyprofileComponent implements OnInit {
  apiError : boolean = false;
  isLoading : boolean = true;
  usremail : string="ganesh@gmail.com";
  userData$:any;
  serverMessage : any;
  constructor(public _userService : UserService) { 
   
  }

  ngOnInit() {
    
    /* this._userService.getUser(this.usremail).subscribe(userDetails => {
        this.userData$ = userDetails;
        },
        error=>{this.apiError = true });*/

       this._userService.viewUser(this.usremail)
        .then(userDetail => { this.userData$ = userDetail; })
        .catch(error=>{this.apiError = true })
        .finally(()=>{console.log(this.userData$);this.isLoading = false;})
        

  }
}
 

