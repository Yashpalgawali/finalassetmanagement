import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { data, error } from 'jquery';
import { Assets } from 'src/Models/Assets';
import { AssetService } from 'src/app/Services/asset.service';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-addasset',
  templateUrl: './addasset.component.html',
  styleUrls: ['./addasset.component.css']
})
export class AddassetComponent {

  asset  : Assets = new Assets()
  atypelist : any

  constructor(private assetserv : AssetService, private router : Router,private atypeserv : AssettypeService) {}

  ngOnInit(): void {
      this.atypeserv.getAllAssetTypes().subscribe(data=>this.atypelist=data)
  }
  onSubmit()
  {
    this.assetserv.saveAsset(this.asset).subscribe({
      complete:()=>{
        sessionStorage.setItem('response',this.asset.asset_name+' Asset saved Successfully')
        this.router.navigate(['viewassets'])
      },
      error:(e)=>{
        sessionStorage.setItem('reserr',this.asset.asset_name+' Asset is not saved')
        this.router.navigate(['viewassets'])
      }
    })
  }
}
