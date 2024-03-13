import { useEffect, useState } from "react"

import { Box, Select } from "@vega/ui"

import { PieChartComponent } from "@/components/pie-chart"
import { Position } from "@/types"

export const PortfolioContainer = () => {
  const [rawdata, setRawData] = useState<Position[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [type, setType] = useState<string>("all")

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((portfolio) => {
        const uniqueTypes: string[] = Array.from(
          new Set(portfolio.map((position: Position) => position.type))
        )

        setTypes([type, ...uniqueTypes])
        setRawData(portfolio)
      })
  }, [])

  const handleSelectorChange = (nextType: string) => {
    setType(nextType)
  }

  const calculate = (type: string) => {
    let total = 0
    let data: any = []
    let temp: any

    const totalReducer = (acc: any, position: Position) =>
      acc + position.quantity * position.price

    switch (type) {
      case "stock":
      case "crypto":
      case "fiat":
        // total
        total = rawdata
          .filter((position: any) => position.type === type)
          .reduce(totalReducer, 0)

        // data
        temp = rawdata
          .filter((position: any) => position.type === type)
          .reduce((acc: any, position: Position) => {
            const value = position.quantity * position.price
            if (!acc[position.asset]) {
              acc[position.asset] = 0
            }
            acc[position.asset] += value
            return acc
          }, {})

        break
      default:
        // total
        total = rawdata.reduce(totalReducer, 0)
        // data
        temp = rawdata.reduce((acc: any, position: Position) => {
          const value = position.quantity * position.price
          if (!acc[position.type]) {
            acc[position.type] = 0
          }
          acc[position.type] += value
          return acc
        }, {})
    }

    data = Object.keys(temp).map((type) => ({
      name: type,
      value: temp[type],
    }))

    return { total, data }
  }

  const { total, data } = calculate(type)

  return (
    <Box css={{ flexDirection: "column" }}>
      <Select selected={type} options={types} onChange={handleSelectorChange} />
      <PieChartComponent total={total} data={data} />
    </Box>
  )
}
