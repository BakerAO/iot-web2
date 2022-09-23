import { BatteryChargingFull } from '@mui/icons-material';

export default function BatteryStatus(props) {
  const { voltage } = props

  let color = 'success'
  if (voltage < 4.1) color = 'warning'
  if (voltage < 3.8) color = 'error'

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <BatteryChargingFull color={color} />
      {`${voltage}v`}
    </div>
  )
}
