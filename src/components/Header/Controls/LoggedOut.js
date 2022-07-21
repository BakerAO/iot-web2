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

  const handleModal = () => {
    setOpen(!open)
  }

  const handleLogIn = () => {
    setRegisterForm(false)
    handleModal()
  }

  const handleRegister = () => {
    setRegisterForm(true)
    handleModal()
  }

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={6}>
        <Button onClick={handleLogIn}>Log In</Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleRegister}>Register</Button>
      </Grid>
      <Dialog
        open={open}
        onClose={handleModal}
      >
        <DialogTitle>
          Account
        </DialogTitle>
        <DialogContent>
          {registerForm
            ? <RegisterForm handleModal={handleModal} />
            : <LogInForm handleModal={handleModal} />
          }
        </DialogContent>
        <DialogActions>
            <Button onClick={handleModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
