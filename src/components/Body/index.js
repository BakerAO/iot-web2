import { Grid } from '@mui/material'
import Content from './Content'
import Menu from './Menu'

export default function Body(props) {
  const { devices, selectedDevice, setSelectedId } = props

  return (
    <Grid container justifyContent="center" pt={5} className="iot-body">
      <Grid container item xs={3} pr={2}>
        <Menu 
          devices={devices}
          selectedId={selectedDevice?.id}
          setSelectedId={setSelectedId}
        />
      </Grid>
      <Grid container item xs={9}>
        <Content
          devices={devices}
          selectedDevice={selectedDevice}
        />
      </Grid>
    </Grid>
  )
}
