import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  Toolbar,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material'


export default function Header() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => {}}
        >
          <MenuIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
