import { useNavigate } from "react-router-dom";
import Config from "../../../helpers/config";

const ApplicationPayment = () => {
    const navigate = useNavigate();

    // Retrieve values from sessionStorage
    const institutionName = sessionStorage.getItem('institutionName') || "Unknown Institution";
    const title = sessionStorage.getItem('form-title') || "*";
    const price = sessionStorage.getItem('form-price') || "0";

    return (
        <>
            <div className="container">
                <div className="col-md-12">
                    <div className="card-box">
                        <h3 className="header-titles text-center"><b>{Config[0].APP_ALLIASE} Admission Portal</b></h3>
                        <h4 className="text-center text-uppercase">{institutionName}</h4>
                        <h5 className="text-center text-muted text-uppercase">Voucher Payment</h5>
                        <hr />
                        <div className="col-md-12 mt-2">
                            <div className="alert alert-info">
                                <p>Kindly add your name, phone number and email address and select your preferred payment method to complete the payment process.</p>
                                <span className="text-danger"><strong>NB:</strong> Please ensure that you provide a valid email address so that we can send you the voucher details.</span> <br />
                                <h3><span className="font-15 text-muted">Amount</span><br />GHS {price}</h3>
                                <h3><span className="font-15 text-muted">Type of Form buying</span><br />{title}</h3>
                            </div>
                            <div className="row d-flex">
                                <div className="col-md-6">
                                    <label htmlFor="buyerName" className="form-label">Name of the buyer ( Firstname | Middlename | Lastname) <span className='required'>*</span></label>
                                    <input type="text" className="form-control" id="buyerName" placeholder="eg. Messta Jeff" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone Number <span className='required'>*</span></label>
                                    <input type="text" className="form-control" id="phone" placeholder="eg. +233245482029" required />
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="col-md-10 mt-2">
                                    <label htmlFor="email" className="form-label">Email Address <span className='required'>*</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="eg. info@skaimount.com" required />
                                </div>
                                <div className="col-md-2 mt-4">
                                    <button type="button" className="btn btn-primary mr-1 mb-1"> <i className='fe-arrow-right'></i> Pay Now</button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <button type="button" className="btn btn-secondary mr-1 mb-1" onClick={() => navigate('/school/application-forms')}> <i className='fe-arrow-left'></i> Go Back</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplicationPayment;
