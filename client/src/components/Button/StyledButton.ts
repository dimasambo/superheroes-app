import styled from 'styled-components'

export const StyledButton = styled.div`
  border-radius: 5px;
  background: rgb(33, 130, 225);
  color: white;
  padding: 5px 10px;
  transition: .1s;
  max-width: 250px;
  text-align: center;

  &:hover {
    background: rgb(61, 143, 232);
  }
`