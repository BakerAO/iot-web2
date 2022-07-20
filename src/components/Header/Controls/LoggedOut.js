import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from '@mui/material'
import RegisterForm from './RegisterForm'
import LogInForm from './LogInForm'

export default function LoggedOut() {
  const [open, setOpen] = useState(false)
  const [registerForm, setRegisterForm] = useState(false)

  const handleLogIn = () => {
    setRegisterForm(false)
    setOpen(true)
  }

  const handleRegister = () => {
    setRegisterForm(true)
    setOpen(true)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button onClick={handleLogIn}>Log In</Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleRegister}>Register</Button>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          Account
        </DialogTitle>
        <DialogContent>
          {registerForm ? <RegisterForm /> : <LogInForm />}
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
