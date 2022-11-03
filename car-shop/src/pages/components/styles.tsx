import styled from "styled-components"

export const HeaderBar = styled.div`
    background-color: #07A0C3;
    color: #fcfcff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 3em;
    padding: 1vmax;
`

export const CardsContainer = styled.div`
  background-color: #07A0C3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 35vh;
  border: 3px solid #DD0426;
  height: 100%;
  margin: 3vmax;
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
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10vw;

    :hover {
      cursor: pointer;
    }
`

export const Locker = styled.img`
    height: 4vh;
    width: 2vw;
`
