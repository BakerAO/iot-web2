import { ListItemButton } from "@mui/material"
import { useDataContext } from '../../../context/DataContext'

export default function MenuItem(props) {
  const { device } = props
  const { data, setData } = useDataContext()

  const setSelectedId = () => {
    setData({ ...data, selectedDeviceId: device.id })
  }

  return (
    <ListItemButton onClick={() => setSelectedId()}>
      {device.alias}
    </ListItemButton>
  )
}
