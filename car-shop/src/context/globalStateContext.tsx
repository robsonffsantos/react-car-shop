import { createContext, useContext, useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import { Car, UserContextProps, UserContextType } from '../types/types'

export const GlobalStateContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  let [carros, setCarros] = useState<Car[]>([])

  const getCars = async() => {
    await axios.get(`${BASE_URL}/carro`)
    .then((res) => {
      const cars = res.data
      cars.sort((a: number, b: number) => a.value - b.value)
        setCarros(cars)
    })
    .catch((error) => {
      console.log(error)
    })
  }  

  useEffect (() => {
    getCars()
  }, [])

  const variables = { carros, getCars }

  return (
    <GlobalStateContext.Provider value={variables}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export function useUser(): UserContextType {
  const context = useContext(GlobalStateContext)

  if (!context) {
    throw new Error('UserProvider Error')
  }

  return context
}