import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';




function AddOrder(){




    const navigate = useNavigate();




    const formik = useFormik({
        initialValues: {
            pizzaname:'',
            price:'',
            Category:'',
            size:'',
            description:''
        },
        validationSchema: Yup.object({
            pizzaname: Yup.string()
                    .min(20,'Name must be at least 20 characters')
                    .required('Name is required'),
            price: Yup.number()
                    .min(1,'Price must be greater than 0')
                    .required('Price is required'),
            Category: Yup.string()
                    .min(20,'Name must be at least 20 characters')
                    .required('Name is required'),
            size: Yup.number()
                    .min(15,'seats must be greater than 15')
                    .required('Name is required'),
            discription: Yup.string()
                    .min(20,'Name must be at least 20 characters')
                    .required('Name is required'),
           
        }),
        onSubmit: (values , {setSubmitting, resetForm , setStatus})=>{
            axios.post('http://localhost:5000/pizza',values)
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
            <h2>Add New Order</h2>


            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="pizzaname" className="form-label">pizzaname</label>
                    <input
                        id="pizzaname"
                        name="pizzaname"
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
                        name="sizer"
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


export default Add-Order;

