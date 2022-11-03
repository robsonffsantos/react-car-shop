import { useUser } from "../../context/globalStateContext"
import { CardsContainer, CarPhoto, Information, ItemCard } from "./styles"

const Cards = () => {
    const { carros } = useUser()

    return (
        <CardsContainer>
            {carros.map((carro) => {
                return <ItemCard key={carro.id}>
                    <CarPhoto src={carro.photo} />
                    <Information><b>Marca</b>{carro.name}</Information>
                    <Information><b>Modelo</b>{carro.model}</Information>
                    <Information><b>Placa</b>{carro.licensePlate}</Information>
                    <Information><b>Valor</b>R$ {carro.value}</Information>
                </ItemCard>
                })
            }
        </CardsContainer>
    )
}

export default Cards