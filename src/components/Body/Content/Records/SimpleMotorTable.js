import { useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material"
import TableHeader from './TableHeader'

export default function SimpleMotorTable(props) {
  const { selectedDevice } = props

  const tableRows = useMemo(() => {
    return selectedDevice?.records
      ? selectedDevice.records.map(r => (
        <TableRow hover key={r.datetime}>
          <TableCell>{selectedDevice.alias}</TableCell>
          <TableCell>{r.battery}</TableCell>
          <TableCell>{r.datetime}</TableCell>
          <TableCell>{r.valve_status}</TableCell>
        </TableRow>
      ))
      : []
  }, [selectedDevice])

  return (
    <Table>
      <TableHeader />
      <TableBody>
        {tableRows}
      </TableBody>
    </Table>
  )
}
