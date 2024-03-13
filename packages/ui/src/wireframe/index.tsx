import { ReactNode } from "react"

import { Box } from "../box"

type ColumnConfig = number | { mobile: number; tablet: number; desktop: number }

type RowConfig = number | { mobile: number; tablet: number; desktop: number }

export type WireframeType = {
  children?: ReactNode
  column?: ColumnConfig
  row?: RowConfig
}

export const Wireframe = ({ children, column, row }: WireframeType) => {
  // column
  let formattedColumn: any = {}
  if (column) {
    formattedColumn = {
      gridColumn: `span ${typeof column === "number" ? column : column.mobile}`,
      ...(typeof column !== "number" && {
        "@tablet": {
          gridColumn: `span ${column.tablet}`,
        },
        "@desktop": {
          gridColumn: `span ${column.desktop}`,
        },
      }),
    }
  }

  // row
  let formattedRow: any = {}
  if (row) {
    formattedRow = {
      gridRow: `span ${typeof row === "number" ? row : row.mobile}`,
      ...(typeof row !== "number" && {
        "@tablet": {
          gridRow: `span ${row.tablet}`,
        },
        "@desktop": {
          gridRow: `span ${row.desktop}`,
        },
      }),
    }
  }

  return (
    <Box
      css={{
        display: "unset",
        borderRadius: "$8",
        minHeight: 128,
        backgroundColor: "$colors$panelBackground",
        border: "1px solid $colors$border",
        padding: "$16",
        ...formattedColumn,
        ...formattedRow,
      }}
    >
      {children}
    </Box>
  )
}
