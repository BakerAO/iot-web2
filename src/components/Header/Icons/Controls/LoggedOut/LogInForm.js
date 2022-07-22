import { useState } from 'react'
import {
  Alert,
  Button,
  Grid,
  TextField
} from '@mui/material'
import api from '../../../../../data/api'

export default function LogInForm(props) {
  const { handleModal, setValidToken } = props
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [failedLogin, setFailedLogin] = useState(false)

  const handleSubmit = async () => {
    const data = {
      email: emailValue,
      password: passwordValue
    }

    try {
      const result = await api.post('/account/login', data)
      localStorage.setItem('innov8_token', result.data.token)
      setFailedLogin(false)
      handleModal()
      setValidToken(true)
      window.location.replace('/')
    } catch (e) {
      setFailedLogin(true)
    }
  }

  return (
    <Grid container p={2}>
      <Grid item xs={6}>
        <TextField
          error={failedLogin}
          label="Email"
          onChange={(e) => setEmailValue(e.target.value)}
          placeholter="john@email.com"
          type="email"
          value={emailValue}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          error={failedLogin}
          label="Password"
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholter="john@email.com"
          type="password"
          value={passwordValue}
        />
      </Grid>
      <Grid container p={2} justifyContent="flex-end">
        <Grid item xs={8}>
          {failedLogin
            ? <Alert severity="error">Incorrect credentials</Alert>
            : null
          }
        </Grid>
        <Grid item xs={1} />
        <Grid container item xs={3} alignItems="center" justifyContent="center">
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
