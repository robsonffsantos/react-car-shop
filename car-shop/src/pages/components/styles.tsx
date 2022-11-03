import styled from "styled-components"

export const HeaderBar = styled.div`
    background-color: #07A0C3;
    color: #fcfcff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    padding: 1vmax;
`

export const CardsContainer = styled.div`
  background-color: #07A0C3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 30vh;
  border: 3px solid #DD0426;
  height: 100%;
  margin: 3vmax;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 1vmax;
`

export const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 25vh;
    width: 15vw;
    background-color: #fcfcff;
    border-radius: 8px;
    border: 2px solid #F02D3A;
`