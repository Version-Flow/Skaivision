
import Config from '../../../helpers/config';

const VerifyToken = () => {
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
                                <div className="account-content mt-3">
                                    <div className="text-center">
                                        <div>
                                            <i className='fa fa-envelope text-primary' style={{fontSize:80}}></i>
                                            <p className="text-muted font-13 mt-2"> 
                                                A token email has been send to <b>exam**********in.com</b>. Confirm the token so that you can reset your password. </p>
                                        </div>
                                    </div>
                                    <form className="form-horizontal" action="#">
                                        <div className="form-group d-flex">
                                            <div className="col-3">
                                                <input className="form-control" type="email" id="emailaddress" required readOnly defaultValue="SVF-" />
                                            </div>
                                            <div className="col-9">
                                                <input className="form-control" type="email" id="emailaddress" required placeholder="Token without prefix" />
                                            </div>
                                        </div>
                                        <div className="form-group row text-center mt-2">
                                            <div className="col-12">
                                                <button className="btn btn-md btn-block btn-primary waves-effect waves-light" type="submit">Verify Token</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="clearfix" />
                                    <div className="row mt-4">
                                        <div className="col-sm-12 text-center">
                                            <p className="text-muted mb-0">Back to <a href="/auth/login" className="text-primary ml-1"><b>Sign In</b></a></p>
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

export default VerifyToken
