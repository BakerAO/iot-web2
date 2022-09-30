import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

export default function Calendar(props) {
  const { deviceData } = props

  console.log(deviceData)

  return (
    <Grid container>
      <Grid item xs={12} sx={{ height: '5vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 3 }} />
        <Button sx={{ flex: 1 }}>
          <ChevronLeft color={'action'} />
        </Button>
        <Typography
          component="h4"
          variant="h6"
          color="blue"
          noWrap
          sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        >
          October
        </Typography>
        <Button sx={{ flex: 1 }}>
          <ChevronRight color={'action'} />
        </Button>
        <div style={{ flex: 3 }} />
      </Grid>
      <Grid item xs={12} sx={{ height: '37vh' }}>
        Body
      </Grid>
    </Grid>
  )
}
