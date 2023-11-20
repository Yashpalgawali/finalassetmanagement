import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent {
  complist : any;
  comp_id  : any; 

  response : any;
  reserr   : any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private compserv : CompanyService, private router : Router ) { }

  ngOnInit(): void {
    this.dtOptions={
        pagingType : 'full_numbers'
    }
    this.compserv.getAllCompanies().subscribe(data=>{
                                                      this.complist=data 
                                                       // initiate our data table
                                                       this.dtTrigger.next(null)
                                                    });
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getCompById(cid : any)
  {
    this.router.navigate(['editcompbyid',cid]);
  }
}
