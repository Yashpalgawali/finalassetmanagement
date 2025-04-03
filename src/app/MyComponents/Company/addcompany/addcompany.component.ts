import { Component } from '@angular/core';
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
  constructor(private compserv : CompanyService,private router : Router) { } 

  onSubmit() {
     this.compserv.saveCompany(this.company).subscribe({
                                                complete:()=>{
                                                  sessionStorage.setItem('response',this.company.comp_name+' is saved successfully')
                                                  this.router.navigate(['company/viewcompanies']);                                             
                                                }
                                              });
   }
   
   public goToViewCompany()
   {
     this.router.navigate(['company/viewcompanies']);
   }
  
}
