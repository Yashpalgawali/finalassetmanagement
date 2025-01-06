import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-viewassettype',
  templateUrl: './viewassettype.component.html',
  styleUrls: ['./viewassettype.component.css']
})
export class ViewassettypeComponent {
response : any;
dtOptions : DataTables.Settings={}
dtTrigger : Subject<any> = new Subject<any>();
atypelist : any;

reserr  : any
constructor(private atypeserv : AssettypeService,private router : Router) { }

ngOnInit()
{this.dtOptions={
  pagingType : 'full_numbers',
  responsive : true
}
  this.atypeserv.getAllAssetTypes().subscribe(data=>{
                                                    this.atypelist=data
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
                                                  })
}

getAssetTypeById(atid : any)
{
  this.router.navigate(['assettypes',atid])
}
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
  $(document).on('click','.btn-edit',(event)=>{
    const typeId = $(event.target).closest('button').data('type-id')
    this.getAssetTypeById(typeId)
  })
}
}
