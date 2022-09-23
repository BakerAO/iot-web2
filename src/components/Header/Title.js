import { Link, Typography } from '@mui/material'

export default function Title() {
  return (
    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      sx={{ flexGrow: 1 }}
    >
      <Link to={'/'} >
        Dashboard
      </Link>
    </Typography>
  )
}
