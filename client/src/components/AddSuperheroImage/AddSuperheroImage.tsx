import React, {FC} from 'react';
import {Field, Form, Formik} from "formik";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {addSuperheroImage} from "../../Redux/superheroes/superheroes-slice";
import {StyledAddSuperheroImage} from "./StyledAddSuperheroImage";
import {useDispatch} from "react-redux";
import {ISuperhero} from "../../types/types";


type PropsType = {
    currentSuperhero: ISuperhero
}

export const AddSuperheroImage: FC<PropsType> = ({currentSuperhero}) => {
    const dispatch = useDispatch()

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        const formData = new FormData()
        if (files && files.length > 0) {
            Array.from(files).forEach((file) => {
                formData.append('images', file)
            })
        }
        // @ts-ignore
        dispatch(addSuperheroImage({id: currentSuperhero.id, files: formData}))
    }

    return <StyledAddSuperheroImage>
        <Formik initialValues={{images: null}} onSubmit={() => {
        }}>
            {() => (
                <Form>
                    <label htmlFor={`imageInput`} className="uploadButton">
                        <AddCircleOutlineIcon className="plusIcon"/>
                        <Field
                            type="file"
                            id={`imageInput`}
                            name="images"
                            multiple
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e)}
                            style={{display: 'none'}}
                        />
                    </label>
                </Form>
            )}
        </Formik>
    </StyledAddSuperheroImage>
}