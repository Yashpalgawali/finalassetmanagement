import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { Users } from 'src/Models/Users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  otp      : any
  cnf_otp !: number
  reserr  !: string
  user     : Users = new Users();
  
  constructor(private userserv : UserService,private router : Router) { }

  ngOnInit(): void {

  }

  changepassword() {

    this.userserv.getUserByUserEmail(this.user.email).subscribe(data=>
                                                        {
                                                          this.user=data
                                                          this.reserr=""
                                                          this.userserv.generateOtp(this.user.email).subscribe(data=>
                                                            {
                                                              sessionStorage.setItem('otp',`${data}`)
                                                              sessionStorage.setItem('user_email',this.user.email)
                                                              sessionStorage.setItem('response','OTP sent to your Email ID')
                                                              this.router.navigate(['confirmotpforgotpass'])
                                                            })
                                                        },error=>{
                                                            this.reserr="No User found for given Email"
                                                        })
                    }
}
