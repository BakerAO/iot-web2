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
  const { devices, setSelectedId } = props

  const menuDevices = useMemo(() => {
    const listItems = []
    for (const [k, v] of devices) {
      listItems.push(
        <MenuItem
          key={k}
          device={v}
          setSelectedId={setSelectedId}
        />
      )
    }
    return listItems
  }, [devices, setSelectedId])

  return (
    <Paper sx={styles.container}>
      <List component="nav">
        {menuDevices}
      </List>
    </Paper>
  )
}
