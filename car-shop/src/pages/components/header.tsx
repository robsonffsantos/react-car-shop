import { AdmArea, AdministrativeArea, HeaderBar, Locker, LoginArea } from "./styles"
import Lock from '../../assets/protect.png'
import { useState } from "react"

const Header = () => {
    const [login, setLogin] = useState<boolean>(false)

    return (
        <HeaderBar>
            CAR SHOP
            <AdministrativeArea onClick={() => setLogin(!login)}>
                {!login ? 
                    <AdmArea>
                        <Locker src={Lock} /> <div>Área administrativa</div> 
                    </AdmArea> :
                    <LoginArea>
                        <div>username <input></input></div>
                        <div>password <input></input></div>
                        <button>LOGIN</button>
                    </LoginArea>
                }
                
            </AdministrativeArea>
        </HeaderBar>
    )
}

export default Header