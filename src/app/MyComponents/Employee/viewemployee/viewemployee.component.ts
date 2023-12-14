import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { Subject } from 'rxjs';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit{

  constructor(private empserv : EmployeeService,private router : Router) { }
 
  dtOptions: DataTables.Settings={}
  dtTrigger: Subject<any> = new Subject<any>();
  response : any
  reserr   : any
  emplist  : any;
  ngOnInit(){
    this.dtOptions={
      pagingType : 'full_numbers'
    }
      this.empserv.getAllEmployees().subscribe(data=>{ 
                                                  
                                                  if(sessionStorage.getItem('response')!=null)
                                                  { 
                                                    setTimeout(() => {
                                                      this.response=sessionStorage.getItem('response')
                                                      sessionStorage.removeItem('response') 
                                                    }, 300);
                                                  }
                                                  if(sessionStorage.getItem('reserr')!=null)
                                                  {
                                                    this.reserr=sessionStorage.getItem('reserr')
                                                      setTimeout(() => {  
                                                        sessionStorage.removeItem('reserr')
                                                      }, 300);
                                                  }
                                                  this.emplist=data 
                                                  this.dtTrigger.next(null)
                                                })
  }

  getEmpById(empid : number)
  {
    this.router.navigate(['employees',empid])
  }

  retrieveassetsbyempid(empid : number)
  {
    this.router.navigate(['retrieveassetsbyempid',empid])
  }

  viewemployeehistbyid(empid : number)
  {
    this.router.navigate(['assetassignhist',empid])
  }
}
