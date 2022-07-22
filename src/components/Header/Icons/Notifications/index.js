import {
  Badge,
  IconButton,
} from '@mui/material'
import { Notifications as NotificationsIcon } from '@mui/icons-material'

export default function Notifications() {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  )
}
