import { AssetType } from "./AssetType"

export class Assets {
    asset_id    !: number
    asset_name  !: string
    asset_number!: string
    model_number!: string
    quantity    !: number
    atype        : AssetType = new AssetType()
}
