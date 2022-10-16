import { useEffect, useState } from 'react'
import { Grid } from "@mui/material"
import { useDeviceContext } from '../../../context/DeviceContext'
import api from '../../../data/api'
import Map from './Map'
import Records from './Records'

export default function MapAndRecords() {
  const { device } = useDeviceContext()

  const [selectedDevice, setSelectedDevice] = useState(null)

  useEffect(() => {
    const getSelectedDevice = async () => {
      try {
        const token = localStorage.getItem('innov8_token')
        if (token && device?.id) {
          const headers = { auth_token: token }
          const result = await api.get(`/device/${device.id}`, { headers })
          setSelectedDevice(result?.data)
        }
      } catch (e) {
        setSelectedDevice(null)
        console.error(e)
      }
    }

    getSelectedDevice()

    const interval = setInterval(() => {
      getSelectedDevice()
    }, 5000)

    return () => clearInterval(interval)
  }, [device?.id])

  return (
    <Grid container spacing={1} className="iot-mapandrecords">
      <Grid item xs={12} sx={{ height: '42vh' }}>
        <Map devices={[selectedDevice]} />
      </Grid>
      <Grid item xs={12} sx={{ height: '40vh', overflow: 'auto' }}>
        <Records selectedDevice={selectedDevice} />
      </Grid>
    </Grid>
  )
}
