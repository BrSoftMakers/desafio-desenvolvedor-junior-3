import { Box, Grid } from "@mui/material"
import { FeedCard } from "../FeedCard"

export const GridFeedCard = () => {
  const teste = [1, 2, 3, 4, 5, 6, 7, 8, 10]
  return (
    <>
      <Grid
        gridTemplateColumns={"1fr 1fr 1fr"}
        marginTop={5}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        
      >
        {teste.map((item) => {
          return (<>
            <Box marginBottom={4}>
              <FeedCard />
            </Box>
          </>)
        })}
      </Grid>
    </>
  )

}