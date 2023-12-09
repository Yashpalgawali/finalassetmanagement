import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error, map } from 'jquery';
import { pipe } from 'rxjs';
import { Assets } from 'src/Models/Assets';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { Employee } from 'src/Models/Employee';
import { AssetService } from 'src/app/Services/asset.service';
import { AssignedAssetService } from 'src/app/Services/assigned-asset.service';

@Component({
  selector: 'app-retrieve-assets',
  templateUrl: './retrieve-assets.component.html',
  styleUrls: ['./retrieve-assets.component.css']
})
export class RetrieveAssetsComponent {

  constructor(private assetserv : AssetService,private route : ActivatedRoute, private router : Router,
              private assignassetserv : AssignedAssetService) { }
  assigned_assets :  AssignedAssets = new AssignedAssets();
  assignedassets  :  AssignedAssets[] = []
  employee : Employee = new Employee()
  assigned : any
  emp_id !:  number
  assetlist  : any
  matched !: Assets[]
  ngOnInit(): void {
    this.emp_id= this.route.snapshot.params['id'];
    this.assignassetserv.getAssignedAssetsByEmpId(this.emp_id).subscribe(data=>
                                                              {
                                                                this.assignedassets=data
                                                                this.assetserv.getAllAssets().subscribe(data=>
                                                                  {
                                                                    this.assetlist=data
                                                                  })
                                                                this.employee =this.assignedassets[0].employee
                                                                for (let index = 0; index < this.assignedassets.length; index++) {
                                                                  this.assigned_assets = this.assignedassets[index];
                                                                  if(index==0)
                                                                  {  
                                                                    this.assigned = this.assignedassets[index].asset.asset_name
                                                                    if(this.assetlist.asset_id==this.assignedassets[index].asset.asset_id) 
                                                                    {
                                                                      
                                                                    }
                                                                  }
                                                                  else {
                                                                  this.assigned = this.assigned +","+ this.assignedassets[index].asset.asset_name
                                                                  }
                                                                }
                                                               
                                                                
                                                                alert(this.assigned)
                                                              },
                                                              error=>alert('FAILED')
                                                              )
  }
}
