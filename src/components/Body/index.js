import { Grid } from '@mui/material'
import Content from './Content'
import Menu from './Menu'

const styles = {
  container: {
    justifyContent: 'center',
    height: '85vh'
  }
}

export default function Body() {
  return (
    <Grid container pt={5} style={styles.container} className="iot-body">
      <Grid container item xs={3} pr={1}>
        <Menu />
      </Grid>
      <Grid container item xs={9}>
        <Content />
      </Grid>
    </Grid>
  )
}
