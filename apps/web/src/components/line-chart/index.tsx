import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { formatUSD } from "@/utils/format"

const formatYAxis = (value: number) => `${(value / 1000).toFixed(0)}k`

export const LineChartComponent = ({ data }: any) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <XAxis dataKey="asOf" />
      <YAxis tickFormatter={formatYAxis} />
      <Tooltip formatter={formatUSD} />
      <Line type="monotone" dataKey="total" name="Portfolio" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
)
