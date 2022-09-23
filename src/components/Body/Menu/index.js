import { useEffect, useMemo, useState } from 'react'
import {
  List,
  Paper
} from "@mui/material";
import api from '../../../data/api'
import MenuItem from './MenuItem'

const styles = {
  container: {
    p: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}

export default function Menu() {
  const [deviceList, setDeviceList] = useState([])

  const getDeviceList = async () => {
    try {
      const token = localStorage.getItem('innov8_token')
      if (token) {
        const headers = { auth_token: token }
        const result = await api.get('/devices', { headers })
        const newDevices = []
        for (const device of result?.data) {
          newDevices.push({
            id: device.id,
            alias: device.alias,
            type: device.type
          })
        }
        setDeviceList(newDevices)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getDeviceList()
  }, [])

  const menuDevices = useMemo(() => {
    const listItems = []
    for (const device of deviceList) {
      listItems.push(
        <MenuItem
          key={device.id}
          device={device}
        />
      )
    }
    return listItems
  }, [deviceList])

  return (
    <Paper sx={styles.container}>
      <List component="nav">
        {menuDevices}
      </List>
    </Paper>
  )
}
