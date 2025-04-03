import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-viewasset',
  templateUrl: './viewasset.component.html',
  styleUrls: ['./viewasset.component.css']
})
export class ViewassetComponent implements OnInit,AfterViewInit {

  dtOptions : DataTables.Settings={}
  dtTrigger : Subject<any> = new Subject<any>
  aslist    : any
  response  : any
  reserr    : any
  constructor(private assetserv : AssetService,private router : Router) {}

  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers',responsive:true
    }
    this.assetserv.getAllAssets().subscribe(data=>{
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
                                              this.aslist=data
                                              this.dtTrigger.next(null) 
                                            })
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $(document).on('click','.btn-edit',(event)=>{
      const assetId = $(event.target).closest('button').data('asset-id')
      this.getAssetById(assetId)
    })
  }
  getAssetById(aid : number)
  {
    this.router.navigate(['asset/edit',aid])
  }
}
