import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const ApplicationForms = () => {
    const navigate = useNavigate();
    const [modalContent, setModalContent] = useState({ title: "", message: "", types: "" });
    const [institutionName, setInstitutionName] = useState("");
    const [modalInstance, setModalInstance] = useState(null); // Modal instance state

    useEffect(() => {
        const storedInstitutionName = sessionStorage.getItem('institutionName');
        if (storedInstitutionName) {
            setInstitutionName(storedInstitutionName);
        }
    }, []);

    // Example data for the application forms (you can replace this with actual data from an API)
    const schoolData = [
        { id: 1, title: "Pre-School Forms (Creche & Nursery)", description: "Description for form will be here", price: "250", currency: "GHS", types: "Pre-School", message: null },
        { id: 2, title: "Basic School Forms (Lower & Upper)", description: "Description for form will be here", price: "150", currency: "GHS", types: "Basic", message: null },
        { id: 3, title: "Junior Secondary Forms (Form 1 - 3)", description: "Description for form will be here", price: "0", currency: "GHS", types: "JHS", message: "Messgae will be here" }
    ];

    // Handle the click event to navigate to another page (or perform another action)
    const handleFormClick = (form) => {
        if (form.price < 1) {
            setModalContent({
                title: form.title,
                message: form.message,
                types: form.types
            });

            sessionStorage.setItem('form-id', form.id);
            sessionStorage.setItem('form-type', form.types);
            sessionStorage.setItem('form-title', form.title);

            // Create the modal instance and store it in state
            const modal = new window.bootstrap.Modal(document.getElementById('myModal'));
            setModalInstance(modal);
            modal.show();
        } else {
            sessionStorage.setItem('form-title', form.title);
            sessionStorage.setItem('form-price', form.price);
            navigate('/school/purchase-forms');
        }
    };

    const decideReadyForms = (val) => {
        const lowerVal = val.toLowerCase();
    
        if (lowerVal === "pre-school" || lowerVal === "pre school" || lowerVal === "basic" || lowerVal === "jhs") {
            if (modalInstance) modalInstance.hide();
            window.location.href = "/school/admission-basic";
        } else if (lowerVal === "shs") {
            if (modalInstance) modalInstance.hide(); 
            window.location.href = "/school/admission-secondary";
        }
    }
    
    

    useEffect(() => {
        if (typeof window.bootstrap === 'undefined') {
            console.error("Bootstrap JS not loaded!");
        }
    }, []);

    return (
        <>
            <div className="">
                <div className="col-md-12">
                    <div className="card-box">
                        <h2 className="header-titles text-center"><b>Online Admission Market</b></h2>
                        <h4 className="text-center text-uppercase text-truncate mt-3"><b>{institutionName || "Institution Name"}</b></h4>
                        <h6 className="text-center text-muted text-uppercase">Select an application form from the list below</h6>
                        <hr />

                        <div className="col-md-12 mt-2">
                            {schoolData.map((form) => (
                                <a key={form.id} className="card shadow-none bg-primary text-decoration-none mb-2"
                                    href="#" role="button" onClick={() => handleFormClick(form)}>
                                    <div className="card-body">
                                        <h4 className="text-white text-uppercase">{form.title}</h4>
                                        <p className="card-text text-white">{form.description}</p>
                                        <h3 className="text-white text-uppercase">{form.currency} {form.price}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <hr />
                        <button type="button" className="btn btn-secondary mr-1 mb-1" onClick={() => navigate('/school/selection')}>
                            <i className='fe-arrow-left'></i> Go Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Section */}
            <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-truncate" id="modal-title">{modalContent.title}</h4>
                            <img src="/temp/assets/images/sv-bar-color.png" height={20} style={{ opacity: 0.5 }} />
                            <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <div className="card-block">
                                <p>{modalContent.message}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-info" onClick={() => decideReadyForms(modalContent.types)}>
                                <i className='mdi mdi-chevron-double-right '></i> Proceed Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApplicationForms;
