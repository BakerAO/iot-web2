import { Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import Menu from './Menu'
import MapAndRecords from './MapAndRecords'
import Schedule from './Schedule'

const styles = {
  container: {
    justifyContent: 'center',
    height: '85vh'
  }
}

export default function Body() {
  return (
    <Grid container pt={5} style={styles.container} className="iot-body">
      <Grid container item xs={3} pr={1}>
        <Menu />
      </Grid>
      <Grid container item xs={9}>
        <Routes>
          <Route path="/" element={<MapAndRecords />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Grid>
    </Grid>
  )
}
