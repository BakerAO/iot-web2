import {
  Box,
  Grid,
  Paper,
  Typography
} from "@mui/material";

export default function Records(props) {
  const { selectedDevice } = props

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeigh: '240px'
      }}
    >
      <Grid container  sx={{ overflow: 'auto' }}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {selectedDevice?.alias ?? 'Records'}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box>
            {JSON.stringify(selectedDevice)}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
