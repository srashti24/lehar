import { Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  debugger;
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }

  
  
  user={remember:false};// javascript object
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }
 
    
  ngOnInit() {
  }
  onSubmit() {
    console.log("User: ", this.user);
    this.dialogRef.close();
  } 
}
