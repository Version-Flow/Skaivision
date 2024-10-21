import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../../../helpers/config';

const AdmissionEntrance = () => {

    useEffect(() => {

        document.getElementById("pageTitle").innerHTML = "Online Admission Portal";
    
      }, [])


    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    // Handle radio button change and navigation
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // Perform navigation based on the clicked radio button
        if (selectedValue === 'buyform') {
            window.location.href = "/school/selection";
        } else if (selectedValue === 'verifyposting') {
            window.location.href = "/school/verify-posting";
        }
        console.log(selectedOption);
    };


    return (
        <div className="">
            <div className="col-md-12">
                <div className="card-box">
                <h2 className="header-titles text-center"><b>{Config[0].APP_ALLIASE} Admission Portal</b></h2>
                    <h5 className="text-center text-muted text-uppercase">Select what you want to do from the list</h5>
                    <hr />

                    <div className="col-md-12 mt-3">
                        <p className="sub-header">
                            Follow the guidelines below to complete your admission process. This section applies to the following categories of students or individuals:
                        </p>
                        <b className='text-primary'>
                            1. Those seeking new admission for themselves or their wards into CRECHE, NURSERY, LOWER PRIMARY, UPPER PRIMARY, JHS, SHS, or TERTIARY institutions. <br />
                            2. Students who have just completed the BECE and want to verify, confirm, or secure admission into SHS. <br />
                            3. Students or individuals who left the admission process earlier but want to return and continue.
                        </b>
                        <br /><br /><b>THINGS TO KNOW:</b>
                        <ul>
                            <li>Use the <b className="text-info">New Admission</b> button if you want to enroll your child or yourself into <b>CRECHE, NURSERY, LOWER PRIMARY, UPPER PRIMARY, JHS, SHS, or TERTIARY institutions.</b></li>
                            <li>Click the <b className="text-info">Verify Placement</b> button if you are a <b>BECE</b> student looking to verify your placement in an <b>SHS</b> after receiving placement from <b>WAEC.</b></li>
                            <li>If you started filling out the admission forms but were interrupted, use the <b className="text-info">Continue Admission</b> button to resume where you left off. </li>
                        </ul>

                        <div className="row custom-checkboxes mb-4 justify-content-center">
                            <label className="custom-card-checkbox" style={{ width: 250 }}>
                                <input type="radio" name="custom_option" value="buyform" onChange={handleOptionChange} className="custom-checkbox-input" />
                                <div className="custom-card">
                                    <div className="custom-icon-container">
                                        <i className="mdi mdi-bank-outline" />
                                    </div>
                                    <h4 className="custom-header">New Admission</h4>
                                    <p className="custom-description">Buy admission forms for (from CRECHE to TERTIARY) for yourself or your children</p>
                                </div>
                            </label>
                            <label className="custom-card-checkbox" style={{ width: 250 }}>
                                <input type="radio" name="custom_option" value="verifyposting" onChange={handleOptionChange} className="custom-checkbox-input" disabled/>
                                <div className="custom-card">
                                    <div className="custom-icon-container">
                                        <i className="mdi mdi-account-search" />
                                    </div>
                                    <h4 className="custom-header">Verify Placement</h4>
                                    <p className="custom-description">BECE students who have been placed to SHS and want to confirmation</p>
                                </div>
                            </label>
                        </div>
                        <hr />
                    </div>
                    <button type="button" className="btn btn-secondary mr-1 mb-1" onClick={() => navigate('/')}> <i className='fe-arrow-left'></i> Go Back</button>
                    <button type="button" className="btn btn-info mr-1 mb-1" onClick={() => navigate('/school/continue-admission')}> <i className='fe-arrow-right'></i> Continue Admission</button>
                </div>
            </div>
        </div>
    );
};

export default AdmissionEntrance;
