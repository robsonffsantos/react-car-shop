import { createContext, useContext, useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import { Car, UserContextProps, UserContextType } from '../types/types'

export const GlobalStateContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  let [carros, setCarros] = useState<Car[]>([])
  // const [orderCars, setOrderCars] = useState<string[]>([])

  const getCars = async() => {
    await axios.get(`${BASE_URL}/carro`)
    .then((res) => {
        setCarros(res.data)
        console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }  

//   const orderCars = () => {
//     const keyObject = Object.keys(carros);

//     const orderCountries = keyObject.sort(
//         (a, b) => carros[b as keyof typeof carros].value - carros[a as keyof typeof carros].value
//     )

//     setOrderCars(orderCountries)
// }

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