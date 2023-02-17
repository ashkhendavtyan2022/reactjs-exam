import React from "react";
import {Routes, Route} from "react-router-dom";
import { About } from "../Components/About";
import { Apply } from "../Components/Apply";
import { Users } from "../Components/Users";

export const RouteComonent = () => {
    return (
        <Routes>
            <Route path="" element={<About />}/>
            <Route path="/apply" element={<Apply />}/>
            <Route path="/users" element={<Users />}/>
        </Routes>
    )
}