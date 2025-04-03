import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-viewdesignation',
  templateUrl: './viewdesignation.component.html',
  styleUrls: ['./viewdesignation.component.css']
})
export class ViewdesignationComponent implements OnInit,AfterViewInit {

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
                                                            }, 300);
                                                          }
                                                          if(sessionStorage.getItem('reserr')!=null)
                                                          {
                                                            this.reserr=sessionStorage.getItem('reserr')
                                                            setTimeout(() => {
                                                              sessionStorage.removeItem('reserr')
                                                            }, 300);
                                                          } 
                                                          this.dtTrigger.next(null)
                                                        });
    }
  getDesigById(did : any)
  {
    this.router.navigate(['designation/edit',did]);
  }

  ngAfterViewInit(): void {
      $(document).on('click','.btn-edit',(event)=> {
          const desigId = $(event.target).closest('button').data('desig-id')
          this.getDesigById(desigId)
      })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
