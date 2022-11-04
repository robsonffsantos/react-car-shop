import { useState } from "react"
import { AddModal, AdminContainer, AdminContainerOptions, ModalBackground, ModalWrapper } from "./styles"
import { useSpring, animated } from 'react-spring'


const AdminOptions = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openCloseAddCar = () => {
        setIsOpen(!isOpen)
    }

    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? `translateY(0%)` : `translateY(-100%)`
      })

    return (
        <AdminContainer>
            <AdminContainerOptions onClick={openCloseAddCar}>Adicionar carro</AdminContainerOptions>
            <AdminContainerOptions>Remover carro</AdminContainerOptions>
            <AdminContainerOptions>Editar carro</AdminContainerOptions>
            {isOpen && 
                <ModalBackground onClick={openCloseAddCar}>
                    <animated.div style={animation}>
                        <ModalWrapper>
                            <AddModal>
                                Modal
                            </AddModal>
                        </ModalWrapper>
                    </animated.div></ModalBackground>}            
        </AdminContainer>
    )
}

export default AdminOptions