import { Company } from "./Company"
import { Department } from "./Department"
import { Designation } from "./Designation"

export class Employee {
    emp_id   !: number
    emp_name !: string
    emp_email!: string
    emp_contact !: string
    emp_status !: string
    designation : Designation = new Designation()
    department  : Department = new Department()
    company :Company = new Company()
    asset_ids !: string
    multi_assets !: string
    comments !: string
    assigned_assets !: string
}