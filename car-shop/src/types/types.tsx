import { ReactNode } from "react"

export type Car = {
  id: number,
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
  token: string,
  setToken: (value: boolean) => void
}



export type UserContextProps = {
  children: ReactNode
}