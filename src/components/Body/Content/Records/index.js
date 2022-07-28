import { useMemo } from 'react'
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material";
import { format } from "date-fns";
import TableHeader from './TableHeader'

export default function Records(props) {
  const { selectedDevice } = props

  const tableRows = useMemo(() => {
    return (
      <TableRow hover key={order.id}>
        <TableCell>{order.ref}</TableCell>
        <TableCell>{order.customer.name}</TableCell>
        <TableCell>{format(order.createdAt, 'yyyy-MM-dd')}</TableCell>
        <TableCell>{order.status}</TableCell>
      </TableRow>
    )
  })

  return (
    <Card>
      <CardHeader title="Records" />
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHeader />
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{format(order.createdAt, 'yyyy-MM-dd')}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  )
}
