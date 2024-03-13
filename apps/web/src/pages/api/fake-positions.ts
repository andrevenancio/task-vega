import { Position } from "@/types"

export const data: Position[] = [
  {
    id: 1,
    asset: "APPL",
    type: "stock",
    quantity: 10,
    asOf: "2023-01-01",
    price: 149.12724675155093,
  },
  {
    id: 2,
    asset: "GOOGL",
    type: "stock",
    quantity: 15,
    asOf: "2023-01-01",
    price: 620.5580382558152,
  },
  {
    id: 3,
    asset: "BTC",
    type: "crypto",
    quantity: 1,
    asOf: "2023-01-03",
    price: 40598.747237567615,
  },
  {
    id: 4,
    asset: "USD",
    type: "fiat",
    quantity: 4500,
    asOf: "2023-01-05",
    price: 1,
  },
  {
    id: 5,
    asset: "GBP",
    type: "fiat",
    quantity: 3000,
    asOf: "2023-01-09",
    price: 1.5357106485943324,
  },
]
