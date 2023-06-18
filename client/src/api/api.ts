import axios from "axios";
import {ICreateSuperhero, ISuperhero} from "../types/types";

export const api = {
    getAllSuperheroes(offset = 0, count = 5) {
        return axios.get<ISuperhero[]>(`http://localhost:3000/superheroes?offset=${offset}&count=${count}`)
            .then(response => response.data)
    },

    getOneSuperhero(id: number) {
        return axios.get<ISuperhero[]>(`http://localhost:3000/superheroes/` + id)
            .then(response => response.data)
    },

    createSuperhero(data: ICreateSuperhero) {
        return axios.post<ISuperhero>(`http://localhost:3000/superheroes`, data)
            .then(response => response.data)
    },

    updateSuperhero(id: number, data: ICreateSuperhero) {
        return axios.put<ISuperhero[]>(`http://localhost:3000/superheroes/` + id, data)
            .then(response => response.data)
    },

    addSuperheroImage(id: number, files: any) {
        return axios.put<ISuperhero>(`http://localhost:3000/superheroes/add-image/` + id, files)
            .then(response => response.data)
    },

    removeSuperheroImage(id: number, imagePath: any) {
        return axios.put<ISuperhero>(`http://localhost:3000/superheroes/remove-image/` + id, {imagePath})
            .then(response => response.data)
    },

    deleteSuperhero(id: number) {
        return axios.delete<any>(`http://localhost:3000/superheroes/` + id)
            .then(response => response.data)
    }
}