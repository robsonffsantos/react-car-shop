import { useUser } from "../../context/globalStateContext"
import AdminOptions from "../components/adminOptions"
import Cards from "../components/cards"
import Header from "../components/header"
import { MainContainer } from "./styles."

const Home = () => {
    const { token } = useUser()
    
    return (
        <MainContainer>
            <Header />
            { token && <AdminOptions /> }
            <Cards />
        </MainContainer>
    )
}

export default Home