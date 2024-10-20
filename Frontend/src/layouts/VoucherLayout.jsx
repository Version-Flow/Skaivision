
// import React from 'react'

import { Outlet } from "react-router-dom"
import Config from "../../helpers/config"
import { useState } from "react";
import ChatBoat from "../components/ChatBoat";

const VoucherLayout = () => {

    const currentYear = new Date().getFullYear();

    const [isChatBoatVisible, setIsChatBoatVisible] = useState(false);

    const toggleChatBoat = () => {
        setIsChatBoatVisible(!isChatBoatVisible);
    };

    return (
        <>

            <div id="wrapper">
                {/* Navigation Bar*/}
                <header id="topnav" style={{ height: 40 }}>
                    <div className="marquee mt-2">
                        <span className="text-white">
                            Welcome to the ultimate school manager, we are glad to have you here, do you want to secure your school data in the cloud...? then worry not because we have your back, sign up today and you will not regret using this system to manage your school affairs. This is what we stand for  and who we are...
                        </span>
                    </div>


                </header>


                <div className="content-pages">
                    <div className="content">
                        {/* Start Content*/}
                        <div className="container">

                            <Outlet />

                        </div>
                    </div>

                    {/* Footer Start */}
                    <footer className="footer" style={{backgroundColor: 'transparent'}}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 text-center" style={{ height: 10 }}>
                                    <p>All right reserved ©  {currentYear} {Config[0].APP_ALLIASE} | {Config[0].APP_VERSION} Powered with <i className="mdi mdi-heart text-danger" /> by {Config[0].BRAND_NAME} Team</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* end Footer */}

                    <a href="#" className="right-bar-toggle demos-chat-btn" onClick={toggleChatBoat}><i className="mdi mdi-chat" /> &nbsp;Live Chat</a>

                    <ChatBoat visible={isChatBoatVisible} onClose={toggleChatBoat} />

                </div>
            </div>



        </>
    )
}

export default VoucherLayout
