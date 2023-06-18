import './App.css'
import {Navbar} from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import {Superheroes} from "./pages/Superheroes/Superheroes";
import {CreateSuperhero} from "./pages/CreateSuperhero/CreateSuperhero";
import {Superhero} from "./pages/Superhero/Superhero";
import {UpdateSuperhero} from "./pages/CreateSuperhero/UpdateSuperhero";

function App() {

    return (
        <>
            <Navbar/>
            <div className={'container'}>
                <Routes>
                    <Route path='/'
                           element={<Superheroes/>}/>
                    <Route path='/superheroes'
                           element={<Superheroes/>}/>
                    <Route path='/superheroes/create'
                           element={<CreateSuperhero/>}/>
                    <Route path='/superheroes/update/:id'
                           element={<UpdateSuperhero/>}/>
                    <Route path='/superheroes/:id'
                           element={<Superhero/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
