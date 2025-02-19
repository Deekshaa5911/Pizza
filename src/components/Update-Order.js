import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import { useEffect, useState } from "react";




function UpdateOrder(){
    const { id} = useParams();
    const [pizza, setpizza] = useState(null);




    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`http://localhost:5005/pizza/${id}`)
        .then(response => {
            set(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the pizza data',error)
        })
    },[id])




    const formik = useFormik({
        initialValues: { 
            pizzaname: pizza?.pizzaname || '',
            price: pizza?.price ||'',
            Category: pizza?.Category||'',
            size: pizza?.size ||'',
            escription: pizza?.description ||''
        },
        enableReinitialize:true,
        validationSchema: Yup.object({
            pizzaname: Yup.string()
                    .min(5,'Name must be at least 5 characters')
                    .required('Name is required'),
            price: Yup.number()
                    .min(1,'Price must be greater than 0')
                    .required('Price is required'),
            Category: Yup.string()
                    .min(1,'Mileage must be greater than 0')
                    .required('Mileage is required'),
            size: Yup.string()
                    .min(1,'seats must be greater than 0')
                    .required('Name is required'),
           
        }),
        onSubmit: (values , {setSubmitting, resetForm , setStatus})=>{
            axios.put(`http://localhost:5005/pizza/${id}`,values)
                .then(response=> {
                    setStatus('success');
                    resetForm();
                    navigate('/pizza');
                })
                .catch(error=>{
                    setStatus('error');
                })
                .finally(()=>{
                    setSubmitting(false);
                });
        },
    });




    return (
        <div className="container mt-4">
            <h2>Update Order</h2>


            <form onSubmit={formik.handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="pizzaname" className="form-label">pizzaname</label>
                    <input
                        id="pizzaname"
                        name="pizzanamee"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.pizzaname}
                        />


                        {
                            formik.touched.pizzaname &&  formik.errors.pizzaname ? (
                                <div className="text-danger">{formik.errors.pizzaname}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        />


                        {
                            formik.touched.price &&  formik.errors.price ? (
                                <div className="text-danger">{formik.errors.price}</div>
                            ): null
                        }
                </div>




                <div className="mb-3">
                    <label htmlFor="Category" className="form-label">Category</label>
                    <input
                        id="Category"
                        name="Category"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.Category}
                        />


                        {
                            formik.touched.Category &&  formik.errors.Category ? (
                                <div className="text-danger">{formik.errors.Category}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="size" className="form-label">size</label>
                    <input
                        id="size"
                        name="size"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.size}
                        />


                        {
                            formik.touched.size &&  formik.errors.size ? (
                                <div className="text-danger">{formik.errors.size}</div>
                            ): null
                        }
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        />


                        {
                            formik.touched.description &&  formik.errors.descrption ? (
                                <div className="text-danger">{formik.errors.description}</div>
                            ): null
                        }
                </div>




                <button type="submit" className="btn btn-primary">
                    submit
                </button>
            </form>


        </div>
    )


}


export default Update-Order;