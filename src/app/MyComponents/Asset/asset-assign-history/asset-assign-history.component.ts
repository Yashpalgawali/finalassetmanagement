import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error } from 'jquery';
import { Subject } from 'rxjs';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';
 import { Employee } from 'src/Models/Employee';
import { AssetService } from 'src/app/Services/asset.service';
import { AssignedAssetService } from 'src/app/Services/assigned-asset.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-asset-assign-history',
  templateUrl: './asset-assign-history.component.html',
  styleUrls: ['./asset-assign-history.component.css']
})
export class AssetAssignHistoryComponent {

  response  : any
  reserr    : any
   
  dtOptions: any;
  dtTrigger: Subject<any> = new Subject<any>();

  eid : any
  employee : Employee = new Employee()
  
  assign_hist : AssetAssignHistory[] = []
  constructor(private empserv : EmployeeService,private route : ActivatedRoute,
              private router : Router, private assignassetserv : AssignedAssetService) { }

  ngOnInit(): void {
    this.eid = this.route.snapshot.params['id']
    this.dtOptions = {
              pagingType : 'full_numbers',
              responsive : true
    }
  
       this.empserv.getAssetAssignHistByEmpId(this.eid).subscribe({
        next:(data) => {
                    this.assign_hist = data
                                                                                            
                      this.employee = data[0].employee
                      // initiate our data table
                      this.dtTrigger.next(null)
        },
        error:(e)=>{
              sessionStorage.setItem('reserr','No Asset Assigning History Found ')
              this.router.navigate(['viewemployee']) 
        }
       })
    // this.empserv.getAssetAssignHistByEmpId(this.eid).subscribe({
    //                                   next:(data)=>
    //                                   {
    //                                     this.empserv.getAssetAssignHistByEmpId(this.eid).subscribe(data=>{
    //                                                                                 this.assign_hist = data
                                                                                   
    //                                                                                 this.employee = data[0].employee
    //                                                                                 // initiate our data table
    //                                                                                 this.dtTrigger.next(null)
    //                                                                               })
    //                                   },
    //                                   error:(e)=>{
    //                                         sessionStorage.setItem('reserr','No Asset Assigning History Found ')
    //                                         this.router.navigate(['viewemployee']) 
    //                                   }
    //                                 })
  }

  exportAssetAssignHistoryReportToExcel(empid: number) {
    
    this.assignassetserv.exportAssignedAssetsHistoryToExcel(empid).subscribe((response : any)=>{
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Assigned Assets History - ('+this.employee.emp_name+').xlsx';
        link.click();
      });
    }
}
