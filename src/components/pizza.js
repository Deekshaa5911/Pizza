import { useState,useEffect } from "react";


import axios from 'axios';
import { useNavigate } from "react-router-dom";


function pizza(){


    const [pizza , setpizza]=useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        fetchpizza();
    }, [])




    const fetchpizza = () => {
        axios.get('http://localhost:5005/pizza')
            .then(response => {
                setpizza(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the pizza data',error)
            })
    }


    const handleDelete = (id)=> {
        axios.delete(`http://localhost:5005/pizza/${id}`)
        .then(response => {
            fetchpizza();
        })
        .catch(error => {
            console.error('There was an error deleting the pizza data',error)
        })
    }


    return (
        <div className="container mt-4">
            <h2>Pizza List</h2>
            <div className="row">
                {pizza.map(pizzaa => (
                    <div className="col-md-4" key={pizzaa.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{pizzaa.name}</h5>
                            <p className="card-text">Pizza: ${pizzaa.pizza}</p>
                            <p className="card-text">Price: ${pizzaa.price}</p>
                            <p className="card-text">Category: {pizzaa.Category}</p>
                            <p className="card-text">size: {pizzaa.size}</p>
                            <p className="card-text">Description: {vehicle.description}</p>
                            <button  className="btn btn-danger me-2" onClick={()=> handleDelete(pizzaa.id)}>DELETE</button>
                            <button className="btn btn-warning" onClick={() => navigate(`/update-Order/${pizza.id}`)}>UPDATE</button>
                        </div>
                        </div>
                    </div>


                ))}
            </div>


        </div>
    )
}


export default pizza;