import { AdministrativeArea, HeaderBar, Locker } from "./styles"
import Lock from '../../assets/protect.png'

const Header = () => {
    return (
        <HeaderBar>
            CAR SHOP
            <AdministrativeArea>
                <Locker src={Lock} /> Área administrativa
            </AdministrativeArea>
        </HeaderBar>
    )
}

export default Header