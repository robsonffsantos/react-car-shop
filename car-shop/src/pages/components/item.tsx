import { useUser } from "../../context/globalStateContext"
import { ItemCard } from "./styles"


const Item = () => {
    const { carros } = useUser()
    
    return (
        <ItemCard>
            {carros.map((carro) => {
                return <div key={carro.id}>
                    <div>{carro.name}</div>
                    <div>{carro.model}</div>
                </div>
            })}
        </ItemCard>
    )
}

export default Item