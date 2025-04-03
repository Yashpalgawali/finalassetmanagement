import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/Models/Users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-confirm-otp-forgot-pass',
  templateUrl: './confirm-otp-forgot-pass.component.html',
  styleUrls: ['./confirm-otp-forgot-pass.component.css']
})
export class ConfirmOtpForgotPassComponent {

  user : Users = new Users();
  response : any
  reserr : any
  constructor(private userserv : UserService,private router : Router) { }
  
  ngOnInit(): void {
        this.user.email = `${sessionStorage.getItem('user_email')}`
         
        if(sessionStorage.getItem('response')!=null)
          {
             this.response = sessionStorage.getItem('response')
              setTimeout(() => {
                this.response = ""
                sessionStorage.removeItem('response')
            }, 3000);
          }

          // if(sessionStorage.getItem('reserr')!=null)
          //   {
          //      this.reserr   = sessionStorage.getItem('reserr')
          //       setTimeout(() => {
          //         this.reserr = ""
          //         sessionStorage.removeItem('reserr')
          //       }, 3000);
          //   }
        // this.response   = `${sessionStorage.getItem('response')}`
        // this.reserr   = `${sessionStorage.getItem('reserr')}`
  }

  updatePassword() {
    let otp = parseInt(`${sessionStorage.getItem('otp')}`)
  
    if(this.user.cnf_otp==`${sessionStorage.getItem('otp')}`)
    {
      this.router.navigate(['updatepassword'])
    }
    else {
      this.response=''
      sessionStorage.removeItem('response')
      this.reserr = 'Otp Does not match'

     
    }
    
  }
}
