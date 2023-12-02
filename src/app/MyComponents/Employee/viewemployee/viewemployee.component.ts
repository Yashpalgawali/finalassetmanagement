import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit{

  constructor(private empserv : EmployeeService,private router : Router) { }
 
  dtOptions : DataTables.Settings={}
  dtTrigger : Subject<any> = new Subject<any>();

  emplist : any;
  ngOnInit(){
    this.dtOptions={
      pagingType : 'full_numbers'
    }
      this.empserv.getAllEmployees().subscribe(data=>{ 
                                                  this.emplist=data 
                                                  this.dtTrigger.next(null)
                                                })
  } 

  getEmpById(empid : number)
  {
    this.router.navigate(['employees',empid])
  }
}
