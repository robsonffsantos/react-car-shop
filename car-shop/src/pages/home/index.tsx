import { useUser } from "../../context/globalStateContext"
import Cards from "../components/cards"
import Header from "../components/header"
import { MainContainer } from "./styles."


const Home = () => {
    const { token } = useUser()
    
    return (
        <MainContainer>
            <Header />
            {token && 
                <div>
                    Área administraiva
                </div>}
            <Cards />
        </MainContainer>
    )
}

export default Home