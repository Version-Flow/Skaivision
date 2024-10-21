
import Config from '../../../helpers/config';

const LockScreen = () => {
    return (
        <>

            <div className="row justify-content-center mt-5">
                <div className="col-md-7 col-lg-7 col-xl-7">
                    <div className="card mb-0">
                        <div className="card-body p-4">
                            <div className="account-box">
                                <div className="account-logo-box">
                                    <img src="/temp/assets/images/logo.png" />
                                    <div className="t-container">
                                        <h2 className="app-title mb-1 mt-4">{Config[0].APP_ALLIASE}</h2>
                                        <p className="mb-0 app-sub-title" title="The title here">
                                            {Config[0].SCHOOL_NAME ? Config[0].SCHOOL_NAME : "Skai Version Flow"}
                                        </p>
                                    </div>
                                </div>
                                <div className="account-content mt-2">
                                    <div className="text-center mb-2">
                                        <div className="mb-1">
                                            <img src="/temp/assets/images/users/avatar-5.jpg" className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                        </div>
                                        <h4 style={{ marginBottom: -1 }}><b>Screen Locked </b></h4>
                                        <small className="text-primary">(Actual username here)</small>
                                    </div>
                                    <form className="form-horizontal" action="#">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <input className="form-control" type="text" required id="password" placeholder="Enter your enter your pin" />
                                            </div>
                                        </div>
                                        <div className="form-group row text-center mt-2">
                                            <div className="col-12">
                                                <button className="btn btn-md btn-block btn-primary waves-effect waves-light" type="submit">Unlock Screen</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="clearfix" />
                                    <div className="row mt-3">
                                        <div className="col-sm-12 text-center">
                                            <p className="text-muted mb-0">Not you? return<a href="/auth/login" className="text-dark ml-1"><b>Sign In</b></a></p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default LockScreen
