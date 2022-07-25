import { useMemo } from 'react'
import { Paper } from "@mui/material";
import GoogleMap from 'google-map-react'
import Marker from './Marker'

export default function Map(props) {
  const { devices } = props

  const markers = useMemo(() => {
    const buildMarkers = []
    for (let device of devices) {
      const latestData = device?.records[0]
      if (latestData?.latitude && latestData?.longitude) {
        buildMarkers.push((
          <Marker
            key={device.id}
            lat={latestData.latitude}
            lng={latestData.longitude}
            alias={device.alias}
          />
        ))
      }
    }
    return buildMarkers
  }, [devices])

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeigh: '240px'
      }}
    >
      <div style={{ height: '100%', width: '90%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyAin1K73pA7JD0Rc-yMzg6p-Q2VEhYk22E' }}
          defaultCenter={{ lat: 33, lng: -97 }}
          defaultZoom={9}
        >
          {markers}
        </GoogleMap>
      </div>
    </Paper>
  )
}
