import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";
import {StyledSuperheroInfo} from "./StyledSuperheroInfo";
import {ISuperhero} from "../../types/types";


type PropsType = {
    currentSuperhero: ISuperhero
}

export const SuperheroInfo: FC<PropsType> = ({currentSuperhero}) => {
    return <StyledSuperheroInfo>
        <div className={'infoBox'}>
            {currentSuperhero &&
            <Link to={'/superheroes/update/' + currentSuperhero.id}>
                <Button>Update Superhero</Button>
            </Link>
            }
        </div>
        <div className={'infoBox'}>
            <div className={'title'}>
                <span className={'titleInfo'}>Nick name</span>: {currentSuperhero?.nickname || 'No nickname'}
            </div>
        </div>
        <div className={'infoBox'}>
            <div className={'title'}>
                <span className={'titleInfo'}>Real name</span>: {currentSuperhero?.realName || 'No real name'}
            </div>
        </div>
        <div className={'infoBox'}>
            <div className={'title'}>
                        <span
                            className={'titleInfo'}>Superpowers</span>: {currentSuperhero?.superpowers || 'No superpowers'}
            </div>
        </div>
        <div className={'infoBox'}>
            <div className={'title'}>
                        <span
                            className={'titleInfo'}>Catch phrase</span>: {currentSuperhero?.catchPhrase || 'No catch phrase'}
            </div>
        </div>
        <div className={'infoBox'}>
            <div className={'title'}>
                        <span
                            className={'titleInfo'}>Origin description</span>: {currentSuperhero?.originDescription || 'No origin description'}
            </div>
        </div>
    </StyledSuperheroInfo>
}