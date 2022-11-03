import { AdmArea, AdministrativeArea, HeaderBar, Locker, LoginArea, LoginButton } from "./styles"
import Lock from '../../assets/protect.png'
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"

const Header = () => {
    const [login, setLogin] = useState<boolean>(false)
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [token, setToken] = useState<boolean>(false)

    const handleSubmit = (username: string, password: string) => {
        const body = {
          username: user,
          password: password
        }
      
        axios.post(`${BASE_URL}/auth/login`, body)
          .then(response => {
            const access_token  =  response.data.access_token
            localStorage.setItem("token", access_token)
            setToken(true)
          })
    }

    return (
        <HeaderBar>
            CAR SHOP
            <AdministrativeArea>
                {!login && !token ? 
                    <AdmArea onClick={() => setLogin(!login)}>
                        <Locker src={Lock} /> <div>Área administrativa</div> 
                    </AdmArea> :
                    login && !token ?
                    <LoginArea>
                        <div>username <input type="text" onChange={e => setUser(e.target.value)}></input></div>
                        <div>password <input type="password" onChange={e => setPassword(e.target.value)}></input></div>
                        <LoginButton type="submit" onClick={() => handleSubmit(user, password)}>LOGIN</LoginButton>
                    </LoginArea> :
                    <div>
                        Olá Admin!
                    </div>
                }            
            </AdministrativeArea>
        </HeaderBar>
    )
}

export default Header