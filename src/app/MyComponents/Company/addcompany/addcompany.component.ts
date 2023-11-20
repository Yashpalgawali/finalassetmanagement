import { Component } from '@angular/core';
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
  response : any;
  constructor(private compserv : CompanyService,private route : Router) { } 

  onSubmit() {
    // this.compserv.saveCompany(this.company).subscribe(data=>this.goToViewCompany());
     this.compserv.saveCompany(this.company).subscribe(data=>{
                                                               this.response=true;
                                                               this.goToViewCompany();
                                                             }
                                                      ),(error : any )=>console.error(error);
    
   }
   
   public goToViewCompany()
   {
     this.route.navigate(['viewcompany']);
   }
  
}
