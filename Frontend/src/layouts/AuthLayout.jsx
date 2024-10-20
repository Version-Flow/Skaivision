
import { useState } from 'react';
import Config from '../../helpers/config';

import { Outlet } from "react-router-dom"
import ChatBoat from '../components/ChatBoat';

const AuthLayout = () => {

    const currentYear = new Date().getFullYear();

    const [isChatBoatVisible, setIsChatBoatVisible] = useState(false);

    const toggleChatBoat = () => {
        setIsChatBoatVisible(!isChatBoatVisible);
    };

    return (
        <>

            <div className="account-pages w-100 mt-5 h-top">
                <div className="container">

                    <Outlet />

                    {/* Footer Start */}
                    <div className="auth-footer">
                        <div className="container-fluid text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>All right reserved ©  {currentYear} {Config[0].APP_ALLIASE} | {Config[0].APP_VERSION} Powered with <i className="mdi mdi-heart text-danger" /> by {Config[0].BRAND_NAME} Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end Footer */}

                    <a href="#" className="right-bar-toggle demos-chat-btn" onClick={toggleChatBoat}><i className="mdi mdi-chat" /> &nbsp;Live Chat</a>

                    <ChatBoat visible={isChatBoatVisible} onClose={toggleChatBoat} />
                </div>
            </div>


        </>
    )
}

export default AuthLayout
