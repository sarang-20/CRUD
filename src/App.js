import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/Users/sarangaghara/Desktop/crud/crud/src/components/Home.js';
import Create from '/Users/sarangaghara/Desktop/crud/crud/src/components/Create.js';
import Read from '/Users/sarangaghara/Desktop/crud/crud/src/components/Read.js';
import Update from '/Users/sarangaghara/Desktop/crud/crud/src/components/Update.js';
import Todo from './components/Todo';

export default function App() {
    return (
        // <Router>
        //     <Routes>
        //         <Route  index element={<Home />} />
        //         <Route path="/create" element={<Create />} />
        //         <Route path="/read" element={<Read />} />
        //         <Route path="/update" element={<Update />} />
        //     </Routes>
        // </Router>
        <Todo/>
    );
}
