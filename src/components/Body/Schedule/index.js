import { Card, Grid } from '@mui/material'
import { useDeviceContext } from '../../../context/DeviceContext'
import Calendar from './Calendar'
import CardsAndForm from './CardsAndForm'
import useSchedules from './useSchedules'

export default function Schedule() {
  const { device } = useDeviceContext()

  const { schedules, refetch } = useSchedules(device?.id)

  return (
    <Grid container spacing={1} className="iot-schedule">
      <Grid item xs={12}>
        <Card sx={{ height: '50vh', width: '100%' }}>
          <Calendar
            deviceId={device?.id}
            schedules={schedules}
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ height: '32vh', width: '100%' }}>
          <CardsAndForm
            deviceId={device?.id}
            schedules={schedules}
            refetch={refetch}
          />
        </Card>
      </Grid>
    </Grid>
  )
}
