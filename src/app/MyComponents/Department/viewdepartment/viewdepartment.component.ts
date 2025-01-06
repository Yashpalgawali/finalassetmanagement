import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { event } from 'jquery';
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
      responsive : true,
      processing : true
    }
    this.deptserv.getAllDepartments().subscribe({
      next:(data)=> {
        this.deptlist=data
                    if(sessionStorage.getItem('response')!=null)
                    {
                      this.response=sessionStorage.getItem('response')
                      setTimeout(() => {
                        sessionStorage.removeItem('response')
                        this.response=""
                      }, 3000);
                    }
                    if(sessionStorage.getItem('reserr')!=null)
                    {
                      this.reserr=sessionStorage.getItem('reserr')
                      setTimeout(() => {
                        sessionStorage.removeItem('reserr')
                        this.reserr=""
                      }, 3000); 
                    } 
                    // initiate our data table
                    this.dtTrigger.next(null);
      }
    }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $(document).on('click' ,'.btn-edit',(event) => {
        const deptId = $(event.target).closest('button').data('dept-id')
        this.getDeptById(deptId)
    })
  }
  getDeptById(did : number)
  {
    this.router.navigate(['departments',did]);
  }
}
