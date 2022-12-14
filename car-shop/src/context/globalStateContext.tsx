import { createContext, useContext, useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import { Car, UserContextProps, UserContextType } from '../types/types'

export const GlobalStateContext = createContext({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  let [carros, setCarros] = useState<Car[]>([])
  const [token, setToken] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const [licensePlate, setLicensePlate] = useState<string>('')
  const [photo, setPhoto] = useState<string>('')
  const [value, setValue] = useState<number>(0)
  const [id, setId] = useState<string>('')

  const checkToken = () => {
    const access_token = localStorage.getItem('token')
    if (access_token) {
      setToken(true)
    }
  }

  const getCars = async() => {
    await axios.get(`${BASE_URL}/carro`)
    .then((res) => {
      const cars = res.data
      cars.sort((a:any, b:any) => a.value - b.value)
        setCarros(cars)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const addCar = () => {
    const access_token = localStorage.getItem('token')
    const auth: any = { headers: { Authorization: `bearer ${access_token}` } }
    const body = {
      "name": name,
      "model": model,
      "licensePlate": licensePlate,
      "photo": photo,
      "value": +value
    }

    axios.post(`${BASE_URL}/carro`, body, auth)
    .then((response) => {
      alert('Carro adicionado com sucesso')
      getCars()
    }).catch((error) => {
      alert('Verifique se os dados estão corretos e tente novamente')
    })
  }

  const removeCar = async() => {
    const access_token = localStorage.getItem('token')
    const auth: any = { headers: { Authorization: `bearer ${access_token}` }}

    await axios.delete(`${BASE_URL}/carro/${id}`, auth)
    .then((response) => {
      alert('Carro removido com sucesso')
      getCars()
    }).catch((error) => {
      alert('Ocorreu um erro ao remover esse carro')
    })
  }

  useEffect (() => {
    checkToken()
    getCars()
  }, [])

  const variables = { carros, getCars, setToken, token, name, setName, model, setModel, licensePlate, setLicensePlate, photo, setPhoto, value, setValue, addCar, setId, removeCar, id }

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