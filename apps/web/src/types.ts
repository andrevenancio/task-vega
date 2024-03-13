export type AssetType = "stock" | "crypto" | "fiat"

export interface Position {
  id: number
  asset: string
  quantity: number
  asOf: string
  price: number
  type: AssetType
}

export interface Portfolio {
  id: string
  asOf: string
  positions: Position[]
}

export interface Price {
  id: string
  asset: string
  price: number
}

export interface HistoricalPrice extends Price {
  asOf: string
}

export interface Asset {
  id: string
  name: string
  type: AssetType
}
