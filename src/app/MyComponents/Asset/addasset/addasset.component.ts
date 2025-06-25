import { Component, OnInit } from '@angular/core';
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
export class AddassetComponent implements OnInit {

  asset  : Assets = new Assets()
  atypelist : any

  constructor(private assetserv : AssetService, private router : Router,private atypeserv : AssettypeService) {}

  ngOnInit(): void {
      this.atypeserv.getAllAssetTypes().subscribe(data=>this.atypelist=data)
  }
  onSubmit()
  {
    this.assetserv.saveAsset(this.asset).subscribe({
      next:(data)=>{
        if('statusCode' in data) {
          sessionStorage.setItem('response',data.statusMsg)
          this.router.navigate(['asset/viewassets'])
        }
        else {
          sessionStorage.setItem('reserr',data.errorMessage)
          this.router.navigate(['asset/viewassets'])
        }
      }
    })
  }
}
