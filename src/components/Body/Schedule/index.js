import { Card, Grid } from '@mui/material'
import { useDataContext } from '../../../context/DataContext'
import Calendar from './Calendar'
import CreateForm from './CreateForm'
import useSchedules from './useSchedules'

export default function Schedule() {
  const { data } = useDataContext()
  const schedules = useSchedules(data?.selectedDeviceId)

  return (
    <Grid container spacing={1} className="iot-schedule">
      <Grid item xs={12}>
        <Card sx={{ height: '42vh', width: '100%' }}>
          <Calendar
            deviceId={data?.selectedDeviceId}
            schedules={schedules}
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ height: '40vh', width: '100%', overflow: 'auto' }}>
          <CreateForm
            deviceId={data?.selectedDeviceId}
            schedules={schedules}
          />
        </Card>
      </Grid>
    </Grid>
  )
}
