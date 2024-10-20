
const ChangePassword = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="col-md-8 row d-flex">
                    <div className="card card-body">
                        <div className="d-flex justify-content-center text-primary">
                            <i className='mdi mdi-account-key' style={{ fontSize: 30, marginTop: 5, marginRight: 5, }}></i>
                            <h2 className="text-primary mb-1 text-truncate">Change Password</h2>
                        </div>
                        <hr className="custom-hr mt-0" />

                        <p className="card-text row mb-0">
                            <div className="col-md-12">
                                <label htmlFor="city" className="col-form-label">User Identity</label>
                                <input type="text" className="form-control" id="city" placeholder="Type here" required />
                            </div>
                        </p>
                        
                        <p className="card-text row d-flex">
                            <div className="col-md-6">
                                <label htmlFor="city" className="col-form-label">New Password <span className='required'>*</span></label>
                                <input type="password" className="form-control" id="city" placeholder="Enter new Password" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="city" className="col-form-label">Confirm Password <span className='required'>*</span></label>
                                <input type="password" className="form-control" id="city" placeholder="Confirm Password" required />
                            </div>
                        </p>


                        <hr className="custom-hr mb-1" />

                        <p className="card-text">

                            <button type="button" className="btn btn-primary btn-sm mr-1 mb-0">
                                <i className='mdi mdi-sync'></i> Request Chanage
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword
