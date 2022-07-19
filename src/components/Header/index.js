import {
  AppBar,
  Grid,
  Toolbar,
} from '@mui/material'
import Title from './Title'
import Icons from './Icons'

export default function Header() {
  return (
    <Grid container p={2} className="iot-header">
      <Grid item xs={12}>
         <AppBar>
          <Toolbar>
            <Grid container>
              <Grid item xs={9} display="flex" alignItems="center">
                <Title />
              </Grid>
              <Grid item xs={3}>
                <Icons />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  )
}
