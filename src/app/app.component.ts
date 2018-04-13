import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('userForm') firstForm:NgForm;

  defaultMail = "test@test.com";
  address = "";
  genders = ["male","female"]

 /* onSubmit(userForm:NgForm){
    console.log("submitted");
    console.log(userForm);
  }*/

  onSubmit(){
    console.log(this.firstForm);
    console.log(this.address);
  }

}
