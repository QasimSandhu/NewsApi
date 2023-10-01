import React, { Component } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App() {
    let pageSize = 8;
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<News key=" general" pageSize={pageSize} country="us" category="general" />} />
                    <Route exact path="/business" element={<News key="business" pageSize={pageSize} country="us" category="business" />} />
                    <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
                    <Route exact path="/general" element={<News key="general" pageSize={pageSize} country="us" category="general" />} />
                    <Route exact path="/health" element={<News key="health" pageSize={pageSize} country="us" category="health" />} />
                    <Route exact path="/science" element={<News key="science" pageSize={pageSize} country="us" category="science" />} />
                    <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} country="us" category="sports" />} />
                    <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} country="us" category="technology" />} />
                </Routes>
            </Router>
        </div>
    )
}
