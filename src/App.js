import React, { useState, useEffect, useRef } from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import HomePage from "./pages/Home";
import News from "./pages/News";
import Navbar from "./components/Navbar";
import bg from "./assets/bg2.mp4";
import Shop from "./pages/Shop";
import Accounts from "./pages/Accounts";
import AddNews from "./pages/AddNews";
import AddItem from "./pages/AddItem";
import EditNews from "./pages/EditNews";
import EditItem from "./pages/EditItem";
import EditAccount from "./pages/EditAccount";

function App() {

    return (
        <Router>
            <div className="app">
                <div className="siteContent">
                    <Navbar />
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route exact path="/News" element={<News />} />
                            <Route exact path="/Accounts" element={<Accounts />} />
                            <Route exact path="/Shop" element={<Shop />} />
                            <Route exact path="/AddNews" element={<AddNews />} />
                            <Route exact path="/AddItem" element={<AddItem />} />
                            <Route exact path="/EditNews" element={<EditNews />} />
                            <Route exact path="/EditItem" element={<EditItem />} />
                            <Route exact path="/EditAccount" element={<EditAccount />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;