import React, {FC, useEffect} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Button} from '@mui/material';
import {ErrorMessageText, StyledCreateSuperhero, StyledTextField} from "./StyledCreateSuperhero";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../Redux/redux-store";
import {requestOneSuperhero, updateSuperhero} from "../../Redux/superheroes/superheroes-slice";
import {useNavigate, useParams} from "react-router-dom";


type ParamsType = {
    id: string
}

type UpdateSuperheroFormValuesType = {
    nickname: string
    realName: string
    originDescription: string
    superpowers: string
    catchPhrase: string
};

export const UpdateSuperhero: FC = () => {
    const navigate = useNavigate()
    const superhero = useSelector((state: State) => state.superheroes.currentSuperhero[0])
    const dispatch = useDispatch()
    const {id} = useParams<ParamsType>()
    const initialValues: UpdateSuperheroFormValuesType = {
        nickname: superhero.nickname,
        realName: superhero.realName,
        originDescription: superhero.originDescription,
        superpowers: superhero.superpowers,
        catchPhrase: superhero.catchPhrase,
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(requestOneSuperhero(id))
    }, [])

    const handleSubmit = (values: UpdateSuperheroFormValuesType) => {
        // @ts-ignore
        dispatch(updateSuperhero({id, superheroInfo: values})).then(() => {
            navigate('/superheroes/' + id)
        })
    }

    return (
        <StyledCreateSuperhero>
            <div className={'title'}>Update Superhero</div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div className={'formGroup'}>
                        <Field as={StyledTextField} name="nickname" id="nickname" label="Nickname" fullWidth />
                        <ErrorMessage name="nickname" component={ErrorMessageText} />
                    </div>
                    <div className={'formGroup'}>
                        <Field as={StyledTextField} name="realName" id="realName" label="Real Name" fullWidth />
                        <ErrorMessage name="realName" component={ErrorMessageText} />
                    </div>
                    <div className={'formGroup'}>
                        <Field
                            as={StyledTextField}
                            name="originDescription"
                            id="originDescription"
                            label="Origin Description"
                            fullWidth
                        />
                        <ErrorMessage name="originDescription" component={ErrorMessageText} />
                    </div>
                    <div className={'formGroup'}>
                        <Field as={StyledTextField} name="superpowers" id="superpowers" label="Superpowers" fullWidth />
                        <ErrorMessage name="superpowers" component={ErrorMessageText} />
                    </div>
                    <div className={'formGroup'}>
                        <Field as={StyledTextField} name="catchPhrase" id="catchPhrase" label="Catch Phrase" fullWidth />
                        <ErrorMessage name="catchPhrase" component={ErrorMessageText} />
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                        Update
                    </Button>
                </Form>
            </Formik>
        </StyledCreateSuperhero>
    );
}