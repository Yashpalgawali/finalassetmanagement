import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.compserv.getCompanyById(this.comp_id).subscribe(data=>this.company=data);
  }
  onSubmit() {
    this.compserv.updateCompany(this.company).subscribe(data=>{
                                        sessionStorage.setItem('response','Company updated Successfully')
                                        this.router.navigate(['viewcompany']);});
  }
  
}
