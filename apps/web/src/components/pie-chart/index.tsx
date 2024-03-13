import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts"

import { formatUSD } from "@/utils/format"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const CustomLabel = ({ viewBox, value }: { value: string; viewBox?: any }) => (
  <>
    <text
      offset="5"
      fontSize={20}
      x={viewBox.cx}
      y={viewBox.cy}
      className="recharts-text recharts-label"
      textAnchor="middle"
      fill="#808080"
    >
      <tspan>{value}</tspan>
    </text>
    <text
      offset="5"
      fontSize={10}
      x={viewBox.cx}
      y={viewBox.cy + 15}
      className="recharts-text recharts-label"
      textAnchor="middle"
      fill="#808080"
    >
      <tspan>Total Assets</tspan>
    </text>
  </>
)

export interface ChartValue {
  name: string
  value: number
}

export const PieChartComponent = ({
  total,
  data,
}: {
  total: number
  data: ChartValue[]
}) => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie data={data} innerRadius={85} outerRadius={100} dataKey="value">
        {data.map((_, i) => (
          <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
        ))}
        <Label
          content={(props) => (
            <CustomLabel {...props} value={formatUSD(total)} />
          )}
        />
      </Pie>
      <Legend />
    </PieChart>
  </ResponsiveContainer>
)
