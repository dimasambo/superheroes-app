import React, {FC} from 'react';
import {StyledButton} from "./StyledButton";


type PropsType = {
    children: string
}

export const Button: FC<PropsType> = ({children}) => {
    return <StyledButton className={'createSuperheroButton'}>
        {children}
    </StyledButton>
}

