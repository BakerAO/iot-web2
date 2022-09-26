import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

export default function Title() {
  return (
    <>
      <Link to="/">
        <Typography
          component="h1"
          variant="h6"
          color="white"
          noWrap
          sx={{ flexGrow: 1, marginRight: '15px' }}
        >
            Dashboard
        </Typography>
      </Link>
      <Link to="/schedule">
        <Typography
          component="h1"
          variant="h6"
          color="white"
          noWrap
          sx={{ flexGrow: 1 }}
        >
            Schedule
        </Typography>
      </Link>
    </>
  )
}
