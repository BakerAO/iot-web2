import { useState } from 'react'
import {
  Alert,
  Button,
  Grid,
  TextField
} from '@mui/material'
import api from '../../../../../data/api'

export default function RegisterForm(props) {
  const { handleModal } = props
  const [emailValue, setEmailValue] = useState('')
  const [passwordValueOne, setPasswordValueOne] = useState('')
  const [passwordValueTwo, setPasswordValueTwo] = useState('')
  const [generalError, setGeneralError] = useState(false)
  const [failedPasswordsMatch, setFailedPasswordsMatch] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    setFailedPasswordsMatch(false)
    setGeneralError(false)
    if (passwordValueOne !== passwordValueTwo) {
      setFailedPasswordsMatch(true)
      return
    }
    const data = {
      email: emailValue,
      password: passwordValueOne
    }

    try {
      const result = await api.post('/account/register', data)
      if (result?.status === 200) {
        setSuccess(true)
        setTimeout(() => {
          handleModal()
          window.location.replace('/')
        }, 3000)
      } else {
        setGeneralError(true)
      }
    } catch (e) {
      setGeneralError(true)
    }
  }

  return (
    <Grid container p={4}>
      <Grid item xs={12} p={2}>
        <TextField
          error={failedPasswordsMatch}
          label="Email"
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          value={emailValue}
        />
      </Grid>
      <Grid item xs={12} p={2}>
        <TextField
          error={failedPasswordsMatch}
          label="Password"
          onChange={(e) => setPasswordValueOne(e.target.value)}
          type="password"
          value={passwordValueOne}
        />
      </Grid>
      <Grid item xs={12} p={2}>
        <TextField
          error={failedPasswordsMatch}
          label="Re-Enter Password"
          onChange={(e) => setPasswordValueTwo(e.target.value)}
          type="password"
          value={passwordValueTwo}
        />
      </Grid>
      <Grid container p={2} justifyContent="flex-end">
        <Grid item xs={8}>
          {generalError
            ? <Alert severity="error">Something went wrong</Alert>
            : null
          }
          {failedPasswordsMatch
            ? <Alert severity="error">Passwords must match</Alert>
            : null
          }
          {success
            ? <Alert severity="success">
                Successfully registered, please log in
              </Alert>
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
