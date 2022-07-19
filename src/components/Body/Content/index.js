import { Grid } from "@mui/material";
import Map from './Map'
import Records from './Records'

export default function Content() {
  return (
    <Grid container spacing={3} xs={12}>
      <Grid item xs={12}>
        <Map />
      </Grid>
      <Grid item xs={12}>
        <Records />
      </Grid>
    </Grid>
  )
}
