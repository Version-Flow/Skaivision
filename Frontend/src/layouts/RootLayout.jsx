import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import TopNavbar from '../components/TopNavbar'
import Breadcrumb from '../components/Breadcrumb'
import SidebarAdmin from '../components/SidebarAdmin'
import Footer from '../components/Footer'
import SidebarStudent from '../components/SidebarStudent'
import SidebarStaff from '../components/SidebarStaff'
import RightDialogue from '../components/RightDialogue';
import ChatBoat from '../components/ChatBoat';
import SidebarManagement from '../components/SidebarManagement';

const RootLayout = () => {

  const [isRightBarVisible, setIsRightBarVisible] = useState(false); 
  const [pageTitle, setPageTitle] = useState('Dashboard');

 
  const toggleRightBar = () => {
    setIsRightBarVisible(!isRightBarVisible);
  };

  const [isChatBoatVisible, setIsChatBoatVisible] = useState(false);

  const toggleChatBoat = () => {
    setIsChatBoatVisible(!isChatBoatVisible);
  };


  return (
    <>
      <div id="wrapper">

        <TopNavbar />

        {/* Sidebar */}
        {/* <SidebarStaff /> */}
        {/* {<SidebarStudent />} */}
        {/* {<SidebarAdmin />} */}
        <SidebarManagement />


        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
            <Breadcrumb title={pageTitle} />
              <Outlet context={{ setPageTitle }} />
            </div>
          </div>

          <Footer />
        </div>
      </div>

      {/* RightDialogue with visibility controlled */}
      <RightDialogue visible={isRightBarVisible} onClose={toggleRightBar} />

      {/* Right bar overlay*/}
      <div className="rightbar-overlay" onClick={toggleRightBar} style={{ display: isRightBarVisible ? 'block' : 'none' }}></div>

      {/* Button to trigger the right sidebar */}
      <a href="#" className="right-bar-toggle demos-show-btn" onClick={toggleRightBar}>
        <i className="mdi mdi-settings-outline mdi-spin" />
      </a>

      {/* Live Chat Button */}
      <a href="#" className="right-bar-toggle demos-boat-btn" onClick={toggleChatBoat}>
          <i className="mdi mdi-chat" /> &nbsp;Live Support
        </a>

        {/* ChatBoat component with visibility toggle */}
        <ChatBoat visible={isChatBoatVisible} onClose={toggleChatBoat} />


    </>
  );
};

export default RootLayout;
