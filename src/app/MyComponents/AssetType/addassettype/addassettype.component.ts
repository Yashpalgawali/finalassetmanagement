import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssetType } from 'src/Models/AssetType';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-addassettype',
  templateUrl: './addassettype.component.html',
  styleUrls: ['./addassettype.component.css']
})
export class AddassettypeComponent {

  assettype : AssetType = new AssetType()
  constructor(private atypeserv : AssettypeService,private router : Router) {}
  onSubmit() {
    this.atypeserv.saveAssetType(this.assettype).subscribe(data=>{
      sessionStorage.setItem('response','Asset Type is saved Successfully');
      this.router.navigate(['viewassettypes'])

    })
  }

  goToViewAssetTypes()
  {
    this.router.navigate(['viewassettypes'])
  }
}
