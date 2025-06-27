import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetType } from 'src/Models/AssetType';
import { AssettypeService } from 'src/app/Services/assettype.service';

@Component({
  selector: 'app-editassettype',
  templateUrl: './editassettype.component.html',
  styleUrls: ['./editassettype.component.css']
})
export class EditassettypeComponent {

  assettype : AssetType = new AssetType()
  atid :any

  constructor(private atypeserv : AssettypeService , private route : ActivatedRoute,private router : Router ) {}

  ngOnInit(): void {
    this.atid = this.route.snapshot.params['id']
    this.atypeserv.getAssetTypeById(this.atid).subscribe({
      next : (data)=> {
         
          if('errorCode' in data) {
             sessionStorage.setItem('reserr',data.errorMessage)        
             this.router.navigate(['assettype/viewassettypes'])
          }
          else {
            this.assettype = data
          }
      }
    })
  }

  onSubmit()
  {
    this.atypeserv.updateAssetType(this.assettype).subscribe({
      next : (data) => {
      
        if('statusCode' in data) {
                sessionStorage.setItem('response', data.statusMsg)
                this.router.navigate(['assettype/viewassettypes'])
        }
        else {
                sessionStorage.setItem('reserr',data.errorMessage)        
                this.router.navigate(['assettype/viewassettypes'])
        } 
      }
    })   
  }
}