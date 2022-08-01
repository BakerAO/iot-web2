import { useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material"
import BatteryStatus from './BatteryStatus'

export default function SimpleMotorTable(props) {
  const { selectedDevice } = props

  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1)

  const tableRows = useMemo(() => {
    return selectedDevice?.records
      ? selectedDevice.records.map(r => (
        <TableRow hover key={`${selectedDevice.id} ${r.datetime}`}>
          <TableCell>{r.datetime}</TableCell>
          <TableCell>{selectedDevice.alias}</TableCell>
          <TableCell><BatteryStatus voltage={r.battery} /></TableCell>
          <TableCell>{capitalize(r.valve_status)}</TableCell>
        </TableRow>
      ))
      : []
  }, [selectedDevice])

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sortDirection="desc">
            Datetime
          </TableCell>
          <TableCell>
            Alias
          </TableCell>
          <TableCell>
            Battery
          </TableCell>
          <TableCell>
            Value Status
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableRows}
      </TableBody>
    </Table>
  )
}
