import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/Models/Company';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css'] 
})
export class AddcompanyComponent {

  company : Company = new Company();
  isDisabled : boolean = false

  constructor(private compserv : CompanyService,private router : Router) { } 

  onSubmit() {
      setTimeout(() => {
          this.isDisabled = true
      }, 2000);
     this.compserv.saveCompany(this.company).subscribe({
                                                next:(data)=> {
                                                  if('statusCode' in data){
                                                     sessionStorage.setItem('response',data.statusMsg)
                                                     this.router.navigate(['company/viewcompanies']);
                                                   }
                                                   else {
                                                        sessionStorage.setItem('reserr',data.errorMessage)
                                                        this.router.navigate(['company/viewcompanies']);      
                                                   }                                                                                                                                              
                                                }
                                                
                                              });
   }
   
   public goToViewCompany()
   {
     this.router.navigate(['company/viewcompanies']);
   }
  
}
