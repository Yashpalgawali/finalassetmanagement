import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DepartmentService } from 'src/app/Services/department.service';


@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrls: ['./viewdepartment.component.css']
})
export class ViewdepartmentComponent {

  constructor(private deptserv : DepartmentService,private router : Router ) {}
  response : any
  reserr : any
  deptlist : any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'simple_numbers',
     
  }
    this.deptserv.getAllDepartments().subscribe(data=>{
                                                        this.deptlist=data
                                                        if(sessionStorage.getItem('response')!=null)
                                                        {
                                                          this.response=sessionStorage.getItem('response')
                                                          setTimeout(() => {
                                                            sessionStorage.removeItem('response')
                                                          }, 4000);
                                                        }
                                                        if(sessionStorage.getItem('reserr')!=null)
                                                        {
                                                          this.reserr=sessionStorage.getItem('reserr')
                                                          setTimeout(() => {
                                                            sessionStorage.removeItem('reserr')
                                                          }, 4000);
                                                        } 
                                                        // initiate our data table
                                                        this.dtTrigger.next(null);
                                                      }
                                              );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getDeptById(did : number)
  {
    this.router.navigate(['departments',did]);
  }
}
