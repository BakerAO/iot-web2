import { createContext, useContext, useState } from 'react'

const DataContext = createContext()

export function useDataContext() {
  return useContext(DataContext)
}

export function DataProvider({ children }) {
  const [data, setData] = useState({
    selectedDeviceId: null
  })

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}
