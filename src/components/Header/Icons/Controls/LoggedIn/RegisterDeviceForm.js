import { useEffect, useMemo, useState } from 'react'
import {
  Alert,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import api from '../../../../../data/api'

export default function RegisterDeviceForm() {
  const [deviceId, setDeviceId] = useState('')
  const [alias, setAlias] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [deviceTypes, setDeviceTypes] = useState([])
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [generalError, setGeneralError] = useState(false)

  const handleSubmit = async () => {
    const token = localStorage.getItem('innov8_token')
    if (token) {
      try {
        await api.post('/devices/register',
          {
            id: deviceId,
            alias,
            type: selectedType
          },
          {
            headers: { auth_token: `${token}` }
          }
        )
        setSubmitSuccess(true)
        setTimeout(() => {
          window.location.replace('/')
        }, 2000);
      } catch (e) {
        console.warn(e.response.data)
        setGeneralError(true)
      }
    }
  }

  const loadDeviceTypes = async () => {
    const token = localStorage.getItem('innov8_token')
    if (token) {
      const result = await api.get(
        '/devices/types',
        { headers: { auth_token: `${token}` } }
      )
      setDeviceTypes(result.data)
    }
  }

  useEffect(() => {
    loadDeviceTypes()
  }, [])

  const deviceTypeOptions = useMemo(() => {
    const options = []
    for (const t of deviceTypes) {
      options.push(<MenuItem key={t} value={t}>{t}</MenuItem>)
    }
    return options
  }, [deviceTypes])

  return (
    <Grid container p={4}>
      <Grid item xs={12} p={2}>
        <TextField
          error={false}
          label="ID"
          onChange={(e) => setDeviceId(e.target.value)}
          type="number"
          value={deviceId}
        />
      </Grid>
      <Grid item xs={12} p={2}>
        <TextField
          error={false}
          label="Alias"
          onChange={(e) => setAlias(e.target.value)}
          type="text"
          value={alias}
        />
      </Grid>
      <Grid item xs={12} p={2}>
        <Select
          value={selectedType}
          label="Type"
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ minWidth: '250px' }}
        >
          {deviceTypeOptions}
        </Select>
      </Grid>
      <Grid container p={2} justifyContent="flex-end">
        <Grid item xs={8}>
          {generalError
            ? <Alert severity="error">Something went wrong</Alert>
            : null
          }
          {submitSuccess
            ? <Alert severity="success">
                Successfully registered
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

