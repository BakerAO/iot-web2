import { useEffect, useState } from 'react'
import {
  IconButton,
  Menu,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import api from '../../../../data/api'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

export default function Controls() {
  const [validToken, setValidToken] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const openControls = !!anchorEl

  const handleOpenControls = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseControls = () => {
    setAnchorEl(null)
  }

  const verifyToken = async (token) => {
    const result = await api.get(
      '/account/verify_token',
      {
        headers: {
          auth_token: token
        }
      }
    )
    setValidToken(result?.status === 200)
  }

  useEffect(() => {
    const innov8Token = localStorage.getItem('innov8_token')

    try {
      if (innov8Token) verifyToken(innov8Token)
    } catch (e) {
      setValidToken(false)
    }
  }, [])

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpenControls}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openControls}
        onClose={handleCloseControls}
      >
        {validToken
          ? <LoggedIn setValidToken={setValidToken} />
          : <LoggedOut setValidToken={setValidToken} />
        }
      </Menu>
    </>
  )
}
