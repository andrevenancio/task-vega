import { useEffect, useState } from "react"

import { LineChartComponent } from "@/components/line-chart"
import { Position } from "@/types"

interface TotalValue {
  date: string
  total: number
}

export const HistoryContainer = () => {
  const [data, setData] = useState<TotalValue[]>([])

  useEffect(() => {
    fetch("/api/portfolio")
      .then((response) => response.json())
      .then((data) => {
        const assetValues: TotalValue[] = []
        let total = 0

        data.forEach((entry: Position) => {
          total += entry.price * entry.quantity
          assetValues.push({
            date: entry.asOf,
            total,
          })
        })

        setData(assetValues)
      })
      .catch((error) => console.error("Error fetching portfolio data:", error))
  }, [])

  return <LineChartComponent data={data} />
}
