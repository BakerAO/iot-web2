import { ListItem } from "@mui/material";

export default function MenuItem(props) {
  const { device } = props
  return (
    <ListItem>
      {device.alias}
    </ListItem>
  )
}
