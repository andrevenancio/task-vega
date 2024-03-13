import { NextApiRequest, NextApiResponse } from "next"

import { Position } from "@/types"

import { data } from "./fake-positions"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { asOf } = req.query

  let portfolio: Position[] = data

  if (asOf) {
    const targetDate = asOf as string

    portfolio = data.filter((position) => position.asOf === targetDate)
  }

  res.status(200).json(portfolio)
}
