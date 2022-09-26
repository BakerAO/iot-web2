import { useEffect, useState } from 'react'
import { Grid } from "@mui/material"
import api from  '../../../data/api'
import { useDataContext } from '../../../context/DataContext'

export default function Schedule() {
  const { data } = useDataContext()
  const [deviceData, setDeviceData] = useState(null)

  useEffect(() => {
    const getDeviceData = async () => {
      try {
        const token = localStorage.getItem('innov8_token')
        if (token && data?.selectedDeviceId) {
          const headers = { auth_token: token }
          const result = await api.get(`/schedule/${data.selectedDeviceId}`, { headers })
          setDeviceData(result?.data)
        }
      } catch (e) {
        setDeviceData(null)
        console.error(e)
      }
    }

    getDeviceData()
  }, [data?.selectedDeviceId])

  return (
    <Grid container spacing={1} className="iot-schedule">
      <Grid item xs={12} sx={{ height: '42vh' }}>
        <div>{deviceData}</div>
      </Grid>
      <Grid item xs={12} sx={{ height: '40vh', overflow: 'auto' }}>
        <div>{data?.selectedDeviceId}</div>
      </Grid>
    </Grid>
  )
}
