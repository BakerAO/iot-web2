import { ListItemButton } from "@mui/material";

export default function MenuItem(props) {
  const { device, setSelectedId } = props

  return (
    <ListItemButton onClick={() => setSelectedId(device.id)}>
      {device.alias}
    </ListItemButton>
  )
}
