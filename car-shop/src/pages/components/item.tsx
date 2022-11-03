import { useEffect } from "react"
import { useUser } from "../../context/globalStateContext"


const Item = () => {
    const { carros, getCars } = useUser()

    useEffect(() => {
        getCars()
    }, [])
    
    return (
        <div>
            {carros.map((carro) => {
                return <div key={carro.id}>
                    <div>{carro.name}</div>
                </div>
            })}
        </div>
    )
}

export default Item