import { Paper } from "@mui/material";

export default function Records(props) {
  const { selectedDevice } = props

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 240,
      }}
    >
      Records
      {selectedDevice?.alias}
    </Paper>
  )
}
