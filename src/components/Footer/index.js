import { Grid } from '@mui/material'
import Copyright from './Copyright'

export default function Footer() {
  return (
    <Grid container className="iot-footer">
      <Grid item xs={12}>
        <Copyright sx={{ pt: 4 }} />
      </Grid>
    </Grid>
  )
}
