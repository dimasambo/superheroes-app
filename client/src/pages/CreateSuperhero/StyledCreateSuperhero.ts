import styled from "styled-components";
import {TextField} from "@mui/material";

export const StyledCreateSuperhero = styled.div`
  max-width: 400px;
  margin: 0 auto;

  .title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 23px;
  }

  .formGroup {
    margin-bottom: 20px;
  }

  .label {
    display: block;
    margin-bottom: 5px;
  }
`

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const ErrorMessageText = styled(TextField)`
  color: red;
`;