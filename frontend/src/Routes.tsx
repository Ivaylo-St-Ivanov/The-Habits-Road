import React from 'react';
import { Routes, Route } from 'react-router-dom';

import StartUpPage from './pages/StartUpPage/StartUpPage';

interface AllRoutesProps { }

const AllRoutes: React.FC<AllRoutesProps> = () => {
    return (
        <Routes>
            <Route path='/' element={<StartUpPage />} />
        </Routes>
    );
};

export default AllRoutes;