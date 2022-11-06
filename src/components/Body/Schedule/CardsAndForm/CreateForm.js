import { useMemo, useState } from 'react'
import {
  Alert,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {
  addMinutes,
  addYears,
  format,
  getMinutes
} from 'date-fns'
import api from '../../../../data/api'

export default function CreateForm(props) {
  const { deviceId, refetch } = props

  const [frequency, setFrequency] = useState('')
  const [duration, setDuration] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [invalidForm, setInvalidForm] = useState(false)

  const handleFrequency = (e) => {
    if (invalidForm) setInvalidForm(false)
    setFrequency(e.target.value)
  }

  const handleDuration = (e) => {
    if (invalidForm) setInvalidForm(false)
    if (!e.target.value) setDuration('')
    else {
      let value = parseInt(e.target.value)
      if (value > 1000) value = 1000
      setDuration(value)
    }
  }

  const handleStartTime = (date) => {
    if (invalidForm) setInvalidForm(false)
    const remainder = getMinutes(date) % 5
    const adjustment = remainder > 2 ? 5 - remainder : -remainder
    const rounded = addMinutes(date, adjustment)

    setStartTime(rounded)
  }

  const handleCreate = async () => {
    if (!frequency || !duration || duration === '0' || !startTime) {
      setInvalidForm(true)
      return
    }

    try {
      const startTimeUTC = new Date(startTime).toISOString()
      const token = localStorage.getItem('innov8_token')
      if (token) {
        const payload = {
          frequency,
          startTime: format(startTimeUTC, 'yyyy-MM-dd HH-mm:00'),
          durationMinutes: parseInt(duration)
        }
        const options = { headers: { auth_token: `${token}` } }
        await api.post(`/schedule/${deviceId}`, payload, options)
        refetch()
      }
    } catch (e) {
      console.log(e)
    }
  }

  const dateRange = useMemo(() => {
    const min = new Date()
    const max = addYears(min, 1)

    return { min, max }
  }, [])

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ display: 'flex', height: '70%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 15px 0 0' }}>
          <Typography>
            Frequency
          </Typography>
          <Select
            value={frequency}
            onChange={handleFrequency}
            sx={{ minWidth: '200px' }}
          >
            <MenuItem value={'daily'}>Daily</MenuItem>
            <MenuItem value={'weekly'}>Weekly</MenuItem>
            <MenuItem value={'monthly'}>Monthly</MenuItem>
          </Select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 15px 0 0'  }}>
          <Typography>
            Duration
          </Typography>
          <TextField
            type="number"
            value={duration}
            onChange={handleDuration}
            InputProps={{ inputProps: { min: 0, max: 1000 }}}
            sx={{ minWidth: '200px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 15px 0 0'  }}>
          <Typography>
            Start Time
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              value={startTime}
              onChange={handleStartTime}
              renderInput={(p) => <TextField {...p} />}
              minDate={dateRange.min}
              maxDate={dateRange.max}
              minutesStep={5}
              inputFormat="yyyy/MM/dd hh:mm a"
            />
          </LocalizationProvider>
        </div>
      </div>

      {invalidForm
        ? <Alert severity="error">Invalid Input</Alert>
        : null
      }

      <Button variant="outlined" onClick={handleCreate}>
        Click Me
      </Button>
    </div>
  )
}
