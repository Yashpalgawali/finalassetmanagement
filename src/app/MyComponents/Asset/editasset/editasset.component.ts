import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Assets } from 'src/Models/Assets';
import { AssetService } from 'src/app/Services/asset.service';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-editasset',
  templateUrl: './editasset.component.html',
  styleUrls: ['./editasset.component.css']
})
export class EditassetComponent implements OnInit {

  constructor(private assetserv : AssetService,    private router : Router,
              private atypeserv : AssettypeService,private route  : ActivatedRoute) { }
  
  asset : Assets = new Assets();
  atypelist : any
  selectedAssetType : any
  aid : any
  ngOnInit(): void {
    this.aid = this.route.snapshot.params['id'];
   
    this.assetserv.getAssetsById(this.aid).subscribe(data=>{
                                                    this.asset=data 
                                                    this.atypeserv.getAllAssetTypes().subscribe(data=>{
                                                      this.atypelist=data
                                                     for(let i=0;i<this.atypelist.length;i++)
                                                     {
                                                      if(this.asset.atype.type_id==this.atypelist[i].type_id)
                                                      {
                                                        this.selectedAssetType = this.atypelist[i]
                                                      }
                                                     }
                                                    })
                                                })
  }

  onDropdownChange(newValue : any) {
    
    this.atypeserv.getAllAssetTypes().subscribe(data=>{
          for(let i=0;i<data.length;i++)
          {
            if(newValue.type_id==data[i].type_id)
            {
                this.selectedAssetType = newValue
            }
          }
    })
  }


  onSubmit()
  {
    this.asset.atype=this.selectedAssetType
    this.assetserv.updateAssets(this.asset).subscribe({
      complete:()=>{
        sessionStorage.setItem('response',this.asset.asset_name+' is updated successfully')
        this.router.navigate(['asset/viewassets'])
      },
      error:(e) =>{
        sessionStorage.setItem('reserr',this.asset.asset_name+' is not updated ')
        this.router.navigate(['asset/viewassets'])
      }
    })
  }
}
