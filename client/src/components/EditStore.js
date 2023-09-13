import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const EditStore = (props) => {
const { id } = useParams();
const [StoreName, setStoreName] = useState('');
const [StoreNumber, setStoreNumber] = useState('');
const [Open, setOpen] = useState(false);
const [errors, setErrors] = useState({});
const navigate = useNavigate();

useEffect(() => {
    axios.get('http://localhost:8000/api/stores/' + id)
    .then(res => {
        setStoreName(res.data.StoreName);
        setStoreNumber(res.data.StoreNumber);
        setOpen(res.data.Open)
    })
    .catch(err => console.log(err))
}, [id]);

const updateStore = (e) => {
    e.preventDefault();
    axios.patch('http://localhost:8000/api/stores/edit/' + id, {
    StoreName,
    StoreNumber,
    Open
    })
    .then(res => {
        console.log(res);
        navigate("/view/" + id);
    })
    .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
    });
};

return (
    <div>
    <Link to="/">Home</Link>
    <h1>Update a Store</h1>
    <form onSubmit={updateStore}>
        <p>
        <label>Store Name</label><br />
        <input type="text"
            name="StoreName"
            value={StoreName}
            onChange={(e) => { setStoreName(e.target.value) }} />
        {errors.StoreName ? <p>{errors.StoreName.message}</p> : null}
        </p>
        <p>
        <label>Store Number</label><br />
        <input type="number"
            name="StoreNumber"
            value={StoreNumber}
            onChange={(e) => { setStoreNumber(e.target.value) }} />
        {errors.StoreNumber ? <p>{errors.StoreNumber.message}</p> : null}
        </p>
        <p>
        <label>Status</label><br />
        <input type="checkbox"
            name="Open"
            checked={Open}
            onChange={(e) => { setOpen(e.target.checked) }} />
        </p>
        <input type="submit" />
    </form>
    </div>
)
}

export default EditStore;
