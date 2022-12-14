import styled from "styled-components"

export const HeaderBar = styled.div`
    background-color: #07A0C3;
    color: #fcfcff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 3em;
    padding: 1vmax 3vmax 1vmax 3vmax;
    height: 10vh;
`

export const CardsContainer = styled.div`
  background-color: #07A0C3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 35vh;
  border: 3px solid #DD0426;
  height: 100%;
  margin: 1vmax ;
  border-radius: 10px;
  padding: 1vmax;
  align-items: center;
  justify-content: center;
`

export const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 25vh;
    width: 15vw;
    background-color: #fcfcff;
    border-radius: 8px;
    border: 2px solid #F02D3A;
    padding: 0.75vmax;
    align-items: center;
    justify-content: space-evenly;
`

export const CarPhoto = styled.img`
  height: 14vh;
  width: 12vw;
  border: 1px solid #37505c;
  border-radius: 2px;
`

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`

export const AdministrativeArea = styled.div`
    display: flex;
    flex-direction: row;
`

export const Locker = styled.img`
    height: 4vh;
    width: 2vw;
`

export const LoginArea = styled.div`
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 9vw;
    height: 11vh;
`

export const AdmArea = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    width: 12vw;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;

    :hover {
      cursor: pointer;
      background-color: #DD0426;
    }
`

export const LoginButton = styled.button`
    width: 80%;
    background-color: #fcfcff;
    border: 2px solid #DD0426;
    border-radius: 4px;
`

export const AdminContainer = styled.div`
    margin: 20px;
    border: 2px solid #DD0426;
    background-color: #07A0C3;
    color: #fcfcff;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    padding: 0.75vmax;
    width: 20%;
    height: 2vh;
`

export const AdminContainerOptions = styled.div`
    :hover {
      cursor: pointer;
      background-color: #DD0426;
      border-radius: 10px;
    }
`

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fcfcff;
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const AddModal = styled.div`
  margin: 1vmax;
  border: 2px solid #DD0426;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
  width: 15vw;
  padding: 6px;
  overflow-y: auto;
`

export const ModalPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const ModalTitle = styled.div`
  text-align: center;
  font-size: 20px;
`

export const ModalInput = styled.input`
  width: 8vw;
  height: 2vh;
  border-radius: 4px;
`

export const ModalButton = styled.button`
  height: 4vh;
  width: 6vw;
  background-color: #07A0C3;
  border: 2px solid #DD0426;
  border-radius: 4px;
  color: #fcfcff;

  :hover {
    cursor: pointer;
    background-color: #DD0426;
  }
`

export const CarList = styled.div`
  display: flex;
  flex-direction: row;
`