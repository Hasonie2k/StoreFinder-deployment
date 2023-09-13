import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DisplayAll = () => {
const [store, setStore] = useState({});
const { id } = useParams();

useEffect(() => {
    axios
    .get(`http://localhost:8000/api/stores/${id}`)
    .then((response) => {
        console.log(response.data);
        setStore(response.data);
    })
    .catch((err) => {
        console.log(err.response);
    });
}, [id]);

const getOpenStatus = (isOpen) => {
    return isOpen ? "Open" : "Closed";
};

return (
    <div className="container">
    <Link to="/">Home</Link>
    <div>
        <h2>Store Information</h2>
        <p><strong>Store Name:</strong> {store.StoreName}</p>
        <p><strong>Store Number:</strong> {store.StoreNumber}</p>
        <p><strong>Open:</strong> {getOpenStatus(store.Open)}</p>
        <Link to={`/edit/${id}`}>
        <button>Edit Store</button>
        </Link>
    </div>
    </div>
);
};

export default DisplayAll;
