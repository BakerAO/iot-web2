import {
  TableCell,
  TableHead,
  TableRow
} from "@mui/material"

export default function TableHeader() {

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          Alias
        </TableCell>
        <TableCell>
          Battery
        </TableCell>
        <TableCell sortDirection="desc">
          Date
        </TableCell>
        <TableCell>
          Value Status
        </TableCell>
      </TableRow>
    </TableHead>
  )
}
