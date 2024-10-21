import { useEffect } from "react";

import Config from "../../../helpers/config";



const AdmissionMessage = () => {

    useEffect(() => {

        document.getElementById("pageTitle").innerHTML = "Online Admission Portal";

    }, [])



    // Retrieve values from sessionStorage
    const institutionName = sessionStorage.getItem('institutionName') || "Unknown Institution";
    const formsTitle = sessionStorage.getItem('form-title') || "*";


    return (
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: 100 }}>
            <div className="col-md-8">
                <div className="card-box">
                    <h2 className="header-titles text-center"><b>{Config[0].APP_ALLIASE} Admission Portal</b></h2>
                    <h4 className="text-center text-muted text-uppercase">{institutionName}</h4>
                    <hr />

                    <div className="col-md-12 mt-3">
                        <p className="text-muted" style={{ fontSize: 18}}>
                            Your <b>{formsTitle}</b> for <b>{institutionName}</b> has been successfully submitted, a <b>temporary student number</b> has been sent to you via sms. Our admissions team is reviewing your application, and you will be contacted within 72 working hours. Please expect an SMS or email on the emergency contact you provided. Thank you.
                        </p>



                        <hr />
                    </div>
                    <a role="button" href="/" className="btn btn-secondary mr-1 mb-1"> <i className='fe-arrow-left'></i> Go Home</a>
                </div>
            </div>
        </div>
    );
}

export default AdmissionMessage
