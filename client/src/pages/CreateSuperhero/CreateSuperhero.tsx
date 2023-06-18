import React, {FC, InputHTMLAttributes} from 'react';
import {ErrorMessage, Field, Form, Formik, useFormikContext} from 'formik';
import {Button} from '@mui/material';
import {ErrorMessageText, StyledCreateSuperhero, StyledTextField} from './StyledCreateSuperhero'
import {useDispatch} from "react-redux";
import {createSuperhero} from "../../Redux/superheroes/superheroes-slice";
import {useNavigate} from 'react-router-dom';


type CreateSuperheroFormValuesType = {
    nickname: string
    realName: string
    originDescription: string
    superpowers: string
    catchPhrase: string
    images: FileList | null
}

export const CreateSuperhero: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const initialValues: CreateSuperheroFormValuesType = {
        nickname: '',
        realName: '',
        originDescription: '',
        superpowers: '',
        catchPhrase: '',
        images: null
    }

    const handleSubmit = (values: CreateSuperheroFormValuesType) => {
        const formData = new FormData()
        formData.append('nickname', values.nickname)
        formData.append('realName', values.realName)
        formData.append('originDescription', values.originDescription)
        formData.append('superpowers', values.superpowers)
        formData.append('catchPhrase', values.catchPhrase)
        if (values.images) {
            for (let i = 0; i < values.images.length; i++) {
                formData.append('images', values.images[i])
            }
        }
        // @ts-ignore
        dispatch(createSuperhero(formData)).then(() => {
            navigate('/superheroes');
        })
    }

    const FileInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
        const { setFieldValue } = useFormikContext<CreateSuperheroFormValuesType>()

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { files } = event.currentTarget
            if (files) {
                setFieldValue('images', files)
            }
        }

        return <input type="file" onChange={handleFileChange} {...props} />
    }

    return <StyledCreateSuperhero>
        <div className={'title'}>Create Superhero</div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <div className={'formGroup'}>
                    <Field as={StyledTextField} name="nickname" id="nickname" label="Nickname" fullWidth/>
                    <ErrorMessage name="nickname" component={ErrorMessageText}/>
                </div>
                <div className={'formGroup'}>
                    <Field as={StyledTextField} name="realName" id="realName" label="Real Name" fullWidth/>
                    <ErrorMessage name="realName" component={ErrorMessageText}/>
                </div>
                <div className={'formGroup'}>
                    <Field
                        as={StyledTextField}
                        name="originDescription"
                        id="originDescription"
                        label="Origin Description"
                        fullWidth
                    />
                    <ErrorMessage name="originDescription" component={ErrorMessageText}/>
                </div>
                <div className={'formGroup'}>
                    <Field as={StyledTextField} name="superpowers" id="superpowers" label="Superpowers" fullWidth/>
                    <ErrorMessage name="superpowers" component={ErrorMessageText}/>
                </div>
                <div className={'formGroup'}>
                    <Field as={StyledTextField} name="catchPhrase" id="catchPhrase" label="Catch Phrase" fullWidth/>
                    <ErrorMessage name="catchPhrase" component={ErrorMessageText}/>
                </div>
                <div className={'formGroup'}>
                    <label className="label" htmlFor="images">Images</label>
                    <Field name="images" component={FileInput} multiple />
                    <ErrorMessage name="images" component={ErrorMessageText}/>
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Create
                </Button>
            </Form>
        </Formik>
    </StyledCreateSuperhero>
}