import { Grid } from "@mui/material";
import Map from './Map'
import Records from './Records'

export default function Content(props) {
  const { devices, selectedDevice } = props

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Map devices={devices} selectedDevice={selectedDevice} />
      </Grid>
      <Grid item xs={12}>
        <Records selectedDevice={selectedDevice} />
      </Grid>
    </Grid>
  )
}
