import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { DeleteForeverRounded as DeleteIcon } from '@mui/icons-material'
import { format } from 'date-fns'
import api from '../../../../data/api'

export default function ScheduleCards(props) {
  const { deviceId, schedules, refetch } = props

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('innov8_token')
      if (token) {
        const payload = {
          frequency: 'monthly',
          startTime: format(new Date(), 'yyyy-MM-dd HH-mm:00'),
          durationMinutes: 60
        }
        const options = { headers: { auth_token: `${token}` } }
        await api.post(`/schedule/${deviceId}`, payload, options)
        refetch()
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {schedules.map(s => (
        <Card key={`schedule-card-${s.id}`} style={{ minWidth: '300px' }}>
          <CardHeader title={s.id} />
          <CardContent>
            <Typography variant="body2">
              {`Frequency: ${s.frequency}`}
            </Typography>
            <Typography variant="body2">
              {`Start Time: ${s.startTime}`}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <DeleteIcon color="error" onClick={handleDelete} />
          </CardActions>
        </Card>
      ))}
    </>
  )
}
