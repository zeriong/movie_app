import React from "react";

import {
    BrowserRouter as Router, Route, Routes,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function MovieApp() {
    return (
        <Router>
            <Routes>
                <Route path="/movie/:id" element={<Detail/>}/>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default  MovieApp;