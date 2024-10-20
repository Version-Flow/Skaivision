
// import React from 'react'

import { Outlet } from "react-router-dom"
import Config from "../../helpers/config"
import { useState } from "react";
import ChatBoat from "../components/ChatBoat";

const SetUpLayout = () => {

    const currentYear = new Date().getFullYear();

    const [isChatBoatVisible, setIsChatBoatVisible] = useState(false);

    const toggleChatBoat = () => {
        setIsChatBoatVisible(!isChatBoatVisible);
    };

    return (
        <>


            <div id="wrapper">
                {/* Navigation Bar*/}
                <header id="topnav">
                    {/* Topbar Start */}
                    <div className="navbar-custom">
                        <div className="container-fluid">
                            <ul className="list-unstyled topnav-menu float-right mb-0">

                                <li className="notification-list">
                                    <a className="nav-link nav-user mr-0 waves-effect waves-light" href="#" role="button" aria-expanded="false">
                                        <img src="/temp/assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" />
                                        <span className="pro-user-name ml-1">
                                            Guest
                                        </span>
                                    </a>

                                </li>

                            </ul>
                            {/* LOGO */}
                            <div className="logo-box" style={{ backgroundColor: 'white' }}>
                                <a href="/" className="logo text-center logo-dark">
                                    <span className="logo-lg">
                                        <img src="/temp/assets/images/sv-bar-color.png" height={24} />
                                    </span>
                                    <span className="logo-sm">
                                        <img src="/temp/assets/images/sv-bar-color.png" height={24} />
                                    </span>
                                </a>
                            </div>

                            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                                <li className="dropdown notification-list d-none d-lg-block">
                                    <b className="nav-link text-uppercase text-primary" style={{ fontWeight: 'bolder', fontSize: 22, fontFamily: 'fantasy' }}>
                                        {Config[0].APP_NAME}
                                    </b>
                                </li>
                            </ul>
                            {<div className="clearfix" />}
                        </div>
                    </div>

                    {/* end Topbar */}
                    <div className="topbar-menu">
                        <div className="container-fluid">
                            <div id="navigation">
                                <ul className="navigation-menu">
                                    <li className="has-submenu">
                                        <div className="marquee">
                                            <span className="text-white">
                                                Welcome to the ultimate school manager, we are glad to have you here, do you want to secure your school data in the cloud...? then worry not because we have your back, sign up today and you will not regret using this system to manage your school affairs. This is what we stand for  and who we are...
                                            </span>
                                        </div>

                                    </li>
                                </ul>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>

                </header>


                <div className="content-page">
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
                                <div className="col-md-12" style={{ height: 10 }}>
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

export default SetUpLayout
