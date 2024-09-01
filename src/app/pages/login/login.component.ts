import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route:Router){}

  loginObj:any = {
    "EmailId":"",
    "Password":""
  };

  http = inject(HttpClient);
  res: any;

  onLogin()
  {
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
      if(res.result)
     {
      localStorage.setItem('user',JSON.stringify(this.loginObj));
      alert("Login Success");
      this.route.navigateByUrl("/dashboard");

     }
     else{
      alert("Login failed");
     }
    });
  }
}
