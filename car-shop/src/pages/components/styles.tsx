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
      padding: 4px;
    }
`
