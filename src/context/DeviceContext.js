import { createContext, useContext, useState } from 'react'

const DeviceContext = createContext()

const defaultState = {
  id: '',
  alias: '',
  type: ''
}

export function useDeviceContext() {
  return useContext(DeviceContext)
}

export function DeviceProvider({ children }) {
  const [device, setDevice] = useState(defaultState)

  return (
    <DeviceContext.Provider value={{ device, setDevice }}>
      {children}
    </DeviceContext.Provider>
  )
}
