import { ListItemButton } from "@mui/material"
import { useDeviceContext } from '../../../context/DeviceContext'

export default function MenuItem(props) {
  const { device } = props
  const { setDevice } = useDeviceContext()

  const setSelectedId = () => {
    setDevice({
      id: device.id,
      type: device.type,
      alias: device.alias
    })
  }

  return (
    <ListItemButton onClick={() => setSelectedId()}>
      {device.alias}
    </ListItemButton>
  )
}
