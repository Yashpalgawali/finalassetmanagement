import { Assets } from "./Assets"
// import { Employee } from "./Employee"

export class AssetAssignHistory {

    hist_id !: number
    operation_date !: string
    operation_time !: string
    operation      !: string
    asset_id !: number
    // employee : Employee = new Employee()
    employee : any
    asset  : Assets  =new Assets()
    
}