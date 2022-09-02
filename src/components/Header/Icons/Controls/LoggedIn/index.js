import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from '@mui/material'
import RegisterDeviceForm from './RegisterDeviceForm'

export default function LoggedIn(props) {
  const { setValidToken } = props

  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(!open)
  }

  const handleLogOut= () => {
    localStorage.removeItem('innov8_token')
    setValidToken(false)
    window.location.replace('/')
  }

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={6}>
        <Button onClick={handleModal}>Register Device</Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleLogOut}>Log Out</Button>
      </Grid>
      <Dialog
        open={open}
        onClose={handleModal}
      >
        <DialogTitle>
          Account
        </DialogTitle>
        <DialogContent>
          <RegisterDeviceForm handleModal={handleModal} />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
