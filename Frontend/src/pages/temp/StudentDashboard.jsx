import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Config from "../../../helpers/config";


const StudentDashboard = () => {

    const navigate = useNavigate();

    useEffect(() => {
        var titles = "Applicant Dashboard";
        Config[0].currentPage = titles
        document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
    
      }, [])

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="col-md-12 row d-flex">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <div className="d-flex align-center text-info">
                                <i className='mdi mdi-car-light-high' style={{fontSize: 30, marginTop: -15, marginRight: 5, marginBottom: -5}}></i>
                                <h2 className="card-title text-info mb-0 text-truncate">Admission Status</h2>
                            </div>                                  
                            <hr className="custom-hr mt-0" />

                            <p className="card-text">This is a wider card with supporting text below as a
                                natural lead-in to additional content. This card has even longer content
                                than the first to show that equal height action.</p>

                            <hr className="custom-hr mb-1" />
                            <p className="card-text">
                                <button onClick={() => navigate('/temp/admission-status')} type="button" className="btn btn-info btn-sm mr-1 mb-0"> <i className='mdi mdi-chevron-triple-right'></i> Access Task Now</button>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-body">
                            <div className="d-flex align-center text-info">
                                <i className='mdi mdi-account-heart-outline' style={{fontSize: 30, marginTop: -15, marginRight: 5, marginBottom: -5}}></i>
                                <h2 className="card-title text-info mb-0 text-truncate">Personal Information</h2>
                            </div>                                   
                            <hr className="custom-hr mt-0" />

                            <p className="card-text">This is a wider card with supporting text below as a
                                natural lead-in to additional content. This card has even longer content
                                than the first to show that equal height action.</p>
                            <hr className="custom-hr mb-1" />
                            <p className="card-text">
                                <button type="button" className="btn btn-info btn-sm mr-1 mb-0"> <i className='mdi mdi-chevron-triple-right'></i> Access Task Now</button>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-body">
                            <div className="d-flex align-center text-info">
                                <i className='mdi mdi-check-network' style={{fontSize: 30, marginTop: -15, marginRight: 5, marginBottom: -5}}></i>
                                <h2 className="card-title text-info mb-0 text-truncate">Voucher Details</h2>
                            </div>                                  
                            <hr className="custom-hr mt-0" />

                            <p className="card-text">This is a wider card with supporting text below as a
                                natural lead-in to additional content. This card has even longer content
                                than the first to show that equal height action.</p>
                            <hr className="custom-hr mb-1" />
                            <p className="card-text">
                                <button type="button" className="btn btn-info btn-sm mr-1 mb-0"> <i className='mdi mdi-chevron-triple-right'></i> Access Task Now</button>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-body">
                            <div className="d-flex align-center text-info">
                                <i className='mdi mdi-account-key' style={{fontSize: 30, marginTop: -15, marginRight: 5, marginBottom: -5}}></i>
                                <h2 className="card-title text-info mb-0 text-truncate">Change Password</h2>
                            </div>                                 
                            <hr className="custom-hr mt-0" />

                            <p className="card-text">This is a wider card with supporting text below as a
                                natural lead-in to additional content. This card has even longer content
                                than the first to show that equal height action.</p>
                            <hr className="custom-hr mb-1" />
                            <p className="card-text">
                                <button onClick={() => navigate("/auth/change-password")} type="button" className="btn btn-info btn-sm mr-1 mb-0"> <i className='mdi mdi-chevron-triple-right'></i> Access Task Now</button>
                            </p>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default StudentDashboard
