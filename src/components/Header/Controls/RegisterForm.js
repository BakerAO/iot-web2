import {
  Button,
  Grid,
  TextField
} from '@mui/material'

export default function RegisterForm() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <TextField
          type="email"
          placeholter="john@email.com"
          label="Email"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="password"
          placeholter="john@email.com"
          label="Password"
        />
      </Grid>
      <Grid item xs={6}>
        <Button>Submit</Button>
      </Grid>
    </Grid>
  )
}
