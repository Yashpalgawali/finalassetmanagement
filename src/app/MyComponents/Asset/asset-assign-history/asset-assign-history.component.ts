import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error } from 'jquery';
import { Subject } from 'rxjs';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-asset-assign-history',
  templateUrl: './asset-assign-history.component.html',
  styleUrls: ['./asset-assign-history.component.css']
})
export class AssetAssignHistoryComponent {

  response  : any
  reserr    : any
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  eid : any
  employee : Employee = new Employee()
  assign_hist : AssetAssignHistory[] = []
  constructor(private empserv : EmployeeService,private route : ActivatedRoute,private router : Router) {

    this.eid = this.route.snapshot.params['id']
    this.dtOptions={
      pagingType : 'full_numbers'
  }
  }

  ngOnInit(): void {
  
  this.empserv.getAssetAssignHistByEmpId(this.eid)
                                      .subscribe(data=>
                                      { 
                                        this.empserv.getAssetAssignHistByEmpId(this.eid).subscribe(data=>{
                                                                                    this.assign_hist=data
                                                                                     // initiate our data table
                                                                                    this.dtTrigger.next(null)
                                                                                  })
                                      },
                                      error=>{
                                        sessionStorage.setItem('reserr','No Employee Found for given ID')
                                        this.router.navigate(['viewassignedassets'])
                                      })
    
  }

  

}
