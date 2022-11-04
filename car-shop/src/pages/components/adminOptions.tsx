import { useState } from "react"
import { AddModal, AdminContainer, AdminContainerOptions, ModalBackground, ModalPair, ModalWrapper, ButtonPair, ModalTitle, ModalInput, ModalButton } from "./styles"
import { useSpring, animated } from 'react-spring'
import { useUser } from "../../context/globalStateContext"

const AdminOptions = () => {
    const { setName, setModel, setLicensePlate, setPhoto, setValue, addCar } = useUser()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openCloseAddCar = () => {
        setIsOpen(!isOpen)
    }

    const closeAddCarModal = () => {
        addCar()
        openCloseAddCar()
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
                                    <ModalInput type='text' onChange={e => setName(e.target.value)}></ModalInput>
                                </ModalPair>
                                <ModalPair>
                                    <div>Modelo</div>
                                    <ModalInput type='text' onChange={e => setModel(e.target.value)}></ModalInput>
                                </ModalPair>
                                <ModalPair>
                                    <div>Placa</div>
                                    <ModalInput type='text' onChange={e => setLicensePlate(e.target.value)}></ModalInput>
                                </ModalPair>
                                <ModalPair>
                                    <div>URL da Foto</div>
                                    <ModalInput type='text' onChange={e => setPhoto(e.target.value)}></ModalInput>
                                </ModalPair>
                                <ModalPair>
                                    <div>Valor</div>
                                    <ModalInput type='number' onChange={e => setValue(e.target.value)}></ModalInput>
                                </ModalPair>
                                <ButtonPair>
                                    <ModalButton onClick={closeAddCarModal}>Adicionar</ModalButton>
                                    <ModalButton onClick={openCloseAddCar}>Fechar</ModalButton>
                                </ButtonPair>                                
                            </AddModal>
                        </ModalWrapper>
                    </animated.div></ModalBackground>}            
        </AdminContainer>
    )
}

export default AdminOptions