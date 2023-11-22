import { Company }     from "./Company"
import { Department }  from "./Department"
import { Designation } from "./Designation"

export class Employee {
    emp_id      !: number
    emp_name    !: string
    emp_email   !: string
    emp_contact !: string
    designation !: Designation  
    department  !: Department
    multi_assets!: any
    asset_ids   !: any[]
    comments    !: string
    company     !: Company
}