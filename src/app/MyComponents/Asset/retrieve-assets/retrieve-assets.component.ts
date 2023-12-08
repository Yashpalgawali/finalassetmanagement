import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { AssetService } from 'src/app/Services/asset.service';

@Component({
  selector: 'app-retrieve-assets',
  templateUrl: './retrieve-assets.component.html',
  styleUrls: ['./retrieve-assets.component.css']
})
export class RetrieveAssetsComponent {

  constructor(private assetserv : AssetService,private route : ActivatedRoute, private router : Router) {}
  assigned_assets :  AssignedAssets = new AssignedAssets(); 
  ngOnInit(): void {
    this.assigned_assets.emp_id= this.route.snapshot.params['id'];
    
  }
}
