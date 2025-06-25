import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'jquery';
import { Company } from 'src/Models/Company';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent {

  constructor(private compserv:CompanyService,private router : Router,private route: ActivatedRoute){ }

  comp_id !: string;
  company : Company = new Company();
   
  ngOnInit(): void {
    
    this.comp_id = this.route.snapshot.params['id'];
    this.compserv.getCompanyById(this.comp_id).subscribe({
        next : (data)=> {
            this.company=data
        },
        error : (err) =>{
            console.log('error is ',err)
        },
    });
  }
  onSubmit() {
    this.compserv.updateCompany(this.company).subscribe({
      next : (data) => {
            console.log('RESULT ',data)
            if('statusCode' in data) {
              sessionStorage.setItem('response',data.statusMsg)
              this.router.navigate(['company/viewcompanies'])
            }
            else {
              console.log(data)
              sessionStorage.setItem('reserr',data.errorMessage )
              this.router.navigate(['company/viewcompanies'])
            }
      } 
    })

   
  }
  
}
