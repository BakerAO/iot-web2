import { useMemo } from 'react'
import {
  List,
  Paper
} from "@mui/material";
import MenuItem from './MenuItem'

const styles = {
  container: {
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}

export default function Menu(props) {
  const { devices } = props

  const menuDevices = useMemo(() => {
    return devices.map(d => {
      return <MenuItem key={d.id} device={d} />
    })
  }, [devices])

  return (
    <Paper sx={styles.container}>
      <List component="nav">
        {menuDevices}
      </List>
    </Paper>
  )
}
