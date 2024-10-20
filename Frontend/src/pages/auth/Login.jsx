

import Config from '../../../helpers/config';
import useModal from '../../hooks/useModal';

const Login = () => {

    const { modalRef } = useModal(true);


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
                                <div className="account-content mt-4 text-center">
                                    <h2 className="skai-title">Authentication</h2>
                                    <h5 style={{ marginBottom: -2 }}><b>Welcome back </b><b className="text-primary">Fullname here </b></h5>
                                    <small>(Actual username here)</small>
                                    <form className="form-horizontal mt-3" action="#">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                {/* <label for="emailaddress">Email address</label> */}
                                                <input className="form-control" type="email" id="emailaddress" required placeholder="Enter username" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <a href="/auth/recover-password" className="text-muted float-right"><small>Forgot your
                                                    password?</small></a>
                                                {/*  <label for="password">Password</label> */}
                                                <input className="form-control" type="password" required id="password" placeholder="Enter your password" />
                                            </div>
                                        </div>
                                        <div className="form-group row justify-content-center mt-1">
                                            <div className="col-6">
                                                <button className="btn btn-md btn-block btn-primary waves-effect waves-light" type="submit">Sign In</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row mt-4 pt-2">
                                        <div className="col-sm-12 text-center">
                                            <p className="text-muted mb-0">Not
                                                <b className="text-primary ml-1">Fullname here</b> Signin as a
                                                <a href="#" className="text-dark ml-1 text-info"><b className="text-primary">different person here</b></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="modal fade modal-blur" id="myModal" ref={modalRef} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h4 className="modal-title mt-2 text-white" id="myModalTitle">{Config[0].APP_ALLIASE}</h4> */}
                            <img src="/temp/assets/images/sv-bar-color.png" height={30} style={{opacity: 0.5}} />
                            <button type="button" className="close modal-close" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                        <div className="card-block">
                                <div className="row d-flex">
                                    <div className="col-md-6">
                                        <img className="auth-img" src="/temp/assets/images/verification-img.png" alt="" />
                                    </div>
                                    <div className="col-md-5 text-center auth-right-card">
                                        <h3 className='auth-t-head'>Attention Please!</h3>
                                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ratione corrupti pariatur sint fugiat consequuntur hic, numquam deleniti molestias reprehenderit eaque, deserunt laboriosam tempora officia recusandae enim, consequatur qui vel!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident cum repellat culpa. Ab provident officia nemo. Enim assumenda, labore recusandae accusantium deleniti mollitia, doloribus fugiat consequatur dolorem temporibus quibusdam!
                                        </p>
                                        <small style={{ fontSize: 13, color: '#5B5B5B' }}>Download now to <span className="text-ibold" >Register</span> for courses, <span className="text-ibold">Pay Fees</span> with <span className="text-ibold">MoMo</span> and <span className="text-ibold">Visa/MasterCard</span>, <span className="text-ibold">check Results</span>, etc.</small>

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

export default Login
