import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-viewdesignation',
  templateUrl: './viewdesignation.component.html',
  styleUrls: ['./viewdesignation.component.css']
})
export class ViewdesignationComponent {

  constructor(private desigserv : DesignationService,private router : Router) { }
  desiglist : any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions={
        pagingType : 'full_numbers'
    }

    this.desigserv.getAllDesignations().subscribe(data=>{
                                                          this.desiglist=data
                                                          this.dtTrigger.next(null)
                                                        });
    }
  getDesigById(did : any)
  {
    this.router.navigate(['editdesigbyid',did]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
