import { Button } from "@mui/material"

export default function ValveButton(props) {
  const { latest } = props

  const handleClose = () => {
    return
  }

  const handleOpen = () => {
    return
  }

  if (latest?.valve_status === 'open') {
    return (
      <Button variant="outlined" onClick={handleClose}>
        Close Valve
      </Button>
    )
  } else if (latest?.valve_status === 'closed') {
    <Button variant="outlined" onClick={handleOpen}>
      Open Valve
    </Button>
  } else {
    return
  }
}
