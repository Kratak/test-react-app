import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import {InputForm} from "./InputForm";
import {PolicyPage} from "./policy";
import {routesPaths} from "./routes";
import {Navigation} from "./navigation";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path='/' element={<InputForm defaultValue={'hello form'}/>}/>
                <Route path='*' element={<div>404</div>}/>
                <Route path={`/${routesPaths.about}`} element={<div>About</div>}/>
                <Route path='/policy' element={<PolicyPage/>}/>
                <Route path='/form' element={<div>Form</div>}/>
            </Routes>
        </div>
    );
}

export default App;
