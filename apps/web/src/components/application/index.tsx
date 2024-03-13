import { type ReactNode } from "react"

import { Box } from "@vega/ui"

export const Application = ({ children }: { children?: ReactNode }) => (
  <Box
    as="main"
    css={{
      flex: 1,
      flexDirection: "column",
      minHeight: "100vh",
      padding: "$16",
    }}
  >
    {children}
  </Box>
)
