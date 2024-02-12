import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import '/Users/sarangaghara/Desktop/crud/crud/src/components/read.css';
import { useNavigate } from 'react-router-dom';


const Read = () => {
    const navigate = useNavigate();

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://65a77a1094c2c5762da6bf7e.mockapi.io/fakedata`);
                setAPIData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const setData = (data) => {
        localStorage.setItem('ID', data.id);
        localStorage.setItem('First Name', data.firstName);
        localStorage.setItem('Last Name', data.lastName);
        localStorage.setItem('Contact', data.contact);
        localStorage.setItem('Checkbox Value', data.checkbox);
    }

    const onDelete = async (id) => {
        try {
            await axios.delete(`https://65a77a1094c2c5762da6bf7e.mockapi.io/fakedata/${id}`);
            getData();
        } catch (error) {
            console.error("Delete request failed:", error);
        }
    }

    const getData = async () => {
        try {
            const response = await axios.get(`https://65a77a1094c2c5762da6bf7e.mockapi.io/fakedata`);
            setAPIData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div>
            <h1>Read Page</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact</th>
                        <th>Checkbox Value</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.contact}</td>
                            <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                            <td>
                                <Link to='/update'>
                                    <Button className='btn-update' onClick={() => setData(data)}>Update</Button>
                                </Link>
                            </td>
                            <td>
                                <Button onClick={() => onDelete(data.id)}><DeleteIcon /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='add' onClick={() => navigate('/create')}>ADD NEW</button>
        </div>
    )
}

export default Read;
