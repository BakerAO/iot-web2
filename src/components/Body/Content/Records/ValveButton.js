import { Button } from "@mui/material"
import api from '../../../../data/api'

export default function ValveButton(props) {
  const { latest } = props

  const handleClose = async () => {
    const token = localStorage.getItem('innov8_token')
    if (token) {
      await api.post(
        '/simple_motors/shut_off',
        { device_id: latest.id },
        { headers: { auth_token: `${token}` } }
      )
    }
  }

  const handleOpen = async () => {
    const token = localStorage.getItem('innov8_token')
    if (token) {
      await api.post(
        '/simple_motors/open',
        { device_id: latest.id },
        { headers: { auth_token: `${token}` } }
      )
    }
  }

  if (latest?.valve_status === 'open') {
    return (
      <Button variant="outlined" onClick={handleClose}>
        Close Valve
      </Button>
    )
  } else if (latest?.valve_status === 'closed') {
    <Button variant="outlined" onClick={handleOpen}>
      Open Valve
    </Button>
  } else {
    return
  }
}
