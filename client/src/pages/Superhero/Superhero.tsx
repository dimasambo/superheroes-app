import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {StyledSuperhero} from './StyledSuperhero';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../Redux/redux-store';
import {requestOneSuperhero} from "../../Redux/superheroes/superheroes-slice";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Slider} from "../../components/Slider/Slider";
import {SuperheroInfo} from "../../components/SuperheroInfo/SuperheroInfo";


type ParamsType = {
    id: string
}

export const Superhero: FC = () => {
    const {id} = useParams<ParamsType>()
    const currentSuperhero = useSelector((state: State) => state.superheroes.currentSuperhero[0])
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestOneSuperhero(id))
    }, [])

    return <StyledSuperhero>
        {currentSuperhero?.images && <Slider currentSuperhero={currentSuperhero} />}
        <SuperheroInfo currentSuperhero={currentSuperhero} />
    </StyledSuperhero>
}