import { Component } from '@angular/core';
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
export class EditassetComponent {
  constructor(private assetserv : AssetService, private router : Router,
              private atypeserv : AssettypeService,private route : ActivatedRoute) { }
  
  asset : Assets = new Assets();
  atypelist : any
  aid : any
  ngOnInit(): void {
    this.aid = this.route.snapshot.params['id'];
    this.atypeserv.getAllAssetTypes().subscribe(data=>this.atypelist=data)
    this.assetserv.getAssetsById(this.aid).subscribe(data=>this.asset=data)
  }

  onSubmit()
  {
    this.assetserv.saveAsset(this.asset).subscribe({
      
      complete:()=>{
        sessionStorage.setItem('response',this.asset.asset_name+' is saved successfully')
        this.router.navigate(['viewassets'])
      },
      error:(e) =>{
        sessionStorage.setItem('reserr',this.asset.asset_name+' is not saved ')
        this.router.navigate(['viewassets'])
      }
    })
  }
}
