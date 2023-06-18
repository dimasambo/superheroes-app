import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICreateSuperhero, ISuperhero} from "../../types/types";
import {api} from "../../api/api";
import {State} from "../redux-store";

const initialState = {
    superheroes: [] as ISuperhero[],
    currentSuperhero: [] as ISuperhero[],
    error: '',
    offset: 0
}

export type InitialStateType = typeof initialState

const superheroesSlice = createSlice({
    name: "superheroes",
    initialState,
    reducers: {
        setOffset(state: InitialStateType, action: PayloadAction<number>) {
            state.offset = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestAllSuperheroes.fulfilled, (state: InitialStateType, action) => {
                state.superheroes = action.payload
                state.error = ''
            })
            .addCase(requestAllSuperheroes.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
            .addCase(requestOneSuperhero.fulfilled, (state: InitialStateType, action) => {
                state.currentSuperhero = action.payload
                state.error = ''
            })
            .addCase(requestOneSuperhero.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
            .addCase(createSuperhero.fulfilled, (state: InitialStateType, action) => {
                state.error = ''
            })
            .addCase(createSuperhero.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
            .addCase(updateSuperhero.fulfilled, (state: InitialStateType, action) => {
                state.error = ''
            })
            .addCase(updateSuperhero.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
            .addCase(deleteSuperhero.fulfilled, (state: InitialStateType, action) => {
                state.superheroes = action.payload
                state.error = ''
            })
            .addCase(deleteSuperhero.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
            .addCase(addSuperheroImage.fulfilled, (state: InitialStateType, action) => {
                state.currentSuperhero = [action.payload]
                state.error = ''
            })
            .addCase(addSuperheroImage.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
            .addCase(removeSuperheroImage.fulfilled, (state: InitialStateType, action) => {
                state.currentSuperhero = [action.payload]
                state.error = ''
            })
            .addCase(removeSuperheroImage.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
    },
});

export const {setOffset} = superheroesSlice.actions

export const requestAllSuperheroes = createAsyncThunk(
    'superheroes/requestAllSuperheroes',
    async (offset: number) => {
        const data: ISuperhero[] = await api.getAllSuperheroes(offset);
        return data;
    }
)

export const requestOneSuperhero = createAsyncThunk(
    'superheroes/requestOneSuperhero',
    async (id: number) => {
        const data: ISuperhero[] = await api.getOneSuperhero(id);
        return data;
    }
)

export const createSuperhero = createAsyncThunk(
    'superheroes/createSuperhero',
    async (superhero: ICreateSuperhero) => {
        await api.createSuperhero(superhero)
    }
)

export const deleteSuperhero = createAsyncThunk(
    'superheroes/deleteSuperhero',
    async (id: number, thunkAPI) => {
        const state = thunkAPI.getState() as State;
        await api.deleteSuperhero(id);
        const data: ISuperhero[] = await api.getAllSuperheroes(state.superheroes.offset);
        return data;
    }
)

export const updateSuperhero = createAsyncThunk(
    'superheroes/updateSuperhero',
    async ({id, superheroInfo}: {id: number, superheroInfo: ICreateSuperhero}) => {
        await api.updateSuperhero(id, superheroInfo);
    }
)

export const addSuperheroImage = createAsyncThunk(
    'superheroes/addSuperheroImage',
    async ({id, files}: {id: number, files: any}) => {
        const data: ISuperhero = await api.addSuperheroImage(id, files);
        return data;
    }
)

export const removeSuperheroImage = createAsyncThunk(
    'superheroes/removeSuperheroImage',
    async ({id, imagePath}: {id: number, imagePath: string}) => {
        const data: ISuperhero = await api.removeSuperheroImage(id, imagePath);
        return data;
    }
)

export default superheroesSlice.reducer;