import { useUser } from "../../context/globalStateContext"
import Cards from "../components/cards"
import Header from "../components/header"
import { AdmArea, MainContainer } from "./styles."


const Home = () => {
    const { token } = useUser()
    
    return (
        <MainContainer>
            <Header />
            <Cards />
        </MainContainer>
    )
}

export default Home