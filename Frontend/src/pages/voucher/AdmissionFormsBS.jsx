
import { useEffect, useState } from "react";
import Config from "../../../helpers/config";


const AdmissionFormsBS = () => {

    const [pickups, setPickups] = useState([{ pickupName: "", pickupPhone: "", pickupRelationship: "" }]);

    useEffect(() => {
        document.getElementById("pageTitle").innerHTML = "Online Admission Portal";
    }, []);

    // Retrieve values from sessionStorage
    const institutionName = sessionStorage.getItem("institutionName") || "Unknown Institution";
    const formsTitle = sessionStorage.getItem("form-title") || "*";

    // Add next picker
    const handleAddNextPicker = () => {
        setPickups([...pickups, { pickupName: "", pickupPhone: "", pickupRelationship: "" }]);
    };

    // Only remove if it's not the first (default) picker
    const handleRemovePicker = (index) => {  
        if (index > 0) {
            setPickups(pickups.filter((_, i) => i !== index));
        }
    };

    // Handling the change of the pick up relationship
    const handleInputChange = (index, field, value) => {
        const updatedPickups = pickups.map((pickup, i) =>
            i === index ? { ...pickup, [field]: value } : pickup
        );
        setPickups(updatedPickups);
    };


    return (
        <>
            <div className="container">

                <div className="col-md-12">
                    <div className="card-box">
                        <h3 className="header-titles text-center"><b>{Config[0].APP_ALLIASE} Admission Portal</b></h3>
                        <h4 className="text-center text-uppercase">{institutionName || "institution Name"}</h4>
                        <h5 className="text-center text-muted text-uppercase">New Application for {formsTitle}</h5>
                        <hr />
                        <p className="sub-header">
                            Please fill in all required information below. It is mandatory to provide accurate information to enable you get admission. <b className='text-danger'>Please note that providing false information may result in the decline of your request and may also lead to legal action.</b> Rest assured, any information you provide will be processed, and we will get back to you. If you have any questions or need assistance, please contact our support team. We are excited to help you enhance your academics.
                        </p>


                        <form id="default-wizard">

                            <fieldset title={1}>
                                <legend>Student Information</legend>

                                <div className="container mt-4" >
                                    <h5 className="text-primary">Basic Details</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <label htmlFor="first-name" className="col-md-2 col-form-label">First Name <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="first-name" placeholder="Enter first name" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="middle-name" className="col-md-2 col-form-label">Middle Name (if applicable)</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="middle-name" placeholder="Enter middle name" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="last-name" className="col-md-2 col-form-label">Last Name <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="last-name" placeholder="Enter last name" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="dob" className="col-md-2 col-form-label">Date of Birth (DOB) <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="date" className="form-control" id="dob" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="place-of-birth" className="col-md-2 col-form-label">Place of Birth <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="place-of-birth" placeholder="Enter place of birth" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="region-of-birth" className="col-md-2 col-form-label">Region of Birth</label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="region-of-birth">
                                                <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="district-of-birth" className="col-md-2 col-form-label">District of Birth</label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="district-of-birth">
                                                <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="gender" className="col-md-2 col-form-label">Gender <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control" id="gender" required>
                                                <option value={0}>Choose...</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="nationality" className="col-md-2 col-form-label">Nationality <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="nationality" required>
                                                <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="region" className="col-md-2 col-form-label">Region From<span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="region" required>
                                                <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="district" className="col-md-2 col-form-label">District From<span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="district" required>
                                                <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2">
                                        <label htmlFor="hometown" className="col-md-2 col-form-label">Hometown<span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="hometown" placeholder="Enter current address" required />
                                        </div>
                                    </div>  

                                    <div className="form-group row mb-2">
                                        <label htmlFor="current-address" className="col-md-2 col-form-label">Current Address (Residential) <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <small>Describe the address by region, district, town and specific location</small>
                                            <textarea className="form-control" name="current-address" id="current-address" rows={3}></textarea>
                                        </div>
                                    </div>                                  

                                    <div className="form-group row mb-2">
                                        <label htmlFor="languages-spoken" className="col-md-2 col-form-label">Can Speak <span className='required'>*</span></label>
                                        <div className="col-md-10 tags-default">
                                            <small>Use comma (,) to separate them</small>
                                            <input type="text" className="form-control" data-role="tagsinput"  id="languages-spoken" placeholder="Enter languages" required />
                                        </div>
                                    </div>

                                    <h5 className="text-primary">Health Information</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <label htmlFor="blood-group" className="col-md-2 col-form-label">Blood Group</label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="blood-group">
                                                <option value={0}>Choose...</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className="form-group row mb-2">
                                        <label htmlFor="allergies" className="col-md-2 col-form-label">Allergies (if any)</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="allergies" placeholder="Enter allergies" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <label htmlFor="medical-conditions" className="col-md-2 col-form-label">Medical Conditions (if any)</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="medical-conditions" placeholder="Enter medical conditions" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <label htmlFor="immunization-record" className="col-md-2 col-form-label">Immunization Record</label>
                                        <div className="col-md-10">
                                            <input type="file" className="form-control" id="immunization-record" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="insurance-number" className="col-md-2 col-form-label">Insurance Number</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="insurance-number" placeholder="Enter insurance number" />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2">
                                        <label htmlFor="health0insurance" className="col-md-2 col-form-label">Health Insurance</label>
                                        <div className="col-md-10">
                                            <small className="form-text">Upload a single page pdf conatining front and back of the insurance card</small>
                                            <input type="file" className="form-control" id="health-insurance" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="special-needs" className="col-md-2 col-form-label">Special Needs (if applicable)</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="special-needs" placeholder="Enter special needs" />
                                        </div>
                                    </div>

                                    <h5 className="text-primary">Academic Information</h5>
                                    <hr />


                                    <div className="form-group row mb-2">
                                        <label htmlFor="admission-level" className="col-md-2 col-form-label">Admission Level <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="admission-level" required>
                                             <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="previous-school" className="col-md-2 col-form-label">Previous School (if applicable)</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="previous-school" placeholder="Enter previous school" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="class-level-applying" className="col-md-2 col-form-label">Class Applying For <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="class-level-applying" required>
                                                <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="previous-grades" className="col-md-2 col-form-label">Previous Grades (if applicable)</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="previous-grades" placeholder="Enter previous grades" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-1">
                                        <label htmlFor="preferred-subjects" className="col-md-2 col-form-label">Preferred Subjects (All applied)</label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="preferred-subjects" name="preferred-subjects[]" multiple="multiple" data-placeholder="Choose all preferred subjects" required>
                                                <option value="">Select preferred subjects</option>
                                            </select>
                                        </div>
                                    </div>

                                    
                                    <div className="form-group row mb-2">
                                        <label htmlFor="interests" className="col-md-2 col-form-label">Have Interest in</label>
                                        <div className="col-md-10 tags-default">
                                            <small>Use comma (,) to separate them</small>
                                            <input type="text" className="form-control" data-role="tagsinput"  id="interests" placeholder="List all the interests" required />
                                        </div>
                                    </div>


                                    <h5 className="text-primary">Emergency Contact</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <label htmlFor="emergency-contact-name" className="col-md-2 col-form-label">Person Name <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="emergency-contact-name" placeholder="Enter emergency contact name" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="emergency-relationship" className="col-md-2 col-form-label">Relationship</label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="emergency-relationship">
                                                <option value="">Choose...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="emergency-contact-phone" className="col-md-2 col-form-label">Phone Number(s) <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <small>We will contact you here regarding admissions, academics, and potentially health-related matters.</small>
                                            <input type="text" className="form-control" id="emergency-contact-phone" placeholder="Enter phone number" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="emergency-email-address" className="col-md-2 col-form-label">Email Address <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <small>We will contact you here regarding admissions, academics, and potentially health-related matters.</small>
                                            <input type="text" className="form-control" id="emergency-email-address" placeholder="Enter email address" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="emergency-contact-address" className="col-md-2 col-form-label">Current Address <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                        <small>Describe the address by region, district, town and specific location</small>
                                            <textarea className="form-control" id="emergency-contact-address" rows={2}></textarea>
                                        </div>
                                    </div>

                                    <h5 className="text-primary mt-3">Additional Information</h5>
                                    <hr />

                                    <div className="form-group row mb-0">
                                        <label htmlFor="ethnicity" className="col-md-2 col-form-label">Ethnicity</label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="ethnicity">
                                                <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className="form-group row mb-2">
                                        <label htmlFor="picture" className="col-md-2 col-form-label">Passport Picture</label>
                                        <div className="col-md-10">
                                            <small className="form-text">2 x 2 inch (51 x 51 mm) passport-sized photo with white background less than 6 months old </small>
                                            <input type="file" className="form-control" id="picture" />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <label htmlFor="birth-certificate" className="col-md-2 col-form-label">Birth Certificate</label>
                                        <div className="col-md-10">
                                            <input type="file" className="form-control" id="birth-certificate" />
                                        </div>
                                    </div>                                  

                                    <div className="form-group row mb-2">
                                        <label htmlFor="religion" className="col-md-2 col-form-label">Religion</label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="religion">
                                                <option value={0}>Choose...</option>
                                            </select>
                                        </div>
                                    </div>


                                    <h5 className="text-primary mt-3">Individuals Allowed to Pick Up the Child</h5>
                                    <hr />

                                    {pickups.map((pickup, index) => (
                                        <div key={index} style={{ border: "whitesmoke 0.5px solid", padding: 10, marginTop:5 }}>
                                            <div className="form-group row mb-2">
                                                <label htmlFor={`pickup-name-${index}`} className="col-md-2 col-form-label">
                                                    Full Name <span className="required">*</span>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" id={`pickup-name-${index}`} placeholder="Enter full name" value={pickup.pickupName}
                                                        onChange={(e) => handleInputChange(index, "pickupName", e.target.value)} required />
                                                </div>
                                            </div>

                                            <div className="form-group row mb-2">
                                                <label htmlFor={`pickup-phone-${index}`} className="col-md-2 col-form-label">
                                                    Phone Number <span className="required">*</span>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" id={`pickup-phone-${index}`} placeholder="Enter phone number" value={pickup.pickupPhone} 
                                                        onChange={(e) => handleInputChange(index, "pickupPhone", e.target.value)} required />
                                                </div>
                                            </div>

                                            <div className="form-group row mb-0">
                                                <label htmlFor={`pickup-relationship-${index}`} className="col-md-2 col-form-label">
                                                    Relationship <span className="required">*</span>
                                                </label>
                                                <div className={index > 0 ? "col-md-8" : "col-md-10"}>
                                                    <select className="form-control select2" id={`pickup-relationship-${index}`} value={pickup.pickupRelationship}
                                                        onChange={(e) => handleInputChange(index, "pickupRelationship", e.target.value)} required >
                                                       <option value={0}>Choose...</option>
                                                    </select>
                                                </div>

                                              
                                                {index > 0 && (
                                                    <div className="col-md-2">
                                                        <button type="button"className="btn btn-danger" onClick={() => handleRemovePicker(index)} >
                                                            Remove Picker
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="row col-md-12">
                                        <button type="button" className="btn btn-secondary mt-3" onClick={handleAddNextPicker} >
                                            Add Next Picker
                                        </button>
                                    </div>

                                    <div className="col-md-12 mt-3">
                                        <label htmlFor="pickup-agreement" className="form-label">
                                            By checking this box, I hereby authorize the individuals listed above to pick up my child from school in my absence or in the case of any emergency. I understand that the school will not release my child to any individual not listed, and I take full responsibility for providing accurate information. <span className='required'>*</span>
                                        </label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="pickup-agreement" required />
                                            <label className="form-check-label" htmlFor="pickup-agreement">
                                                I agree to the above terms.
                                            </label>
                                        </div>
                                    </div>


                                    <h5 className="text-primary mt-4">Consent</h5>
                                    <hr />

                                    <div className="col-md-12">
                                        <label htmlFor="consent-sporting-activities" className="form-label">
                                            Do you give your consent for your child to participate in sporting activities under any circumstances? <span className='required'>*</span>
                                        </label>
                                        <select className="form-control" id="consent-sporting-activities" required>
                                        <option value={0}>Choose...</option>
                                            <option value="Agree">Agree</option>
                                            <option value="Partially Agree">Partially Agree</option>
                                            <option value="Disagree">Disagree</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12 mt-2">
                                        <label htmlFor="consent-field-trips" className="form-label">
                                            Do you consent to your child participating in any field trips organized by the school? <span className='required'>*</span>
                                        </label>
                                        <select className="form-control" id="consent-field-trips" required>
                                        <option value={0}>Choose...</option>
                                            <option value="Agree">Agree</option>
                                            <option value="Partially Agree">Partially Agree</option>
                                            <option value="Disagree">Disagree</option>
                                        </select>
                                    </div>


                                    <h5 className="text-primary mt-3">Financial Information (Inf any)</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <label htmlFor="name-person-responsible-fees" className="col-md-2 col-form-label">Who is reponsible</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="name-person-responsible-fees" placeholder="Enter name" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="phone-person-responsible-fees" className="col-md-2 col-form-label">Phone Number</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="phone-person-responsible-fees" placeholder="Enter phone number" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="scholarship" className="col-md-2 col-form-label">Scholarship or Financial Aid</label>
                                        <div className="col-md-10">
                                            <select className="form-control" id="scholarship">
                                            <option value={0}>Choose...</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>

                            </fieldset>

                            <fieldset title={2}>
                                <legend>Parent Information</legend>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className="text-primary text-uppercase">Primary Parent/Guardian</h5>
                                        <hr />

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-first-name" className="col-md-2 col-form-label">First Name <span className='required'>*</span></label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="primary-parent-first-name" placeholder="Enter first name" required />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-middle-name" className="col-md-2 col-form-label">Middle Name (if applicable)</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="primary-parent-middle-name" placeholder="Enter middle name" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-last-name" className="col-md-2 col-form-label">Last Name <span className='required'>*</span></label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="primary-parent-last-name" placeholder="Enter last name" required />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-relationship" className="col-md-2 col-form-label">
                                                Relationship <span className='required'>*</span>
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-control" id="primary-parent-relationship" required>
                                                <option value={0}>Choose...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-nationality" className="col-md-2 col-form-label">
                                                Nationality <span className='required'>*</span>
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-control select2" id="primary-parent-nationality" required>
                                                <option value={0}>Choose...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-region" className="col-md-2 col-form-label">
                                                Region <span className='required'>*</span>
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-control select2" id="primary-parent-region" required>
                                                <option value={0}>Choose...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-district" className="col-md-2 col-form-label">
                                                District <span className='required'>*</span>
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-control select2" id="primary-parent-district" required>
                                                <option value={0}>Choose...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-occupation" className="col-md-2 col-form-label">Occupation <span className='required'>*</span></label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="primary-parent-occupation" placeholder="Enter occupation" required />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-phone" className="col-md-2 col-form-label">Phone Number(s) <span className='required'>*</span></label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="primary-parent-phone" placeholder="Enter phone number(s)" required />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-email" className="col-md-2 col-form-label">Email Address</label>
                                            <div className="col-md-10">
                                                <input type="email" className="form-control" id="primary-parent-email" placeholder="Enter email address" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-current-address" className="col-md-2 col-form-label">Current Address <span className='required'>*</span></label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="primary-parent-current-address" placeholder="Enter current address" required />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-office-address" className="col-md-2 col-form-label">Office Address</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="primary-parent-office-address" placeholder="Enter office address" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="primary-parent-marital-status" className="col-md-2 col-form-label"> Marital Status</label>
                                            <div className="col-md-10">
                                                <select className="form-control select2" id="primary-parent-marital-status">
                                                <option value={0}>Choose...</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Divorced">Divorced</option>
                                                    <option value="Widowed">Widowed</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <h5 className="text-primary text-uppercase">Secondary Parent/Guardian (if applicable)</h5>
                                        <hr />

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-first-name" className="col-md-2 col-form-label">First Name</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="secondary-parent-first-name" placeholder="Enter first name" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-middle-name" className="col-md-2 col-form-label">Middle Name (if applicable)</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="secondary-parent-middle-name" placeholder="Enter middle name" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-last-name" className="col-md-2 col-form-label">Last Name</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="secondary-parent-last-name" placeholder="Enter last name" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-relationship" className="col-md-2 col-form-label"> Relationship </label>
                                            <div className="col-md-10">
                                                <select className="form-control" id="secondary-parent-relationship">
                                                <option value={0}>Choose...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-nationality" className="col-md-2 col-form-label">
                                                Nationality
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-control select2" id="secondary-parent-nationality">
                                                <option value={0}>Choose...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-region" className="col-md-2 col-form-label">
                                                Region
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-control select2" id="secondary-parent-region">
                                                <option value={0}>Choose...</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-district" className="col-md-2 col-form-label">
                                                District
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-control select2" id="secondary-parent-district">
                                                <option value={0}>Choose...</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-occupation" className="col-md-2 col-form-label">Occupation</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="secondary-parent-occupation" placeholder="Enter occupation" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-phone" className="col-md-2 col-form-label">Phone Number(s)</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="secondary-parent-phone" placeholder="Enter phone number(s)" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-email" className="col-md-2 col-form-label">Email Address</label>
                                            <div className="col-md-10">
                                                <input type="email" className="form-control" id="secondary-parent-email" placeholder="Enter email address" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-current-address" className="col-md-2 col-form-label">Current Address</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="secondary-parent-current-address" placeholder="Enter current address" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-office-address" className="col-md-2 col-form-label">Office Address</label>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" id="secondary-parent-office-address" placeholder="Enter office address" />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <label htmlFor="secondary-parent-marital-status" className="col-md-2 col-form-label">
                                                Marital Status
                                            </label>
                                            <div className="col-md-10">
                                                <select className="form-control select2" id="secondary-parent-marital-status">
                                                <option value={0}>Choose...</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Divorced">Divorced</option>
                                                    <option value="Widowed">Widowed</option>
                                                    <option value="Separated">Separated</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </fieldset>

                            <fieldset title={3}>
                                <legend>Agreement</legend>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className="text-primary text-uppercase">Data Privacy, Terms and Conditions</h5>
                                        <hr />

                                        <div className="form-group row mb-2">
                                            <div className="col-md-12">
                                                <p>
                                                    By signing this agreement, you acknowledge that you have read and understood the following terms and conditions related to the enrollment of your child in our school.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <div className="col-md-12">
                                                <h6>1. Data Privacy</h6>
                                                <p>
                                                    We are committed to protecting your child’s personal information. All data collected during the enrollment process will be handled in accordance with our privacy policy and will not be shared with third parties without consent.
                                                </p>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="data_privacy" required />
                                                    <label className="form-check-label" htmlFor="data_privacy">
                                                        I agree to the data privacy policy.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <div className="col-md-12">
                                                <h6>2. School Rules and Regulations</h6>
                                                <p>
                                                    Parents and guardians must familiarize themselves with the school’s rules and regulations, which are designed to ensure a safe and conducive learning environment for all students. Failure to comply with these rules may result in disciplinary action.
                                                </p>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="school_rules" required />
                                                    <label className="form-check-label" htmlFor="school_rules">
                                                        I acknowledge and agree to adhere to the school rules and regulations.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <div className="col-md-12">
                                                <h6>3. Contract Agreement on False Information</h6>
                                                <p>
                                                    Providing false or misleading information during the enrollment process is strictly prohibited and may result in immediate termination of the enrollment contract.
                                                </p>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="false_info" required />
                                                    <label className="form-check-label" htmlFor="false_info">
                                                        I agree that any false information provided may result in termination of enrollment.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <div className="col-md-12">
                                                <h6>4. Contract Defamation</h6>
                                                <p>
                                                    Any defamatory statements made regarding the school or its staff will not be tolerated and may result in legal action. Parents are encouraged to communicate any grievances through the proper channels.
                                                </p>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="defamation" required />
                                                    <label className="form-check-label" htmlFor="defamation">
                                                        I agree not to make any defamatory statements about the school or its staff.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <div className="col-md-12">
                                                <h6>5. System Policies</h6>
                                                <p>
                                                    All users of the school’s systems and platforms must adhere to the policies outlined in the user agreement. This includes acceptable use of technology, data security, and respect for intellectual property.
                                                </p>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="system_policies" required />
                                                    <label className="form-check-label" htmlFor="system_policies">
                                                        I agree to abide by the system policies.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row mb-2">
                                            <div className="col-md-12">
                                                <h6>6. PTA Meetings</h6>
                                                <p>
                                                    Attendance at Parent-Teacher Association (PTA) meetings is mandatory. Parents are required to attend a minimum of one PTA meeting each term. Failure to do so will incur a fee.
                                                </p>
                                                <p>
                                                    Additionally, spreading false rumors or misinformation regarding any matters discussed during the PTA meetings will not be tolerated. Such actions may result in penalties, as well as potential disciplinary action.
                                                </p>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="pta_meeting" required />
                                                    <label className="form-check-label" htmlFor="pta_meeting">
                                                        I agree to attend PTA meetings and acknowledge the penalties for non-compliance and spreading false rumors.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row mb-2">
                                            <div className="col-md-12">
                                                <p>
                                                    By accepting these terms and conditions, you confirm that you understand your rights and responsibilities as a parent or guardian of a student at this school.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                            <button type="submit" className="btn btn-primary stepy-finish">Submit</button>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AdmissionFormsBS
