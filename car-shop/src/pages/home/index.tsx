import Cards from "../components/cards"
import Header from "../components/header"
import { MainContainer } from "./styles."


const Home = () => {
    return (
        <MainContainer>
            <Header />
            <Cards />
        </MainContainer>
    )
}

export default Home