import { ReactNode } from "react"

export type Car = {
  id: string,
  photo: string,
  name: string,
  model: string,
  licensePlate: string,
  value: number
}

export type Credentials = {
  username: string,
  password: string
}


export type UserContextType = {
  carros: Car[],
  getCars: () => void,
  token: boolean,
  setToken: (value: boolean) => void,
  name: string,
  setName: (value: string) => void,
  model: string,
  setModel: (value: string) => void,
  licensePlate: string,
  setLicensePlate: (value: string) => void,
  photo: string,
  setPhoto: (value: string) => void,
  value: number,
  setValue: (value: number) => void,
  addCar: () => void,
  id: string,
  setId: (value: string) => void
}



export type UserContextProps = {
  children: ReactNode
}