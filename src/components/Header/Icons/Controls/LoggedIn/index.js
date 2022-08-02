import { Button } from '@mui/material'

export default function LoggedIn(props) {
  const { setValidToken } = props

  const handleLogOut= () => {
    localStorage.removeItem('innov8_token')
    setValidToken(false)
    window.location.replace('/')
  }

  return (
    <div style={{ }}>
        <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  )
}
