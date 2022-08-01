import { useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material"
import BatteryStatus from './BatteryStatus'

export default function ThermometerTable(props) {
  const { selectedDevice } = props

  const calcF = (temp) => Math.round((temp * 9 / 5) + 32)

  const tableRows = useMemo(() => {
    return selectedDevice?.records
      ? selectedDevice.records.map(r => (
        <TableRow hover key={`${selectedDevice.id} ${r.datetime}`}>
          <TableCell>{r.datetime}</TableCell>
          <TableCell>{selectedDevice.alias}</TableCell>
          <TableCell><BatteryStatus voltage={r.battery} /></TableCell>
          <TableCell>{`${calcF(r.temperature)}°F / ${r.temperature}°C`}</TableCell>
          <TableCell>{`${r.humidity}%`}</TableCell>
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
            Temperature
          </TableCell>
          <TableCell>
            Humidity
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableRows}
      </TableBody>
    </Table>
  )
}
