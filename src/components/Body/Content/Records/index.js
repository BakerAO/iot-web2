import { useMemo } from 'react'
import {
  Box,
  Card,
  CardHeader
} from "@mui/material"
import ValveButton from './ValveButton'
import SimpleMotorTable from './SimpleMotorTable'
import ThermometerTable from './ThermometerTable'

export default function Records(props) {
  const { selectedDevice } = props

  const table = useMemo(() => {
    if (selectedDevice?.type === 'simple_motor') {
      return <SimpleMotorTable selectedDevice={selectedDevice} />
    } else if (selectedDevice?.type === 'thermometer') {
      return <ThermometerTable selectedDevice={selectedDevice} />
    }
    return null
  }, [selectedDevice])

  return (
    <Card>
      <CardHeader
        title="Records"
        action={<ValveButton latest={{ id: selectedDevice?.id, ...selectedDevice?.records[0] }} />}
      />
      <Box sx={{ minWidth: 800 }}>
        {table}
      </Box>
    </Card>
  )
}
