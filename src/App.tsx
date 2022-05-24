import React from 'react';
import {Routes, Route, Link} from "react-router-dom";

import './App.css';
import {InputForm} from "./InputForm";

function App() {
    return (
        <div className="App">
            <div className='App-header'>
                <div>
                    logo
                </div>
                <div>
                    <Link className='App-link' to={'/'}>Home</Link>
                    <Link className='App-link' to={'/about'}>About</Link>
                    <Link className='App-link' to={'/form'}>Form</Link>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<InputForm defaultValue={'hello form'}/>}/>
                <Route path='*' element={<div>404</div>}/>
                <Route path='/about' element={<div>About</div>}/>
                <Route path='/form' element={<div>Form</div>}/>
            </Routes>
        </div>
    );
}

export default App;
