import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-viewdesignation',
  templateUrl: './viewdesignation.component.html',
  styleUrls: ['./viewdesignation.component.css']
})
export class ViewdesignationComponent {

  constructor(private desigserv : DesignationService,private router : Router) { }
  desiglist : any;
  response  : any
  reserr    : any
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions={
        pagingType : 'full_numbers'
    }

    this.desigserv.getAllDesignations().subscribe(data=>{
                                                          this.desiglist=data
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
                                                          this.dtTrigger.next(null)
                                                        });
    }
  getDesigById(did : any)
  {
    this.router.navigate(['editdesigbyid',did]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
