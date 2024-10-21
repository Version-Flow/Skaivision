import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Config from "../../../helpers/config";

const AdmissionStatus = () => {
  const navigate = useNavigate();
  const [isAdmitted, setIsAdmitted] = useState(false); 
  const [studentName, setStudentName] = useState(''); 
  const [studentNumber, setStudentNumber] = useState(''); 
  const [applicantNumber, setApplicantNumber] = useState(''); 
  const [institutionName, setInstitutionName] = useState(''); 
  const [className, setClassName] = useState(''); 

  useEffect(() => {
    const admissionStatus = true;
    const name = "Messta Jeff"; 
    const stdNumber = "S123456"; 
    const applNumber = "A789012"; 
    const instName = "Skai Mount International School"; 
    const clsName = "Grade 11"; 

    setIsAdmitted(admissionStatus);
    setStudentName(name);
    setStudentNumber(stdNumber);
    setApplicantNumber(applNumber);
    setInstitutionName(instName);
    setClassName(clsName);

    const titles = "Admission Status";
    Config[0].currentPage = titles;
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="col-md-9 row d-flex">
          <div className="card card-body">
            <div className="d-flex justify-content-center text-info">
              <i className='mdi mdi-car-light-high' style={{ fontSize: 30, marginTop: 5, marginRight: 5, }}></i>
              <h2 className="text-info mb-1 text-truncate">Admission Status</h2>
            </div>
            <hr className="custom-hr mt-0" />

            <p className="card-text font-15">
              {isAdmitted ? (
                <>
                  Congratulations, <strong className="text-uppercase">{studentName}</strong>! You have been admitted to <b className="text-uppercase">{className}</b> in <b className="text-uppercase">{institutionName}</b> <br />
                  Your Student Number is: <strong>{studentNumber}</strong>, and you will use this number through your stay with us. <br /> <br />
                  Please print your admission letter and prospectus below to see more detailed information about this admission and what is expected from you to do next. Thank you for choosing <b className="text-uppercase">{institutionName}</b>.
                </>
              ) : (
                <>
                  Dear <strong>{studentName}</strong>, unfortunately, you have not been admitted at this time. <br />
                  Your Applicant Number is: <strong>{applicantNumber}</strong>. <br />
                  Please check back later or contact the admissions office for further assistance.
                </>
              )}
            </p>

            <hr className="custom-hr mb-1" />

            <p className="card-text">
              <button type="button" className="btn btn-secondary mr-1 mb-0 btn-sm" onClick={() => navigate('/temp/applicant-dashboard')}>
                <i className='fe-arrow-left'></i> Go Back
              </button>

              {isAdmitted && (
                <>
                  <button type="button" className="btn btn-info btn-sm mr-1 mb-0">
                    <i className='mdi mdi-printer'></i> Print Letter
                  </button>
                  <button type="button" className="btn btn-info btn-sm mr-1 mb-0">
                    <i className='mdi mdi-download'></i> Print Prospectus
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionStatus;
