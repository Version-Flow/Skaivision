

import { useNavigate } from "react-router-dom";
import Config from "../../../helpers/config"

const ContnueAdmssion = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="container" >

                <div className="col-md-12">
                    <div className="card-box">
                        <h3 className="header-titles text-center"><b>{Config[0].APP_ALLIASE} Admission Portal</b></h3>
                        <h5 className="text-center text-muted text-uppercase">Continue Admssion by providing information below</h5>
                        <hr />

                        <form id="default-wizard">
                            <div className="col-md-12 mt-2">
                                <p className="sub-header">
                                    Follow the guidelines below to continue your admission process. This section applies to the following categories of students: <br />
                                    <b>
                                        1. If you are continuing as a BECE student, use your Voucher Pin and Student Number.<br />
                                        2. If you are applying for new admission as a general applicant, use your Voucher Pin and Token.
                                    </b>
                                </p>
                                <div className="col-md-12">
                                    <label htmlFor="city" className="col-form-label">Voucher Pin <span className='required'>*</span></label>
                                    <input type="text" className="form-control" id="city" placeholder="eg. 225000005558" required />
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label htmlFor="city" className="col-form-label">Token or Student Number <span className='required'>*</span></label>
                                    <input type="text" className="form-control" id="city" placeholder="eg. 2000001856" required />
                                </div>
                                <div className="col-md-12 d-flex mt-2">
                                    <button type="submit" className="btn btn-danger mr-1 mb-1"> <i className='fe-repeat'></i> Reset Inputs</button>
                                    <button type="button" className="btn btn-primary mr-1 mb-1"> <i className='fe-arrow-right'></i> Continue Admission</button>
                                </div>

                            </div>
                            <hr />
                            <button type="submit" className="btn btn-secondary mr-1 mb-1" onClick={() => navigate('/school/find-admission')}> <i className='fe-arrow-left'></i> Go Back</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContnueAdmssion
