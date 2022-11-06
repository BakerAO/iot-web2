import ScheduleCards from './ScheduleCards'
import CreateForm from './CreateForm'

export default function CardsAndForm(props) {
  const { deviceId, schedules, refetch } = props

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '20px', height: '50%', overflowX: 'auto' }}>
        <ScheduleCards
          deviceId={deviceId}
          schedules={schedules}
          refetch={refetch}
        />
      </div>
      <div style={{ display: 'flex', height: '50%' }}>
        <CreateForm
          deviceId={deviceId}
          refetch={refetch}
        />
      </div>
    </div>
  )
}
