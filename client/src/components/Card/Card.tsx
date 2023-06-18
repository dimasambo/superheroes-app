import React, {FC, useRef, useState} from 'react';
import {StyledCard} from './StyledCard';
import {ISuperhero} from '../../types/types';
import {deleteSuperhero, setOffset} from "../../Redux/superheroes/superheroes-slice";
import {useDispatch} from "react-redux";
import {IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
import noImage from '../../assets/image_not_available.png';


type PropsType = {
    superhero: ISuperhero
};

export const Card: FC<PropsType> = ({superhero}) => {
    const dispatch = useDispatch()
    const [isImageError, setIsImageError] = useState(false)

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        // @ts-ignore
        dispatch(deleteSuperhero(superhero.id))
    };

    return (
        <StyledCard>
            <div className="cardImgBox">
                <Link to={`/superheroes/${superhero.id}`}>
                    {!isImageError
                        ? <img onError={() => setIsImageError(true)}
                             src={'http://localhost:3000/' + superhero.images[0]}
                             alt={superhero.nickname || 'No nickname'}/>
                        : <img src={noImage}
                        alt={superhero.nickname || 'No nickname'}/>
                    }
                </Link>
            </div>
            <div className="cardContent">
                <Link to={`/superheroes/${superhero.id}`}>
                    <span className="cardTitle">{superhero.nickname || 'No nickname'}</span>
                </Link>
                <IconButton className="deleteButton" onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </StyledCard>
    );
};