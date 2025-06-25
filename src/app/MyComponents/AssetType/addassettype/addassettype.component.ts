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
    this.atypeserv.saveAssetType(this.assettype).subscribe({
      next : (data) => {
         if('statusCode' in data) {
          sessionStorage.setItem('response',data.statusMsg);
          this.router.navigate(['assettype/viewassettypes'])
         }
         else {
          console.log('error ',data)
                sessionStorage.setItem('reserr',data.errorMessage);
                this.router.navigate(['assettype/viewassettypes'])
         }
      },
    })
    // this.atypeserv.saveAssetType(this.assettype).subscribe({complete:()=>{
    //   sessionStorage.setItem('response',this.assettype.type_name+' Asset Type is saved Successfully');
    //   this.router.navigate(['assettype/viewassettypes'])
    // },
    // error:(e)=>{
    //   sessionStorage.setItem('reserr','Asset Type is not saved');
    //   this.router.navigate(['assettype/viewassettypes'])
    // }
    // })
  }

  goToViewAssetTypes()
  {
    this.router.navigate(['viewassettypes'])
  }
}
