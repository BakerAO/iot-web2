import { useEffect, useState } from 'react'
import { Grid } from "@mui/material";
import api from '../../../data/api'
import Map from './Map'
import Records from './Records'

export default function Content(props) {
  const { selectedId } = props

  const [selectedDevice, setSelectedDevice] = useState(null)

  const getSelectedDevice = async () => {
    try {
      const token = localStorage.getItem('innov8_token')
      if (token && selectedId) {
        const headers = { auth_token: token }
        const result = await api.get(`/device/${selectedId}`, { headers })
        setSelectedDevice(result?.data)
      }
    } catch (e) {
      setSelectedDevice(null)
      console.error(e)
    }
  }

  useEffect(() => {
    getSelectedDevice()
  }, [selectedId])

  return (
    <Grid container spacing={1} className="iot-content">
      <Grid item xs={12} sx={{ height: '50%' }}>
        <Map selectedDevice={selectedDevice} />
      </Grid>
      <Grid item xs={12} sx={{ height: '50%' }}>
        <Records selectedDevice={selectedDevice} />
      </Grid>
    </Grid>
  )
}
