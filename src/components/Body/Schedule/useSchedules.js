import { useCallback, useState, useEffect } from 'react'
import api from '../../../data/api'

export default function useSchedules(deviceId) {
  const [schedules, setSchedules] = useState([])

  const getSchedules = useCallback(async () => {
    try {
      const token = localStorage.getItem('innov8_token')
      if (token && deviceId) {
        const headers = { auth_token: token }
        const result = await api.get(`/schedule/${deviceId}`, { headers })
        setSchedules(result?.data?.schedules ?? [])
      }
    } catch (e) {
      setSchedules([])
      console.error(e)
    }
  }, [deviceId])

  useEffect(() => {
    getSchedules()
  }, [deviceId, getSchedules])

  return schedules
}
