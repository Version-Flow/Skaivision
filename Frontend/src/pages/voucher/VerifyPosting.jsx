import { useNavigate } from "react-router-dom";
import Config from "../../../helpers/config"


const VerifyPosting = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="" >

                <div className="col-md-12">
                    <div className="card-box">
                        <h3 className="header-titles text-center"><b>{Config[0].APP_ALLIASE} Admission Portal</b></h3>
                        <h5 className="text-center text-muted text-uppercase">Find out where you have been posted </h5>
                        <hr />


                        <div className="col-md-12 mt-2">

                            <p className="sub-header">Follow the guidelines below to complete your admission process. This section is for both students who are in the following categories: </p>
                            <b className='text-primary'>
                                1. Students yet to confirm placement, <br />
                                2. Students who have been confirmed but are yet to be admitted by the school, <br />
                                3. Students who previously left this section but want to return and continue.
                            </b>
                            <br /><br /><b>GUIDELINES:</b>
                            <ul>
                                <li>You must have a valid Index Number from the BECE in order to access this section.</li>
                                <li>If you are unsure whether you’ve been placed in a school or you’ve been placed but want the school to confirm your admission, click the <b className="text-info">Admit Me</b> button.</li>
                                <li>If the school has confirmed you and you have been assigned a Student Number, use the <b className="text-info">New Admission</b> button to fill in the necessary forms for final admission.</li>
                                <li>If you started filling the admission forms but left or got interrupted, use the <b className="text-info">Continue Admission</b> button to pick up where you left off.</li>
                            </ul>


                            <div className="col-md-12">
                                <label htmlFor="city" className="col-form-label">Name ( In this approach Firstname | Middlename | Lastname) <span className='required'>*</span></label>
                                <input type="text" className="form-control" id="city" placeholder="eg. Florence Ayisi Tiekubea" required />
                            </div>
                            <div className="col-md-12 mt-1">
                                <label htmlFor="city" className="col-form-label">Index Number or Student Number <span className='required'>*</span></label>
                                <input type="text" className="form-control" id="city" placeholder="eg. 2000001856" required />
                            </div>
                            <div className="col-md-12 d-flex mt-2">
                                <button type="submit" className="btn btn-danger mr-1 mb-1"> <i className='fe-repeat'></i> Reset Inputs</button>
                                <button type="submit" className="btn btn-success mr-1 mb-1"> <i className='fe-tag'></i> New Admission</button>
                                <button type="submit" className="btn btn-info mr-1 mb-1"> <i className='mdi mdi-account-search font-15'></i> Admit Me</button>
                                <button type="button" className="btn btn-primary mr-1 mb-1" onClick={() => navigate('/school/continue-admission')}> <i className='fe-arrow-right'></i> Continue Admission</button>
                            </div>

                        </div>
                        <hr />
                        <button type="submit" className="btn btn-secondary mr-1 mb-1" onClick={() => navigate('/school/find-admission')}> <i className='fe-arrow-left'></i> Go Back</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default VerifyPosting
