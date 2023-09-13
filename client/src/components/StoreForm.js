import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StoreForm = () => {
const [StoreName, setStoreName] = useState("");
const [StoreNumber, setStoreNumber] = useState("");
const [Open, setOpen] = useState(false); 
const [errors, setErrors] = useState({});
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:8000/api/stores", {
        StoreName: StoreName,
        StoreNumber: StoreNumber,
        Open: Open, 
    })
        .then((response) => {
        console.log(response);
        navigate("/");
    })
        .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
    });
};


return (
    <div className="Sector-1">
        <Link to="/">Home</Link>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            className="form-control"
            onChange={(e) => setStoreName(e.target.value)}
            value={StoreName}
        />
        {errors.StoreName ? <p>{errors.StoreName.message}</p> : null}

        <input
            type="number"
            className="form-control"
            onChange={(e) => setStoreNumber(e.target.value)}
            value={StoreNumber}
        />
        {errors.StoreNumber ? <p>{errors.StoreNumber.message}</p> : null}

        <label>
            Open:
            <input
            type="checkbox"
            className="form-check-input"
            onChange={(e) => setOpen(e.target.checked)} 
            checked={Open}
        />
        </label>
        <button className="btn btn-primary" type="submit">
        SUBMIT
        </button>
    </form>
    </div>
    );
};

export default StoreForm;
