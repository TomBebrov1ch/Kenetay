import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import { ROUTE_CONSTANTS } from "../../shared/config/routes";
import { HomePage } from "../ui/index";

export const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/index.html" element={<Navigate replace to="/home" />} />
                <Route path="/index.shtml" element={<Navigate replace to="/home" />} />
                <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
            </Routes>
        </Router>
    );
};
