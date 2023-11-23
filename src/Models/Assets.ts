import { AssetType } from "./AssetType"

export class Assets {
    asset_id    !: number
    asset_name  !: string
    asset_number!: string
    model_number!: string
    quantity    !: string
    atype        : AssetType = new AssetType()
}
