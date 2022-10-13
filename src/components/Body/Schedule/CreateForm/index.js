import { Box, Button } from '@mui/material'
import api from '../../../../data/api'

export default function CreateForm(props) {
  const { deviceId, schedules } = props

  const handleClick = async () => {
    try {
      const token = localStorage.getItem('innov8_token')
      if (token) {
        const payload = {
          frequency: 'daily',
          startTime: '15:00',
          durationMinutes: 60
        }
        const options = { headers: { auth_token: `${token}` } }
        await api.post(`/schedule/${deviceId}`, payload, options)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box>
      <div>{deviceId}{JSON.stringify(schedules)}</div>
      <Button variant="outlined" onClick={handleClick}>
        Click Me
      </Button>
    </Box>
  )
}
