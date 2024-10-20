import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Config from '../../helpers/config';

const SidebarStudent = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Listen for URL hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveSection(hash);
    };

    // Initialize the hash on mount
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };

  }, []);


  return (
    <div className="left-side-menu skai-navbar">
      <div className="side-logo">
        <img src="/temp/assets/images/logo.png" height={25} alt="Logo" />
        <h5 className="school-aliase">{Config[0].SCHOOL_ALLIASE}</h5>
      </div>
      <div className="slimscroll-menu">

        <div className="card-box shadow-none">
          <ul className="nav nav-tabs tabs-bordered nav-justified" style={{marginLeft: -15}}>
            <li className="nav-item">
              <a href="#home-b2" data-toggle="tab" aria-expanded="false" className="nav-link active">
                <span className="d-block d-sm-none"><i className="mdi mdi-home-variant" /></span>
                <span className="d-none d-sm-block">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#profile-b2" data-toggle="tab" aria-expanded="true" className="nav-link">
                <span className="d-block d-sm-none"><i className="mdi mdi-email-outline" /></span>
                <span className="d-none d-sm-block">All Chats</span>
              </a>
            </li>

          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="home-b2">

              <div id="sidebar-menu" style={{ marginLeft: -30, marginRight: -15 }}>
                <ul className="metismenu" id="side-menu">
                  <li className="menu-title">Navigation</li>

                  <li className={activeSection === 'ps' ? 'mm-active' : ''}>
                    <a className="anchor" href="#ps">
                      <i className="fe-airplay" />
                      <span className="badge badge-success badge-pill float-right">Controls</span>
                      <span> Personal</span>
                    </a>
                    <ul className={`nav-second-level nav-control ${activeSection === 'ps' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'ps'}>
                      <li><Link to="/student/dashboard">Dashboard</Link></li>
                      <li><Link to="/student/profile">Profile</Link></li>
                      <li><Link to="/student/logs">Logs</Link></li>
                      <li><Link to="/student/tickets">Tickets</Link></li>
                      <li><Link to="/student/change-password">Change Password</Link></li>
                    </ul>
                  </li>
    
                  <li className="menu-title">Elements</li>

                  <li className={activeSection === 'gen' ? 'mm-active' : ''}>
                    <a className="anchor" href="#gen">
                      <i className="mdi mdi-sort-ascending " />
                      <span> General </span>
                      <span className="menu-arrow" />
                    </a>
                    <ul className={`nav-second-level nav-control ${activeSection === 'gen' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'gen'}>
                      <li><Link to="/student/settings">Settings</Link></li>
                      <li><Link to="/student/notifications">Notifications</Link></li>
                      <li><Link to="/student/support">Support</Link></li>
                      <li><Link to="/student/community-forum">Community Forum</Link></li>
                      <li><Link to="/student/private-forum">Private Forum</Link></li>
                      <li><Link to="/student/exeat">Exeat</Link></li>

                    </ul>
                  </li>
                  <li className="line-border" />

                  <li className={activeSection === 'aca' ? 'mm-active' : ''}>
                    <a className="anchor" href="#aca">
                      <i className="mdi mdi-account-network " />
                      <span> Academics </span>
                      <span className="menu-arrow" />
                    </a>
                    <ul className={`nav-second-level nav-control ${activeSection === 'aca' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'aca'}>
                      <li><Link to="/student/result">Result</Link></li>
                      <li><Link to="/student/transcript">Transcript</Link></li>
                      <li><Link to="/student/child-transcript">Child Transcript</Link></li>
                      <li><Link to="/student/child-courses">Child Courses</Link></li>
                      <li><Link to="/student/child-information">Child Information</Link></li>

                    </ul>
                  </li>
                  <li className="line-border" />

                  <li className={activeSection === 'fs' ? 'mm-active' : ''}>
                    <a className="anchor" href="#fs">
                      <i className="mdi mdi-file-tree" />
                      <span> Fees Management </span>
                      <span className="menu-arrow" />
                    </a>
                    <ul className={`nav-second-level nav-control ${activeSection === 'fs' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'fs'}>
                      <li><Link to="/student/fees">Fees</Link></li>
                      <li><Link to="/student/payment-history">Payment History</Link></li>
                      <li><Link to="/student/account-statement">Account Statement</Link></li>
                      <li><Link to="/student/payment">Payment</Link></li>
                      <li><Link to="/student/child-fees">Child Fees</Link></li>

                    </ul>
                  </li>
                  <li className="line-border" />

                </ul>
              </div>


            </div>
            <div className="tab-pane" id="profile-b2">
              <a href='#' className="row d-flex align-items-center platforms">
                <div>
                  <img src="/temp/assets/images/logo.png" alt="Image" className="img-fluid platform-img" />
                </div>
                <div className="col text-truncate">
                  <h6 className="mb-0">Your Title</h6>
                  <small className='text-muted'>Actual message here</small>
                </div>
                <div className="col-auto">
                  <span className="badge bg-info">0</span>
                </div>
              </a>
              <a href='#' className="row d-flex align-items-center platforms">
                <div>
                  <img src="/temp/assets/images/logo.png" alt="Image" className="img-fluid platform-img" />
                </div>
                <div className="col text-truncate">
                  <h6 className="mb-0">Your Title</h6>
                  <small className='text-muted'>Actual message here</small>
                </div>
                <div className="col-auto">
                  <span className="badge bg-info">0</span>
                </div>
              </a>
            </div>

          </div>
        </div>

        <div className="clearfix" />
      </div>
    </div>
  );
};

export default SidebarStudent;
