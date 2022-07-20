import {
  Button,
  Grid,
} from '@mui/material'

export default function LoggedIn() {
  const handleLogOut= () => {
    return null
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button onClick={handleLogOut}>Log Out</Button>
      </Grid>
    </Grid>
  )
}
