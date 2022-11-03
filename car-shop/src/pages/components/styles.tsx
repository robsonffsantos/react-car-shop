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
  grid-auto-rows: 10vh;
  border: 3px inset black;
  height: 100%;
  margin: 3vmax;
  border-radius: 10px;
`