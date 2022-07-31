import { useMemo } from 'react'
import {
  Box,
  Card,
  CardHeader
} from "@mui/material"
import ValveButton from './ValveButton'
import SimpleMotorTable from './SimpleMotorTable'

export default function Records(props) {
  const { selectedDevice } = props

  const table = useMemo(() => {
    if (selectedDevice?.type === 'simple_motor') {
      return <SimpleMotorTable selectedDevice={selectedDevice} />
    }
    return null
  }, [selectedDevice])

  return (
    <Card>
      <CardHeader
        title="Records"
        action={
          <ValveButton latest={selectedDevice?.records[0]} />
        }
      />
      <Box sx={{ minWidth: 800 }}>
        {table}
      </Box>
    </Card>
  )
}
