import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent implements OnInit{
  complist : any;
  comp_id  : any; 

  response : any;
  reserr   : any;

   

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private compserv : CompanyService, private router : Router,private cdRef: ChangeDetectorRef,private renderer: Renderer2, private elRef: ElementRef ) { }

  ngOnInit(): void {
    this.dtOptions={
        pagingType : 'full_numbers',
        responsive : true,
        processing : true
    }
    
    // Manually attach click event using Renderer2
    // const buttons = this.elRef.nativeElement.querySelectorAll('.btn-edit');
    // buttons.forEach((button: HTMLElement) => {
    //   this.renderer.listen(button, 'click', (event: Event) => {
    //     const compId = button.getAttribute('data-comp-id');
    //     alert(compId)
    //     this.getCompById(parseInt(compId || '0', 10));
    //   });
    // });

    this.compserv.getAllCompanies().subscribe({
      next:(data) =>{
        this.complist=data  
        if(sessionStorage.getItem('response')!=null)
        {
          this.response=sessionStorage.getItem('response')
          setTimeout(() => {
            sessionStorage.removeItem('response')
            this.response=""
          }, 3000);
        }
        if(sessionStorage.getItem('reserr')!=null)
        {
          this.reserr=sessionStorage.getItem('reserr')
          setTimeout(() => {
            sessionStorage.removeItem('reserr')
            this.reserr=""
          }, 3000);
        } 
        // initiate our data table
          this.dtTrigger.next(null)
      },
    })
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Attach click event manually using jQuery (for DataTables or Bootstrap compatibility)
    $(document).on('click', '.btn-edit', (event) => {
      const compId = $(event.target).closest('button').data('comp-id');
      this.getCompById(compId);
    });
  }
 

  getCompById(cid : any)
  { 
    this.router.navigate(['companies',cid]);
  }
}
 