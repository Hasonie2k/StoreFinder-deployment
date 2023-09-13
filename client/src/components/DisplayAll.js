import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const DisplayAll = () => {
const [allStores, setAllStores] = useState([]);
useEffect(() => {
    axios
    .get("http://localhost:8000/api/stores")
    .then((response) => {
        console.log(response.data);

        const sortedStores = response.data.sort((a, b) => a.StoreNumber - b.StoreNumber);
        setAllStores(sortedStores);
    })
    .catch((err) => {
        console.log(err.response);
    });
}, []);
const handleDeleteStore = (idFromBelow) => {
    axios
    .delete(`http://localhost:8000/api/stores/${idFromBelow}`)
    .then((response) => {
        console.log("success deleting store");
        console.log(response);
        const filteredStores = allStores.filter((store) => {
            return store._id !== idFromBelow;
        });
        setAllStores(filteredStores);
    })
    .catch((err) => {
        console.log("error deleting Store", err.response);
        });
};
return (
<div className="container">
<Link to="/new">Add an Store</Link>
<h1>Find Stores in your area :)</h1>
<table className="table">
    <thead>
    <tr>
        <th scope="col">Store Name</th>
        <th scope="col">Store Number</th>
        <th scope="col">Open?</th>
        <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
    {allStores.map((store, index) => {
return (
        <tr key={store._id}>
        <td><Link to={`/view/${store._id}`}>{store.StoreName}</Link></td>
        <td>{store.StoreNumber}</td>
        <td>{store.Open.toString()}</td>
        <td>
            {store.Open ? (
            <button
                onClick={() => handleDeleteStore(store._id)}
                className="btn btn-danger">Delete</button>
            ) : null}
        </td>
        </tr>
    );
})}

    </tbody>
</table>
</div>
);
};

export default DisplayAll;