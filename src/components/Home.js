import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

 function Home() {
    const navigate = useNavigate();
    
    const createChange = () => {
        navigate('/create');
    };

    const readChange = () => {
        navigate('/read');
    };

    const updateChange = () => {
        navigate('/update');
    };

    return (
        <div>
            Home<br/>
            <Link to="/create" onClick={createChange}>Create</Link><br/>
            <Link to="/read" onClick={readChange}>Read</Link><br/>
            <Link to="/update" onClick={updateChange}>Update</Link>
        </div>
    );
}
export default Home;