import { NextApiRequest, NextApiResponse } from "next"

import { Asset } from "@/types"

export default function api(req: NextApiRequest, res: NextApiResponse) {
  const assets: Asset[] = [
    { id: "1", name: "APPL", type: "stock" },
    { id: "2", name: "GOOGL", type: "stock" },
    { id: "3", name: "BTC", type: "crypto" },
    { id: "4", name: "USD", type: "fiat" },
    { id: "5", name: "GBP", type: "fiat" },
  ]

  res.status(200).json(assets)
}
