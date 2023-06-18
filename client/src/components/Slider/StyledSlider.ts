import styled from 'styled-components';

export const StyledSlider = styled.div`
  width: 40vw;
  position: relative;

  @media(max-width: 600px) {
    width: 80vw;
  }
  
  .imageContainer {
    position: relative;
  }

  .deleteButton {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: red;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
`