import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-viewasset',
  templateUrl: './viewasset.component.html',
  styleUrls: ['./viewasset.component.css']
})
export class ViewassetComponent {

  dtOptions : DataTables.Settings={}
  dtTrigger : Subject<any> = new Subject<any>
  aslist : any
  response : any
  reserr : any
  constructor(private assetserv : AssetService,private router : Router) {}

  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers'
    }
    this.assetserv.getAllAssets().subscribe(data=>{
      if(sessionStorage.getItem('response')!=null)
                                                  { 
                                                    setTimeout(() => {
                                                      this.response=sessionStorage.getItem('response')
                                                      sessionStorage.removeItem('response')
                                                    }, 500);
                                                  }
                                                  if(sessionStorage.getItem('reserr')!=null)
                                                  {
                                                    this.reserr=sessionStorage.getItem('reserr')
                                                      setTimeout(() => {  
                                                        sessionStorage.removeItem('reserr')
                                                      }, 500);
                                                  }
                                                  this.aslist=data
                                                  this.dtTrigger.next(null) 
                                                })
  }

  getAssetById(aid : number)
  {
    this.router.navigate(['assets',aid])
  }
}
