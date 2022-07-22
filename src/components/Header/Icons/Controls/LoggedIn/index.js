import {
  Button,
  Grid,
} from '@mui/material'

export default function LoggedIn(props) {
  const { setValidToken } = props

  const handleLogOut= () => {
    localStorage.removeItem('innov8_token')
    setValidToken(false)
    window.location.replace('/')
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button onClick={handleLogOut}>Log Out</Button>
      </Grid>
    </Grid>
  )
}
