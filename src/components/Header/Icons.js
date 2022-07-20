import {
  Badge,
  Grid,
  IconButton,
} from '@mui/material'
import { Notifications as NotificationsIcon } from '@mui/icons-material'
import Controls from './Controls'

export default function Header() {
  return (
    <Grid container>
      <Grid item xs={6} />
      <Grid item xs={3}>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <Controls />
      </Grid>
    </Grid>
  )
}
