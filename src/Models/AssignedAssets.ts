import { Assets } from "./Assets"
 import { Employee } from "./Employee"

export class AssignedAssets {
    assigned_asset_id !: number
    assign_date !: string
    assign_time !: string
    ass_assets : any
    assigned_asset_types : any
    assigned !: string
    model_numbers !: string
    assigned_types !: string
    asset_id   :any
    emp_id !: number
    multi_assets !:  string
    asset : Assets = new Assets()
    employee : Employee = new Employee()
    
}