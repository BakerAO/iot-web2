import { useEffect, useState } from 'react'
import {
  IconButton,
  Menu,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import api from '../../../data/api'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

export default function Controls() {
  const [validToken, setValidToken] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const open = !!anchorEl

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const verifyToken = async (token) => await api.get(
    '/account/verify_token',
    {
      headers: {
        auth_token: token
      }
    }
  )

  useEffect(() => {
    const innov8Token = localStorage.getItem('innov8_token')

    try {
      if (innov8Token) {
        const result = verifyToken(innov8Token)
        setValidToken(result?.status === 200)
      }
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
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {validToken ? <LoggedIn /> : <LoggedOut />}
      </Menu>
    </>
  )
}
