import { useCallback, useEffect, useState } from 'react'
import { Button, Card, Grid } from "@mui/material"
import api from  '../../../data/api'
import { useDataContext } from '../../../context/DataContext'
import Calendar from './Calendar'

export default function Schedule() {
  const { data } = useDataContext()
  const [deviceData, setDeviceData] = useState([])

  const getDeviceData = useCallback(async () => {
    try {
      const token = localStorage.getItem('innov8_token')
      if (token && data?.selectedDeviceId) {
        const headers = { auth_token: token }
        const result = await api.get(`/schedule/${data.selectedDeviceId}`, { headers })
        setDeviceData(result?.data?.schedules ?? [])
      }
    } catch (e) {
      setDeviceData([])
      console.error(e)
    }
  }, [data?.selectedDeviceId])

  useEffect(() => {
    getDeviceData()
  }, [data?.selectedDeviceId, getDeviceData])

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
        await api.post(`/schedule/${data.selectedDeviceId}`, payload, options)
        await getDeviceData()
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Grid container spacing={1} className="iot-schedule">
      <Grid item xs={12}>
        <Card sx={{ height: '42vh', width: '100%' }}>
          <Calendar deviceData={deviceData} />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ height: '40vh', width: '100%', overflow: 'auto' }}>
          <div>{data?.selectedDeviceId}</div>
          <Button variant="outlined" onClick={handleClick}>
            Click Me
          </Button>
        </Card>
      </Grid>
    </Grid>
  )
}
