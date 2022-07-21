import { Grid } from '@mui/material'
import Menu from './Menu'
import Content from './Content'

export default function Body() {
  return (
    <Grid container justifyContent="center" pt={5} className="iot-body">
      <Grid container item xs={3} pr={2}>
        <Menu />
      </Grid>
      <Grid container item xs={9}>
        <Content />
      </Grid>
    </Grid>
  )
}
