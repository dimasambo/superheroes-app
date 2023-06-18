import React, {FC, SyntheticEvent} from 'react';
import {Carousel} from "react-responsive-carousel";
import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {StyledSlider} from "./StyledSlider";
import {ISuperhero} from "../../types/types";
import {removeSuperheroImage} from "../../Redux/superheroes/superheroes-slice";
import noImage from "../../assets/image_not_available.png";
import {AddSuperheroImage} from "../AddSuperheroImage/AddSuperheroImage";
import {useDispatch} from "react-redux";


type PropsType = {
    currentSuperhero: ISuperhero
}

export const Slider: FC<PropsType> = ({currentSuperhero}) => {
    const dispatch = useDispatch()

    const handleDeleteImage = (imagePath: string) => {
        // @ts-ignore
        dispatch(removeSuperheroImage({id: currentSuperhero.id, imagePath}))
    }

    const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement
        target.src = noImage
    }

    return <StyledSlider className={'sliderContainer'}>
        <Carousel>
            {currentSuperhero.images.map((image, index) => (
                <div key={index}>
                    <img src={`http://localhost:3000/${image}`} onError={handleImageError}
                         alt={`Superhero ${index}`} className="imageContainer"/>
                    <IconButton onClick={() => handleDeleteImage(image)} className="deleteButton">
                        <DeleteIcon/>
                    </IconButton>
                </div>
            ))}
        </Carousel>
        <AddSuperheroImage currentSuperhero={currentSuperhero} />
    </StyledSlider>
};