import { Grid } from '@mui/material'
import Controls from './Controls'
import Notifications from './Notifications'

export default function Header() {
  return (
    <Grid container>
      <Grid item xs={6} />
      <Grid item xs={3}>
        <Notifications />
      </Grid>
      <Grid item xs={3}>
        <Controls />
      </Grid>
    </Grid>
  )
}
