import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Config from '../../helpers/config';

const TopNavbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  // State to manage sidebar state
  const [isSidebarEnabled, setIsSidebarEnabled] = useState(false);

  useEffect(() => {
    // Start animation when route changes
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);


   // Function to toggle sidebar class
   const toggleSidebar = () => {
    setIsSidebarEnabled(prevState => !prevState);
    const body = document.body;
    if (isSidebarEnabled) {
      body.classList.remove('sidebar-enable', 'enlarged');
    } else {
      body.classList.add('sidebar-enable'); 
    }
  };

  return (

    <div className={`navbar-custom skai-topbar ${isAnimating ? 'route-changing' : ''}`}>
      <ul className="list-unstyled topnav-menu float-right mb-0">
        
        <li className="dropdown notification-list dropdown d-lg-inline-block">
          <a className="nav-link dropdown-toggle mr-0 waves-effect waves-light" data-toggle="dropdown" href="layouts-light-sidebar.html#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="/temp/assets/images/logo.png" alt="lang-image" height={12} />
          </a>
          <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
            {/* item*/}
            <a href="#" className="dropdown-item notify-item">
              <img src="/temp/assets/images/flags/germany.jpg" alt="lang-image" className="mr-1" height={12} /> <span className="align-middle">German</span>
            </a>
            {/* item*/}
            <a href="#" className="dropdown-item notify-item">
              <img src="/temp/assets/images/flags/italy.jpg" alt="lang-image" className="mr-1" height={12} /> <span className="align-middle">Italian</span>
            </a>
          </div>
        </li>

        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="layouts-light-sidebar.html#" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="mdi mdi-scatter-plot-outline noti-icon" />
            <span className="badge badge-pink rounded-circle noti-icon-badge">0</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-lg">
            <div className="dropdown-header noti-title">
              <h5 className="text-overflow m-0">
                <span className="float-right">
                  <span className="badge badge-danger float-right">0</span></span>Alerts
              </h5>
            </div>
            <div className="slimscroll noti-scroll">

              {/* item*/}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-warning">
                  <i className="mdi mdi-bell-outline" />
                </div>
                <p className="notify-details">Updates
                  <small className="text-muted">There are 2 new updates available</small>
                </p>
              </a>
              {/* item*/}
 
            </div>
            {/* All*/}
            <a href="#" className="dropdown-item text-center text-primary notify-item notify-all">
              View all
              <i className="fi-arrow-right" />
            </a>
          </div>
        </li>

        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="layouts-light-sidebar.html#" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="dripicons-bell noti-icon" />
            <span className="badge badge-pink rounded-circle noti-icon-badge">0</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-lg">
            <div className="dropdown-header noti-title">
              <h5 className="text-overflow m-0">
                <span className="float-right">
                  <span className="badge badge-danger float-right">0</span></span>Notification
              </h5>
            </div>
            <div className="slimscroll noti-scroll">
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-success"><i className="mdi mdi-comment-account-outline" /></div>
                <p className="notify-details">Robert S. Taylor commented on Admin<small className="text-muted">1 min ago</small></p>
              </a>
              {/* item*/}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-warning">
                  <i className="mdi mdi-bell-outline" />
                </div>
                <p className="notify-details">Updates
                  <small className="text-muted">There are 2 new updates available</small>
                </p>
              </a>
              {/* item*/}
 
            </div>
            {/* All*/}
            <a href="#" className="dropdown-item text-center text-primary notify-item notify-all">
              View all
              <i className="fi-arrow-right" />
            </a>
          </div>
        </li>

        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="layouts-light-sidebar.html#" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="dripicons-message noti-icon" />
            <span className="badge badge-pink rounded-circle noti-icon-badge">0</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-lg">
            <div className="dropdown-header noti-title">
              <h5 className="text-overflow m-0">
                <span className="float-right"><span className="badge badge-danger float-right">0</span></span>Messages
              </h5>
            </div>
            <div className="slimscroll noti-scroll">
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon bg-success">
                  <i className="mdi mdi-comment-account-outline" />
                </div>
                <p className="notify-details">Updates
                  <small className="text-muted">There are 2 new updates available</small>
                  <small className="text-muted">1 min ago</small>
                </p>
              </a>
              {/* item*/}
              <a href="#" className="dropdown-item notify-item">
                <div className="notify-icon">
                  <img src="/temp/assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" /> </div>
                <p className="notify-details">Karen Robinson</p>
                <p className="text-muted mb-0 user-msg">
                  <small>Wow ! this admin looks good and awesome design</small>
                </p>
              </a>
            </div>
            {/* All*/}
            <a href="#" className="dropdown-item text-center text-primary notify-item notify-all">
              View all
              <i className="fi-arrow-right" />
            </a>
          </div>
        </li>

        <li className="dropdown notification-list">
          <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="layouts-light-sidebar.html#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="/temp/assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" />
            <span className="pro-user-name ml-1">
              Maxine K  <i className="mdi mdi-chevron-down" />
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
            {/* item*/}
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome !</h6>
            </div>
            {/* item*/}
            <a href="#" className="dropdown-item notify-item">
              <i className="fe-user" />
              <span>Profile</span>
            </a>
            {/* item*/}
            <a href="#" className="dropdown-item notify-item">
              <i className="fe-settings" />
              <span>Settings</span>
            </a>
            {/* item*/}
            <a href="#" className="dropdown-item notify-item">
              <i className="fe-lock" />
              <span>Lock Screen</span>
            </a>
            <div className="dropdown-divider" />
            {/* item*/}
            <a href="#" className="dropdown-item notify-item">
              <i className="fe-log-out" />
              <span>Logout</span>
            </a>
          </div>
        </li>
        
      </ul>
      {/* LOGO */}
      <div className="logo-box">
        <a href="/" className="logo text-center">
          <span className="logo-lg">
            <img src="/temp/assets/images/sv-bar-white.png" height={25} />
          </span>
          <span className="logo-sm">
            <img src="/temp/assets/images/logo.png" height={28} style={{borderRadius: 50}} />
          </span>
        </a>
      </div>
      <ul className="list-unstyled topnav-menu topnav-menu-left m-0 text-center">
        <li>
        <button className="button-menu-mobile waves-effect waves-light" onClick={toggleSidebar} >
        <i className="fe-menu" />
      </button>
        </li>
        <li><h3 className="school-title d-none d-lg-inline-block">{Config[0].SCHOOL_NAME}</h3></li>
      </ul>
    </div>



  )
}

export default TopNavbar
