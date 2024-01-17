import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent {

  constructor(private empserv : EmployeeService,private router : Router){}
  emplist  : Employee[] = []
  response : any
  reserr   : any
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers',
      responsive : {
        breakpoints: [
          {name: 'bigdesktop', width: Infinity},
          {name: 'meddesktop', width: 1480},
          {name: 'smalldesktop', width: 1280},
          {name: 'medium', width: 1188},
          {name: 'tabletl', width: 1024},
          {name: 'btwtabllandp', width: 848},
          {name: 'tabletp', width: 768},
          {name: 'mobilel', width: 480},
          {name: 'mobilep', width: 320}
        ]
      }
    }

    this.empserv.getAllEmployees()
                  .subscribe(data=>
                  {
                    this.emplist=data
                    if(sessionStorage.getItem('reserr')!=null)
                    {
                      this.reserr = sessionStorage.getItem('reserr')
                      setTimeout(() => {
                        sessionStorage.removeItem('reserr')
                        this.reserr = ""
                      }, 5000);
                    }
                    if(sessionStorage.getItem('response')!=null)
                    {
                      this.response = sessionStorage.getItem('response')
                      setTimeout(() => {
                        sessionStorage.removeItem('response')
                        this.response = ""
                      }, 5000);
                    }
                     this.dtTrigger.next(null)
                  })
  }

  getEmpById(eid : number)
  {
    this.router.navigate(['employee',eid])
  }
  retrieveassetsbyempid(eid : number)
  {
    this.router.navigate(['retrieveassetsbyempid',eid])
  }
  viewemployeehistbyid(eid : number)
  {
    this.router.navigate(['assetassignhist',eid])
  }
}
