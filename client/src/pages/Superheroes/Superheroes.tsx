import React, {FC, useEffect} from 'react';
import {StyledSuperheroes} from './StyledSuperheroes';
import {useDispatch, useSelector} from 'react-redux';
import {requestAllSuperheroes, setOffset} from '../../Redux/superheroes/superheroes-slice';
import {State} from '../../Redux/redux-store';
import {Card} from '../../components/Card/Card';
import {Pagination} from "../../components/Pagination/Pagination";
import {Link} from "react-router-dom";
import {Button} from "../../components/Button/Button";


export const Superheroes: FC = () => {
    const {superheroes, offset} = useSelector((state: State) => state.superheroes)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestAllSuperheroes(offset))
    }, [offset])

    const handlePrevPage = () => {
        if (offset > 0) {
            dispatch(setOffset(offset - 5))
        }
    };

    const handleNextPage = () => {
        if (superheroes.length === 5) {
            dispatch(setOffset(offset + 5))
        }
    };

    return (
        <StyledSuperheroes>
            <Link to={'/superheroes/create'}>
                <Button>Create Superhero</Button>
            </Link>
            <div className={'superheroesWrapper'}>
                {superheroes.length === 0
                    ? <div>No Superheroes</div>
                    : superheroes.map(superhero =>
                        <Card key={superhero.id} superhero={superhero}/>
                    )}
            </div>
            <Pagination handlePrevPage={handlePrevPage} handleNextPage={handleNextPage}
                        offset={offset} itemsLength={superheroes.length} />
        </StyledSuperheroes>
    );
};