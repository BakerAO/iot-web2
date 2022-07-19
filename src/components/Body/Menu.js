import {
  Divider,
  Grid,
  List,
  Paper
} from "@mui/material";


export default function Menu() {
  return (
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <List component="nav">
          First List Item
          <Divider sx={{ my: 1 }} />
          Second List Item
        </List>
      </Paper>
  )
}
