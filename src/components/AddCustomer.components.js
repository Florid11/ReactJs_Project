import {useFormik} from "formik";
import * as yup from 'yup';
import {CustomerDataService} from "../services/Customers.services";


function AddCustomerComponents(props) {

    const validationSchema = yup.object({
        firstName: yup.string().required('This is a required Field!'),
        lastName: yup.string().required('This is a required Field!'),
        birthDate: yup.date('Please enter a valid date').required('This is a required Field!'),
        jobTitle: yup.string().required('This is a required Field!'),
        category: yup.string().required('This is a required Field!'),
        emailAddress: yup.string().required('This is a required Field!').email('Invalud email format'),
        street: yup.string().required('This is a required Field!'),
        houseNumber: yup.number().required('This is a required Field!'),
        state: yup.string().required('This is a required Field!'),
        country: yup.string().required('This is a required Field!'),
        city: yup.string().required('This is a required Field!'),
        zipCode: yup.string().required('This is a required Field!')
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            birthDate: '',
            jobTitle: '',
            category: '',
            emailAddress: '',
            street: '',
            houseNumber: '',
            state: '',
            country: '',
            city: '',
            zipCode: '',
        },

        onSubmit: (values) => {
            let customer = {
                firstName: values.firstName,
                lastName: values.lastName,
                birthDate: values.birthDate,
                jobTitle: values.jobTitle,
                category: values.category,
                emailAddress: values.emailAddress,
                customerAddress: {
                    street: values.street,
                    houseNumber: values.houseNumber,
                    state: values.state,
                    country: values.country,
                    city: values.city,
                    zipCode: values.zipCode,
                }
            }
            CustomerDataService.addCustomers(customer).then(res =>{
                props.history.push("/customers");
            })
        },

        validationSchema
    })

    const cancel = () => {
        props.history.push('/customers');
    }

    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Customer</h3>
                    <div className="card-body">
                        <form className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder={"First Name"} name={"firstName"} className="form-control"
                                    value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.firstName && formik.errors.firstName ? <div className={'input__error'}>{formik.errors.firstName}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder={"Last Name"} name={"lastName"} className="form-control"
                                           value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.lastName && formik.errors.lastName ? <div className={'input__error'}>{formik.errors.lastName}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>Birthdate:</label>
                                    <input placeholder={"Birthdate"} name={"birthDate"} className="form-control" type={"date"}
                                           value={formik.values.birthDate} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.birthDate && formik.errors.birthDate ? <div className={'input__error'}>{formik.errors.birthDate}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>Job Title:</label>
                                    <input placeholder={"Job Title"} name={"jobTitle"} className="form-control"
                                           value={formik.values.jobTitle} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.jobTitle && formik.errors.jobTitle ? <div className={'input__error'}>{formik.errors.jobTitle}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>Category:</label>
                                    <select value={formik.values.category} onChange={formik.handleChange} name="category" className="form-control" >
                                        <option selected hidden></option>
                                        <option>EXISTING_CUSTOMER</option>
                                        <option>NEW_CUSTOMER</option>
                                        <option>INACTIVE_CUSTOMER</option>
                                    </select>

                                    {formik.touched.category && formik.errors.category ? <div className='input__error'>{formik.errors.category}</div> : null}
                                </div>
                                <div className="form-group">
                                    <label>Email Address:</label>
                                    <input placeholder={"Email Address"} name={"emailAddress"} className="form-control"
                                           value={formik.values.emailAddress} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.emailAddress && formik.errors.emailAddress ? <div className={'input__error'}>{formik.errors.emailAddress}</div> :null}
                                </div>
                                <button className="btn btn-success m-100 mt-2" type={"submit"} onClick={formik.handleSubmit}>Add</button>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Street:</label>
                                    <input placeholder={"Street number etc"} name={"street"} className="form-control"
                                           value={formik.values.street} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.street && formik.errors.street ? <div className={'input__error'}>{formik.errors.street}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>House #:</label>
                                    <input placeholder={"House number"} name={"houseNumber"} className="form-control"
                                           value={formik.values.houseNumber} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.houseNumber && formik.errors.houseNumber ? <div className={'input__error'}>{formik.errors.houseNumber}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>State:</label>
                                    <input placeholder={"State"} name={"state"} className="form-control"
                                           value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.state && formik.errors.state ? <div className={'input__error'}>{formik.errors.state}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>Country:</label>
                                    <input placeholder={"Country"} name={"country"} className="form-control"
                                           value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.country && formik.errors.country ? <div className={'input__error'}>{formik.errors.country}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>City:</label>
                                    <input placeholder={"City"} name={"city"} className="form-control"
                                           value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.city && formik.errors.city ? <div className={'input__error'}>{formik.errors.city}</div> :null}
                                </div>
                                <div className="form-group">
                                    <label>Zip Code:</label>
                                    <input placeholder={"Zip Code"} name={"zipCode"} className="form-control"
                                           value={formik.values.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                    {formik.touched.zipCode && formik.errors.zipCode ? <div className={'input__error'}>{formik.errors.zipCode}</div> :null}
                                </div>
                                <button className="btn btn-danger w-100 mt-2" onClick={cancel.bind(this)} style={{marginLeft: "10px"}} >Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomerComponents;