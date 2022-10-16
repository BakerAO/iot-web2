import { Card, Grid } from '@mui/material'
import { useDeviceContext } from '../../../context/DeviceContext'
import Calendar from './Calendar'
import CreateForm from './CreateForm'
import useSchedules from './useSchedules'

export default function Schedule() {
  const { device } = useDeviceContext()

  const { schedules, refetch } = useSchedules(device?.id)

  return (
    <Grid container spacing={1} className="iot-schedule">
      <Grid item xs={12}>
        <Card sx={{ height: '57vh', width: '100%' }}>
          <Calendar
            deviceId={device?.id}
            schedules={schedules}
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ height: '25vh', width: '100%' }}>
          <CreateForm
            deviceId={device?.id}
            schedules={schedules}
            refetch={refetch}
          />
        </Card>
      </Grid>
    </Grid>
  )
}
