import React from 'react';
import './assets/css/App.css';
import {SideBar} from "./components/SideBar";
import {MyCourse} from "./pages";
import {
    BrowserRouter as Router, Route,
    Routes
} from "react-router-dom";
import {Header} from "./components/Header";
function App() {

    return (
        <Router>
        <div className="w-full h-screen flex">
            <Header/>
            <SideBar/>
            <Routes>
                <Route index path={'/'} element={<div>q</div>}/>
                <Route path={'/course'} element={<MyCourse/>}/>
            </Routes>
        </div>
        </Router>
    );
}

export default App;
