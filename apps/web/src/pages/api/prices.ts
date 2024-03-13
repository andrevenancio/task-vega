import { NextApiRequest, NextApiResponse } from "next"

import { HistoricalPrice } from "@/types"

import { data as fakePrices } from "./fake-prices"

export default function api(req: NextApiRequest, res: NextApiResponse) {
  const { assets, asOf, from, to } = req.query

  if (typeof assets !== "string") {
    return res.status(400).json({ message: "Invalid query parameter: assets" })
  }

  const assetList: string[] = assets.split(",")

  let prices: HistoricalPrice[] = []

  if (asOf) {
    prices = fakePrices.filter(
      (price) => price.asOf === asOf && assetList.includes(price.asset)
    )
  } else if (from && to) {
    const fromDate = new Date(from as string)
    const toDate = new Date(to as string)

    for (
      let date = new Date(fromDate);
      date <= toDate;
      date.setDate(date.getDate() + 1)
    ) {
      const formattedDate = date.toISOString().split("T")[0]
      const dailyPrices = fakePrices.filter(
        (price) =>
          price.asOf === formattedDate && assetList.includes(price.asset)
      )
      prices.push(...dailyPrices)
    }
  } else {
    const latestPricesMap = new Map<string, HistoricalPrice>()
    fakePrices.forEach((price) => {
      if (assetList.includes(price.asset)) {
        if (
          !latestPricesMap.has(price.asset) ||
          new Date(price.asOf) >
            new Date(latestPricesMap.get(price.asset)!.asOf)
        ) {
          latestPricesMap.set(price.asset, price)
        }
      }
    })
    prices = Array.from(latestPricesMap.values())
  }

  prices.sort((a, b) => new Date(a.asOf).getTime() - new Date(b.asOf).getTime())
  res.status(200).json(prices)
}
