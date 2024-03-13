import { Box, Wireframe } from "@vega/ui"

import { HistoryContainer } from "@/containers/history"
import { PortfolioContainer } from "@/containers/portfolio"

const Page = () => (
  <Box
    css={{
      display: "grid",
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
      gap: "$16",

      "@tablet": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      },

      "@desktop": {
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      },
    }}
  >
    <Wireframe column={1}>
      <PortfolioContainer />
    </Wireframe>

    <Wireframe column={{ mobile: 1, tablet: 1, desktop: 3 }}>
      <HistoryContainer />
    </Wireframe>
  </Box>
)

export default Page
