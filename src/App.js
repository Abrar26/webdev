import React from "react";
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import 'swiper/swiper-bundle.min.css'
import Navbar from "./components/Navbar";
import Home from "./route/Home";
import AddSkill from "./route/AddSkill";

function App(){

    return <>
        <BrowserRouter>
            <Navbar />
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/addSkill">
                <AddSkill />
            </Route>
        </BrowserRouter>
    </>
}

export default App;