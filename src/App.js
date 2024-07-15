import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import Home from './components/pages/Home';
import Product from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import React from "react";

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/products' element={<Product/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
library.add(fab, fas, far)
