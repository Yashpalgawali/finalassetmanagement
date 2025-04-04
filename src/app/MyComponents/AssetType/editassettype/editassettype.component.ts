import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
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
    this.atypeserv.getAssetTypeById(this.atid).subscribe(data=>{ this.assettype=data})
  }

  onSubmit()
  {
    this.atypeserv.updateAssetType(this.assettype).subscribe({complete:()=>{
        sessionStorage.setItem('response',this.assettype.type_name+' updated successfully')        
        this.router.navigate(['assettype/viewassettypes'])
      },
      error:(e)=>{
        sessionStorage.setItem('reserr',this.assettype.type_name+' is not updated successfully')        
        this.router.navigate(['assettype/viewassettypes'])
      }
    });
  }
}