import { useMemo } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { DeleteForeverRounded as DeleteIcon } from '@mui/icons-material'
import { format } from 'date-fns'
import api from '../../../../data/api'

export default function CreateForm(props) {
  const { deviceId, schedules, refetch } = props

  const handleClick = async () => {
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

  const cards = useMemo(() => {
    return schedules.map(s => (
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
          <DeleteIcon color="error" />
        </CardActions>
      </Card>
    ))
  }, [schedules])

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '20px', height: '70%', overflowX: 'auto' }}>
        {cards}
      </div>
      <Button variant="outlined" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  )
}
