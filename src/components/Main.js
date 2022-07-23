import { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@mui/material'
import api from '../data/api'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const mdTheme = createTheme();

export default function Main() {
  const [devices, setDevices] = useState(new Map())
  const [selectedId, setSelectedId] = useState(null)

  const selectedDevice = useMemo(() => {
    return devices.get(selectedId)
  }, [devices, selectedId])

  const getDevices = async () => {
    try {
      const token = localStorage.getItem('innov8_token')
      if (token) {
        const headers = { auth_token: token }
        const result = await api.get('/simple_motors', { headers })
        const newDevices = new Map()
        for (const device of result?.data) {
          newDevices.set(device.id, {
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
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container>
            <Grid container className="iot-start">
              <Header />
              <Body
                devices={devices}
                selectedDevice={selectedDevice}
                setSelectedId={setSelectedId}
              />
              <Footer />
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
