import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@mui/material'
import { DeviceProvider } from '../context/DeviceContext'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const mdTheme = createTheme();

export default function Main() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container>
            <Grid container className="iot-start">
              <DeviceProvider>
                <Header />
                <Body />
                <Footer />
              </DeviceProvider>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
