
import { useEffect, useState } from 'react';
import Config from '../../../helpers/config';
import useModal from '../../hooks/useModal';
import Swal from 'sweetalert2';
import axios from 'axios';
import $ from 'jquery';

const CreateAccount = () => {

    const headers = Config[0].headers;
    const baseUrl = Config[0].BASE_URL;

    const [dynamicPackages, setDynamicPackages] = useState([]);

    const { modalRef } = useModal(false);


    // Fetch data from your API or use static data
    const fetchData = () => {
        axios.get(`${baseUrl}/settings/packages`, { headers })
            .then(response => {
                const fetchedData = response.data;
                if (fetchedData.success) {
                    setDynamicPackages(fetchedData.data);
                } else {
                    Swal.fire({ icon: 'error', title: 'Error!', text: fetchedData.message });
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                Swal.fire({ icon: 'error', title: 'Error!', text: 'Failed to fetch data.' });
            })

    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [baseUrl, headers]);

    // Global event binding for delete buttons
    $(document).on('click', '.btn-more', function (e) {
        e.preventDefault();

        const title = $(this).data('title');
        // const id = $(this).data('id');
        const description = decodeURIComponent($(this).data('description'));

        document.getElementById('des').innerHTML = description;

        document.getElementById('modal-title').innerText = "Modifying " + title;
        window.bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal2')).show();

    });




    return (
        <>

            <div className="d-flex justify-content-center align-items-center">

                <div className="col-md-12">
                    <div className="card-box">
                        <h2 className="header-titles text-center"><b>Setting Up A New Account with {Config[0].APP_ALLIASE}</b></h2>
                        <p className="sub-header">
                            Please fill in all required information below, select the packages you wish to use, and complete all necessary payments. It is mandatory to provide accurate information to use our system. <b className='text-danger'>Please note that providing false information may result in the decline of your request and may also lead to legal action.</b> Rest assured, any information you provide will be processed, and we will get back to you within 24 hours. If you have any questions or need assistance, please contact our support team. We are excited to help you enhance your experience with our system!
                        </p>


                        <form id="default-wizard">

                            <fieldset title={1}>
                                <legend>Basic Information</legend>

                                <div className="container mt-4" style={{ height: 600, overflowY: 'scroll' }} >
                                    <h5 className="text-primary">BASIC SCHOOL INFORMATION</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <label htmlFor="school-name" className="col-md-2 col-form-label">School Name <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="school-name" placeholder="Enter school name" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="unique-identifier" className="col-md-2 col-form-label">School Aliase <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="unique-identifier" placeholder="Enter unique identifier" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="type-of-school" className="col-md-2 col-form-label">Type of School <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="type-of-school">
                                                <option value={0}>Choose...</option>
                                                <option value="junior-high">Junior High School</option>
                                                <option value="senior-high">Senior High School</option>
                                                <option value="tertiary">Tertiary Institution</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2">
                                        <label htmlFor="country" className="col-md-2 col-form-label">Country <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="country">
                                                <option value={0}>Choose...</option>
                                                <option value="A">A</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2">
                                        <label htmlFor="state" className="col-md-2 col-form-label">Provine / Region <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="state">
                                                <option value={0}>Choose...</option>
                                                <option value="A">A</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2">
                                        <label htmlFor="district" className="col-md-2 col-form-label">Municipal / District <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="district">
                                                <option value={0}>Choose...</option>
                                                <option value="A">A</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="city" className="col-md-2 col-form-label">City / Town <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="city" placeholder="Enter city" required />
                                        </div>
                                    </div>


                                    <div className="form-group row mb-2">
                                        <label htmlFor="gps" className="col-md-2 col-form-label">GPS Address <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="gps" placeholder="Enter postal code" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="mobile" className="col-md-2 col-form-label">Mobile</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="mobile" placeholder="Enter mobile number" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="phone" className="col-md-2 col-form-label">Phone <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="email-address" className="col-md-2 col-form-label">Email Address <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="email" className="form-control" id="email-address" placeholder="Enter email address" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="website-url" className="col-md-2 col-form-label">Website URL</label>
                                        <div className="col-md-10">
                                            <input type="url" className="form-control" id="website-url" placeholder="Enter website URL" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="school-logo" className="col-md-2 col-form-label">School Logo <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="file" className="form-control" id="school-logo" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="school-slogan" className="col-md-2 col-form-label">School Slogan</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="school-slogan" placeholder="Enter school slogan" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="date-of-establishment" className="col-md-2 col-form-label">Date Started <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="date" className="form-control" id="date-of-establishment" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="founder-name" className="col-md-2 col-form-label">Founder Name</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="founder-name" placeholder="Enter founder name" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="school-type" className="col-md-2 col-form-label">School Type <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="school-type">
                                                <option value={0}>Choose...</option>
                                                <option value="boarding">Boarding</option>
                                                <option value="hostel">Hostel</option>
                                                <option value="day">Day School</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="mission-statement" className="col-md-2 col-form-label">Mission Statement <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <textarea className="form-control" id="mission-statement" rows={3} placeholder="Enter mission statement" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="vision-statement" className="col-md-2 col-form-label">Vision Statement <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <textarea className="form-control" id="vision-statement" rows={3} placeholder="Enter vision statement" required />
                                        </div>
                                    </div>


                                    <h5 className="text-primary text-uppercase">Administration Details</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <label htmlFor="principal-name" className="col-md-2 col-form-label">Name of Principal <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="principal-name" placeholder="Enter principal name" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="principal-phone" className="col-md-2 col-form-label">Principal Phone <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="principal-phone" placeholder="Enter principal phone number" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="principal-email" className="col-md-2 col-form-label">Principal Email <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="email" className="form-control" id="principal-email" placeholder="Enter principal email" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="admin-name" className="col-md-2 col-form-label">Admin Name <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="admin-name" placeholder="Enter admin name" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="admin-phone" className="col-md-2 col-form-label">Admin Phone <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="admin-phone" placeholder="Enter admin phone number" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="admin-email" className="col-md-2 col-form-label">Admin Email <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="email" className="form-control" id="admin-email" placeholder="Enter admin email" required />
                                        </div>
                                    </div>


                                    <h5 className="text-primary text-uppercase">Accreditation and Legal Information</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <label htmlFor="accreditation-status" className="col-md-2 col-form-label">Accreditation Status <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="accreditation-status">
                                                <option value={0}>Choose...</option>
                                                <option value="Accredited">Accredited</option>
                                                <option value="Not Accredited">Not Accredited</option>
                                                <option value="Pending">Pending</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="accrediting-body" className="col-md-2 col-form-label">Accrediting Body <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <select className="form-control select2" id="accrediting-body">
                                                <option value={0}>Choose...</option>
                                                <option value="A">A</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="legal-documents" className="col-md-2 col-form-label">Three Legal Documents <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="file" className="form-control" id="legal-documents" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="tax-identification-number" className="col-md-2 col-form-label">Tax Identification Number (TIN)</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="tax-identification-number" placeholder="Enter TIN" required />
                                        </div>
                                    </div>


                                    <h5 className="text-primary text-uppercase">Enrollment and Programs Offered</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <label htmlFor="total-enrollment" className="col-md-2 col-form-label">Total Students <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <small className='text-muted'>Follow this format (M=500,F=500) M for male & F for female</small>
                                            <input type="text" className="form-control" id="total-enrollment" placeholder="eg. M=500,F=1000" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="students-age-range" className="col-md-2 col-form-label">Students Age Range <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="students-age-range" placeholder="Enter students age range" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="total-teaching-staff" className="col-md-2 col-form-label">Total Teaching Staff <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <small className='text-muted'>Follow this format (M=500,F=500) M for male & F for female</small>
                                            <input type="text" className="form-control" id="total-teaching-staff" placeholder="Enter total teaching staff" required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-2">
                                        <label htmlFor="total-non-teaching-staff" className="col-md-2 col-form-label">Total Non-Teaching Staff <span className='required'>*</span></label>
                                        <div className="col-md-10">
                                            <small className='text-muted'>Follow this format (M=500,F=500) M for male & F for female</small>
                                            <input type="text" className="form-control" id="total-non-teaching-staff" placeholder="Enter total non-teaching staff" required />
                                        </div>
                                    </div>

                                    <h5 className="text-primary text-uppercase">Data Privacy, Terms and Conditions</h5>
                                    <hr />

                                    <div className="form-group row mb-2">
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="terms_conditions" required />
                                                <label className="form-check-label" htmlFor="terms_conditions">
                                                    Terms and Conditions
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2">
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="agreements" required />
                                                <label className="form-check-label" htmlFor="agreements">
                                                    Contract Agreement
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </fieldset>

                            <fieldset title={2}>
                                <legend>Packages</legend>
                                <div className="row mt-2">
                                    <p className="card-title-desc text-center">At this point, please select all the packages you would like to access once the system is fully set up. Please bear in mind that, apart from the free packages, you will be required to pay for any additional packages you select. You may also choose not to add some of the free packages, even though they are optional and provided at no cost.</p>
                                    <div className="col-md-12">

                                        <p className='app-title text-primary'>Free Packages</p>
                                        <hr className='custom-hr' />
                                        <div className="row custom-checkboxes mb-4" id='free packages'>
                                            {dynamicPackages.length > 0 ? (
                                                dynamicPackages
                                                    .filter(pkg => pkg.price === 0 || pkg.payment_plan.toLowerCase() === 'free')
                                                    .map(pkg => (
                                                        <label key={pkg.id} className="custom-card-checkbox text-center" style={{ width: 240 }}>
                                                            <input type="checkbox" name={`custom_option_${pkg.id}`} className="custom-checkbox-input" />
                                                            <div className="custom-card mb-1">
                                                                <div className="custom-icon-container mt-0">
                                                                    <i className="mdi mdi-gift" />
                                                                </div>
                                                                <h5 className="custom-header mb-1">{pkg.title}</h5>
                                                                <small className="text-short">{pkg.short_info}</small>
                                                            </div>
                                                            <a href="#" className="text-center btn-more" data-description={encodeURIComponent(pkg.description)} data-title={pkg.title}><strong>View More Details</strong></a>
                                                        </label>
                                                    ))
                                            ) : (
                                                <p>No free packages available</p>
                                            )}
                                        </div>

                                        <p className='app-title text-danger'>Paid Packages</p>
                                        <hr className='custom-hr' />
                                        <div className="row custom-checkboxes" id='free packages'>
                                            {dynamicPackages.length > 0 ? (
                                                dynamicPackages
                                                    .filter(pkg => pkg.price > 0 && pkg.payment_plan.toLowerCase() !== 'free')
                                                    .map(pkg => (
                                                        <label key={pkg.id} className="custom-card-checkbox text-center" style={{ width: 240 }}>
                                                            <input type="checkbox" name={`custom_option_${pkg.id}`} className="custom-checkbox-input" />
                                                            <div className="custom-card mb-1">
                                                                <div className="custom-icon-container mt-0">
                                                                    <i className="mdi mdi-gift" />
                                                                </div>
                                                                <h5 className="custom-header">{pkg.title}</h5>
                                                                <p className="custom-description">
                                                                    GHS <strong className="text-monospace h3">{pkg.price}</strong> /{pkg.payment_plan}
                                                                </p>
                                                                <small className="text-short">{pkg.short_info}</small>
                                                            </div>
                                                            <a href="#" className="text-center btn-more" data-description={encodeURIComponent(pkg.description)} data-title={pkg.title}><strong>View More Details</strong></a>
                                                        </label>
                                                    ))
                                            ) : (
                                                <p>No paid packages available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset title={3}>
                                <legend>Payment Details</legend>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        Payment history is going to be here

                                    </div>

                                </div>
                            </fieldset>

                            <button type="submit" className="btn btn-primary stepy-finish">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
            {/* END OF THE PAGE */}



            {/* THE MODAL THAT COMES ON SCEEN LOAD */}
            <div className="modal fade modal-blur" id="myModal" ref={modalRef} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="/temp/assets/images/sv-bar-color.png" height={20} style={{ opacity: 0.3 }} />
                            <button type="button" className="close modal-close mb-0" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <div className="card-block">
                                <div className="row d-flex">
                                    <div className="col-md-4">
                                        <img className="auth-img" src="/temp/assets/images/coming-soon.svg" alt="" />
                                    </div>
                                    <div className="col-md-7 text-center auth-right-card">
                                        <h2 className='auth-t-head' style={{ textAlign: 'left' }}>Do you know...?</h2>
                                        <p style={{ textAlign: 'left' }}>
                                            You can take your school to the next level? With <strong className="text-ibold">{Config[0].APP_ALLIASE}</strong>, we prioritize the integrity and security of your data. Our comprehensive system is designed to streamline all aspects of school management, including:
                                        </p>
                                        <ul className="auth-scroll-text">
                                            <li><strong className="text-ibold">Financial Management:</strong>
                                                <b>Effortlessly handle school finances, ensuring transparency and accuracy.</b>
                                                This feature allows schools to track and manage all financial activities, such as tuition fee collection, staff salaries, vendor payments, and other operational expenses. It enables automated billing, invoicing, and reconciliation of payments, reducing human error. Additionally, it can generate financial reports for administrators to review income, expenditures, and budget allocations, making it easier to ensure compliance and financial accountability within the institution.
                                            </li>

                                            <li><strong>Clinic Management:</strong>
                                                <b>Keep track of student health and wellness with our integrated clinic module.</b>
                                                The clinic management module helps to store, monitor, and track the health records of students. It allows the school clinic to record student visits, manage medical histories, track immunizations, and store important health data such as allergies or chronic conditions. This system ensures that health issues are managed efficiently, with a clear record of treatments and follow-ups, ensuring the well-being of students while keeping data secure.
                                            </li>

                                            <li><strong>Store Management:</strong>
                                                <b>Manage the school’s stores efficiently, tracking sales and stock levels.</b>
                                                This module simplifies the management of school inventory such as uniforms, books, or supplies. It tracks stock levels, orders, and sales, ensuring the right items are available when needed. It helps prevent shortages and keeps the store well-organized, making it easier for students and staff to access necessary supplies.
                                            </li>

                                            <li><strong>Canteen Operations:</strong>
                                                <b>Streamline management of vendors selling food and the school pantry.</b>
                                                The canteen operations module ensures smooth management of vendors who bring food to sell at the school, as well as the internal school pantry. It tracks orders, sales, and payments, providing transparency and efficiency in meal service operations and reducing delays in stock management.
                                            </li>

                                            <li><strong>Laboratory Resources:</strong>
                                                <b>Organize and track lab usage for seamless educational experiences.</b>
                                                This feature allows schools to manage the resources available in their science or computer laboratories. It helps keep track of equipment, materials, and usage schedules, ensuring that students and teachers have the necessary tools for practical lessons. It also helps with maintenance and replenishment of lab supplies, preventing shortages and improving overall learning experiences in practical subjects.
                                            </li>

                                            <li><strong>Student Portal:</strong>
                                                <b>Provide a user-friendly portal for students to access important information and services.</b>
                                                The student portal offers a one-stop platform for students to view their academic records, including grades, attendance, timetables, and assignments. It provides an interface where students can communicate with teachers, access learning resources, and stay informed about school news and events. The portal improves communication between students and the administration, making it easier for students to manage their academic responsibilities.
                                            </li>

                                            <li><strong>Duty Roster Management:</strong>
                                                <b>Simplify staff scheduling and duty assignments.</b>
                                                This feature helps to create and manage duty rosters for school staff, ensuring that all responsibilities are assigned fairly and clearly. Whether it’s supervising exams, monitoring break times, or other administrative duties, this system helps to automate the process, reducing conflicts or scheduling issues. It ensures that staff know their roles and duties in advance, improving organization within the school.
                                            </li>

                                            <li><strong>Academic Timetabling:</strong>
                                                <b>Create and manage academic schedules with ease.</b>
                                                The academic timetabling feature allows schools to efficiently schedule classes, exams, and other academic activities. It helps administrators assign classrooms, teachers, and resources while avoiding scheduling conflicts. This feature is particularly useful for managing complex schedules across multiple grades, ensuring that the school day runs smoothly.
                                            </li>

                                            <li><strong>Biometric Attendance:</strong>
                                                <b>Implement secure and efficient attendance tracking.</b>
                                                This feature introduces a biometric system for tracking attendance, using fingerprints or facial recognition to record when students or staff arrive at or leave school. It eliminates the possibility of inaccurate attendance records and prevents students from marking attendance on behalf of others. The data can be easily accessed for analysis and reporting, ensuring accurate and secure attendance records.
                                            </li>

                                            <li><strong>Electronic Payments:</strong>
                                                <b>Facilitate easy payments for school fees, bus fees, hostel accommodations, and more.</b>
                                                The electronic payments feature allows parents, students, and staff to make payments for various school-related expenses online. It includes options for paying tuition, bus fees, hostel accommodations, and other services through secure online platforms. This system simplifies payment tracking, reduces the burden of handling cash, and provides real-time updates to both the school and payers about their transaction status.
                                            </li>

                                            <li><strong>Online Admission:</strong>
                                                <b>Automate the student admission process with our online platform.</b>
                                                This feature allows schools to manage admissions entirely online, from the submission of applications to document verification and acceptance. It reduces paperwork, speeds up the admission process, and ensures transparency by providing real-time updates on application status.
                                            </li>

                                            <li><strong>Live Chat:</strong>
                                                <b>Enable real-time communication between students, staff, and parents.</b>
                                                With the live chat feature, students and parents can communicate instantly with school staff, ensuring quick responses to inquiries and promoting better communication between stakeholders.
                                            </li>

                                            <li><strong>PayRoll:</strong>
                                                <b>Manage staff salaries and payments with ease.</b>
                                                The payroll management module automates salary calculations, tax deductions, and other payments, ensuring that all staff receive their correct earnings on time. It provides detailed reports on salary disbursements, bonuses, and deductions, simplifying the payroll process.
                                            </li>

                                            <li><strong>Electronic Voting:</strong>
                                                <b>Introduce a secure and reliable electronic voting system for school elections.</b>
                                                This feature allows schools to conduct elections (e.g., for student leadership) electronically, ensuring that votes are accurately counted and recorded. It promotes fairness and transparency in the election process, while simplifying the logistics of voting.
                                            </li>

                                            <li><strong>Automated Siren:</strong>
                                                <b>Implement automatic control of the school’s siren for timely announcements.</b>
                                                The automated siren feature ensures that school bells or sirens are triggered at the right times for classes, breaks, and closing. It allows administrators to pre-program announcements and signals to keep the school day running on schedule.
                                            </li>

                                            <li><strong>Domestic Operations:</strong>
                                                <b>Track and manage school cleaning, maintenance, and facility management.</b>
                                                This module helps to ensure that school facilities are well-maintained, with scheduled cleanings and maintenance operations. It provides a system to log requests, track tasks, and ensure that the school’s environment remains conducive to learning.
                                            </li>

                                        </ul>
                                        <p style={{ textAlign: 'left' }}>
                                            Join us today and discover how <strong className="text-ibold">{Config[0].APP_ALLIASE}</strong> can enhance your school`s efficiency and effectiveness. Sign up now and unlock the full potential of your school management!
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Detailed Modal */}
            <div className="modal fade" id="myModal2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-primary text-monospace" id="modal-title">...</h4>
                            <img src="/temp/assets/images/sv-bar-color.png" height={20} style={{ opacity: 0.5 }} />
                            <button type="button" className="close modal-close" data-bs-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body" style={{ overflowY: 'scroll', height: 400 }}>
                            <div className="card-block col-md-12" >
                                <div id='des'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateAccount
