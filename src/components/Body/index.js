import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Content from './Content'
import Menu from './Menu'
import api from '../../data/api'

export default function Body() {
  const [devices, setDevices] = useState([])

  const getDevices = async () => {
    try {
      const token = localStorage.getItem('innov8_token')
      if (token) {
        const headers = { auth_token: token }
        const result = await api.get('/simple_motors', { headers })
        const newDevices = []
        for (const device of result?.data) {
          newDevices.push({
            id: device.id,
            alias: device.alias,
            records: device.records
          })
        }
        setDevices(newDevices)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getDevices()
  }, [])

  return (
    <Grid container justifyContent="center" pt={5} className="iot-body">
      <Grid container item xs={3} pr={2}>
        <Menu devices={devices} />
      </Grid>
      <Grid container item xs={9}>
        <Content devices={devices} />
      </Grid>
    </Grid>
  )
}
