import styled from 'styled-components';

export const StyledSuperhero = styled.div`
  display: flex;
  gap: 30px;
  
  @media(max-width: 600px) {
    flex-direction: column;
  }
`;