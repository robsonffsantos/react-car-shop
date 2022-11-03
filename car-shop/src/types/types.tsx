import { ReactNode } from "react"

export type Car = {
  id: number,
  photo: string,
  name: string,
  model: string,
  licensePlate: string,
  value: number
}


export type UserContextType = {
  carros: Car[],
  getCars: () => void
}



export type UserContextProps = {
  children: ReactNode
}