import styled from 'styled-components'

export const StyledCard = styled.div`
  width: 500px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media(max-width: 600px) {
    width: 300px;
  }
  
  .cardImgBox {
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    a {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .cardContent {
    display: flex;
    align-items: center;
    padding: 8px;
    justify-content: space-between;
  }

  a {
    color: inherit;
    text-decoration: none;

    .cardTitle {
      flex-grow: 1;
      margin-right: 8px;
      font-weight: bold;
      margin-bottom: 0;
    }
  }

  .deleteButton {
    color: red;
  }
`