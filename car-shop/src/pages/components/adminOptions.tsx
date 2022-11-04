import { useState } from "react"
import { AddModal, AdminContainer, AdminContainerOptions, ModalBackground, ModalPair, ModalWrapper, ButtonPair, ModalTitle, ModalInput, ModalButton, CarList } from "./styles"
import { useSpring, animated } from 'react-spring'
import { useUser } from "../../context/globalStateContext"

const AdminOptions = () => {
    const { setName, setModel, setLicensePlate, setPhoto, setValue, addCar, carros, setId } = useUser()
    const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false)
    const [isOpenRemove, setIsOpenRemove] = useState<boolean>(false)

    const openCloseAddCar = () => {
        setIsOpenAdd(!isOpenAdd)
    }

    const openCloseRemove = () => {
        setIsOpenRemove(!isOpenRemove)
    }

    const closeAddCarModal = () => {
        addCar()
        openCloseAddCar()
    }

    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: isOpenAdd || isOpenRemove ? 1 : 0,
        transform: isOpenAdd || isOpenRemove ? `translateY(0%)` : `translateY(-100%)`
      })

    return (
        <AdminContainer>
            <AdminContainerOptions onClick={openCloseAddCar}>Adicionar carro</AdminContainerOptions>
            <AdminContainerOptions onClick={openCloseRemove}>Remover carro</AdminContainerOptions>
            <AdminContainerOptions>Editar carro</AdminContainerOptions>
            {isOpenAdd && 
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
                    </animated.div>
                </ModalBackground>}
                {isOpenRemove && 
                <ModalBackground>
                    <animated.div style={animation}>
                        <ModalWrapper>
                            <AddModal>
                                <ModalTitle>Remover carro</ModalTitle>
                                {carros.map((carro) => {
                                    return (
                                    <CarList>
                                        <input type="radio" name="selection" onChange={() => setId(carro.id)} />
                                        <label style={{ paddingLeft: '0.5vw' }}>{carro.name} {carro.model}</label>
                                    </CarList>
                                    )                                    
                                })}
                                <ButtonPair>
                                    <ModalButton onClick={closeAddCarModal}>Remover</ModalButton>
                                    <ModalButton onClick={openCloseRemove}>Fechar</ModalButton>
                                </ButtonPair>                                
                            </AddModal>
                        </ModalWrapper>
                    </animated.div>
                </ModalBackground>}
        </AdminContainer>
    )
}

export default AdminOptions