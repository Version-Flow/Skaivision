import axios from 'axios';
import { useEffect } from 'react';
import Config from '../../../helpers/config';


const Logs = () => {
    useEffect(() => {
        var titles = "Configuration";
        Config[0].currentPage = titles;
        document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;

        const callModalButton = document.getElementById('btn-new');
        const modalElement = document.getElementById('myModal');
        const modal = new bootstrap.Modal(modalElement);

        if (callModalButton) {
            callModalButton.addEventListener('click', () => {
                modal.show();
            });
        }

        // Handle SweetAlert alert button
        const alertButton = document.getElementById('btn-alert');
        if (alertButton) {
            alertButton.addEventListener('click', () => {
                Swal.fire({
                    title: 'Alert!',
                    text: 'This is a SweetAlert from CDN',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            });
        }

        // Handle modal close on button click
        const closeModalButton = document.querySelector('.modal-close');
        if (closeModalButton) {
            closeModalButton.addEventListener('click', () => {
                modal.hide();
            });
        }

        
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object from the form element
        const formData = new FormData(e.target);

        // Convert FormData to a plain object if needed
        const plainFormData = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post(
                'http://localhost:8080/api/v2/create-account',
                plainFormData,
                {
                    headers: {
                        'Authorization': 'Bearer your-token-here',
                        'Keys': 'your-keys-here',
                        'Api-Hooks': 'your-api-hooks-here',
                    },
                }
            );
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="row">
            {/* Material statustic card start */}
            {/* Project statustic start */}
            <div className="col-xl-12">
                <div className="card proj-progress-card">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <h6>Published Project</h6>
                                <h5 className="m-b-30 f-w-700">532<span className="text-c-green m-l-10">+1.69%</span></h5>
                                <div className="progress">
                                    <div className="progress-bar bg-c-red" style={{ width: '25%' }} />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <h6>Completed Task</h6>
                                <h5 className="m-b-30 f-w-700">4,569<span className="text-c-red m-l-10">-0.5%</span></h5>
                                <div className="progress">
                                    <div className="progress-bar bg-c-blue" style={{ width: '65%' }} />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <h6>Successful Task</h6>
                                <h5 className="m-b-30 f-w-700">89%<span className="text-c-green m-l-10">+0.99%</span></h5>
                                <div className="progress">
                                    <div className="progress-bar bg-c-green" style={{ width: '85%' }} />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <h6>Ongoing Project</h6>
                                <h5 className="m-b-30 f-w-700">365<span className="text-c-green m-l-10">+0.35%</span></h5>
                                <div className="progress">
                                    <div className="progress-bar bg-c-yellow" style={{ width: '45%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project statustic end */}

            {/* Add New Button - triggers the modal */}
            <a className="btn btn-success" id="btn-new">Add New</a>
            <a className="btn btn-success" id="btn-alert">Call alert</a>

            {/* Modal */}
            <div className="modal fade modal-blur" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="myModalLabel">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title m-0" id="myModalTitle">Center Modal</h4>
                            <a href='#!' className='modal-close'><span className='modal-close'>&times;</span></a>
                        </div>
                        <div className="modal-body">
                            <div className="card-block">
                                <form className="form-material" onSubmit={handleSubmit}>
                                    <div className="form-group form-default">
                                        <input type="text" name="username" className="form-control" />
                                        <span className="form-bar" />
                                        <label className="float-label">Username</label>
                                    </div>
                                    <div className="form-group form-default">
                                        <input type="text" name="phone" className="form-control" />
                                        <span className="form-bar" />
                                        <label className="float-label">Phone</label>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-sm">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="reset" className="btn btn-danger btn-sm modal-close">Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logs;


