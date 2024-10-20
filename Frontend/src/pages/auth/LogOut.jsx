
import Config from '../../../helpers/config';

const LogOut = () => {
    return (
        <>
            <div className="row justify-content-center mt-5">
                <div className="col-md-7 col-lg-7 col-xl-7">
                    <div className="card mb-0">
                        <div className="card-body p-4">
                            <div className="account-box text-center">
                                <div className="account-logo-box">
                                    <img src="/temp/assets/images/logo.png" />
                                    <div className="t-container">
                                        <h2 className="app-title mb-1 mt-4">{Config[0].APP_ALLIASE}</h2>
                                        <p className="mb-0 app-sub-title" title="The title here">
                                            {Config[0].SCHOOL_NAME ? Config[0].SCHOOL_NAME : "Skai Version Flow"}
                                        </p>
                                    </div>
                                </div>
                                <div className="my-4 ">
                                    <div className="checkmark">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 161.2 161.2" enableBackground="new 0 0 161.2 161.2" xmlSpace="preserve">
                                            <path className="path" fill="none" stroke="#32c861" strokeMiterlimit={10} d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
                                          c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
                                          c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z" />
                                            <circle className="path" fill="none" stroke="#32c861" strokeWidth={4} strokeMiterlimit={10} cx="80.6" cy="80.6" r="62.1" />
                                            <polyline className="path" fill="none" stroke="#32c861" strokeWidth={6} strokeLinecap="round" strokeMiterlimit={10} points="113,52.8
                                          74.1,108.4 48.2,86.4 " />
                                            <circle className="spin" fill="none" stroke="#32c861" strokeWidth={4} strokeMiterlimit={10} strokeDasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-primary">See You Again !</h3>
                                <p className="text-muted font-13 mt-2 mb-0">You can still  <a href="/auth/login" className="text-primary mr-1"><b>Sign In Again</b></a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LogOut
