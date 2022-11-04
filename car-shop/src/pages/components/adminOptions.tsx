import { useState } from "react"
import { AddModal, AdminContainer, AdminContainerOptions, ModalBackground, ModalPair, ModalWrapper, ButtonPair, ModalTitle, ModalInput, ModalButton } from "./styles"
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
                <ModalBackground>
                    <animated.div style={animation}>
                        <ModalWrapper>
                            <AddModal>
                                <ModalTitle>Adicionar carro</ModalTitle>
                                <ModalPair>
                                    <div>Marca</div>
                                    <ModalInput></ModalInput>
                                </ModalPair>
                                <ModalPair>
                                    <div>Modelo</div>
                                    <ModalInput></ModalInput>
                                </ModalPair>
                                <ModalPair>
                                    <div>Placa</div>
                                    <ModalInput></ModalInput>
                                </ModalPair>
                                <ModalPair>
                                    <div>URL da Foto</div>
                                    <ModalInput></ModalInput>
                                </ModalPair>
                                <ModalPair>
                                    <div>Valor</div>
                                    <ModalInput></ModalInput>
                                </ModalPair>
                                <ButtonPair>
                                    <ModalButton>Adicionar</ModalButton>
                                    <ModalButton onClick={openCloseAddCar}>Fechar</ModalButton>
                                </ButtonPair>                                
                            </AddModal>
                        </ModalWrapper>
                    </animated.div></ModalBackground>}            
        </AdminContainer>
    )
}

export default AdminOptions