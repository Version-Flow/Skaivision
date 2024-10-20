
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Config from '../../helpers/config';

const SidebarStaff = () => {

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
    <>
      <div className="left-side-menu skai-navbar">
        <div className="side-logo">
          <img src="/temp/assets/images/logo.png" height={25} alt="Logo" />
          <h5 className="school-aliase">{Config[0].SCHOOL_ALLIASE}</h5>
        </div>
        <div className="slimscroll-menu">

          <div className="card-box shadow-none">
            <ul className="nav nav-tabs tabs-bordered nav-justified" style={{ marginLeft: -15 }}>
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

                    <li className={activeSection === 'nv' ? 'mm-active' : ''}>
                      <a className="anchor" href="#nv">
                        <i className="fe-airplay" />
                        <span className="badge badge-success badge-pill float-right">Controls</span>
                        <span> Personal</span>
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'nv' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'nv'}>
                        <li><Link to="/shared/profile">Profile</Link></li>
                        <li><Link to="/shared/notifications">Notifications</Link></li>
                        <li><Link to="/shared/messaging">Messaging</Link></li>
                        <li><Link to="/shared/settings">Settings</Link></li>
                        <li><Link to="/shared/logs">Logs</Link></li>
                        <li><Link to="/shared/support">Support</Link></li>
                        <li><Link to="/shared/tickets">Tickets</Link></li>
                        <li><Link to="/shared/community-forum">Community Forum</Link></li>
                        <li><Link to="/shared/private-forum">Private Forum</Link></li>
                        <li><Link to="/shared/events">Events</Link></li>

                      </ul>
                    </li>
  
                    <li>
                      <a href="#">
                        <i className="fe-layers" />
                        <span> Todo </span>
                      </a>
                    </li>
                    <li className="line-border" />

                    <li className="menu-title">Elements</li>

                    {/* Normal Staff Control */}
                    <li className={activeSection === 'ns' ? 'mm-active' : ''}>
                      <a className="anchor" href="#ns">
                        <i className="mdi mdi-sort-ascending " />
                        <span> Normal Staff</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'ns' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'ns'}>
                        <li><Link to="/staff/dashboard">Dashboard</Link></li>
                        <li><Link to="/staff/course-manager">Course Manager</Link></li>
                        <li><Link to="/staff/result-entry">Result Entry</Link></li>
                        <li><Link to="/staff/result-overview">Result Overview</Link></li>
                        <li><Link to="/staff/student-transcript">Student Transcript</Link></li>
                        <li><Link to="/staff/attendance">Attendance</Link></li>
                        <li><Link to="/staff/report-generation">Report Generation</Link></li>

                      </ul>
                    </li>

                    {/* House Master Control */}
                    <li className={activeSection === 'hs' ? 'mm-active' : ''}>
                      <a className="anchor" href="#hs">
                        <i className="mdi mdi-sort-ascending " />
                        <span> House Master</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'hs' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'hs'}>
                        <li><Link to="/hm/dashboard">Dashboard</Link></li>
                        <li><Link to="/hm/students">Students</Link></li>
                        <li><Link to="/hm/house-dues">House Dues</Link></li>
                        <li><Link to="/hm/disciplinary-records">Disciplinary Records</Link></li>
                        <li><Link to="/hm/activity">Activity</Link></li>
                        <li><Link to="/hm/house-reports">House Reports</Link></li>
                        <li><Link to="/hm/exeat">Exeat</Link></li>
                        <li><Link to="/hm/request">Request</Link></li>

                      </ul>
                    </li>

                    {/* Senior House Master Control */}
                    <li className={activeSection === 'shm' ? 'mm-active' : ''}>
                      <a className="anchor" href="#shm">
                        <i className="mdi mdi-sort-ascending " />
                        <span> Snr House Master</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'shm' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'shm'}>
                        <li><Link to="/shm/dashboard">Dashboard</Link></li>
                        <li><Link to="/shm/house-overview">House Overview</Link></li>
                        <li><Link to="/shm/house-reports">House Reports</Link></li>
                        <li><Link to="/shm/disciplinary-records">Disciplinary Records</Link></li>
                        <li><Link to="/shm/house-members">House Members</Link></li>
                        <li><Link to="/shm/exeat">Exeat</Link></li>
                        <li><Link to="/shm/request">Request</Link></li>
                        <li><Link to="/shm/dues">Dues</Link></li>

                      </ul>
                    </li>

                    {/* HOD Panel Control */}
                    <li className={activeSection === 'hod' ? 'mm-active' : ''}>
                      <a className="anchor" href="#hod">
                        <i className="mdi mdi-sort-ascending " />
                        <span> HOD Panel</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'hod' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'hod'}>
                        <li><Link to="/hod/dashboard">Dashboard</Link></li>
                        <li><Link to="/hod/staff">Staff</Link></li>
                        <li><Link to="/hod/result-approval">Result Approval</Link></li>
                        <li><Link to="/hod/department-reports">Department Reports</Link></li>
                        <li><Link to="/hod/curriculum">Curriculum</Link></li>
                        <li><Link to="/hod/resources">Resources</Link></li>
                        <li><Link to="/hod/students">Students</Link></li>
                        <li><Link to="/hod/course">Course</Link></li>
                        <li><Link to="/hod/staff-courses">Staff Courses</Link></li>
                        <li><Link to="/hod/reports-analytics">Reports & Analytics</Link></li>
                        <li><Link to="/hod/request">Request</Link></li>
                        <li><Link to="/hod/overview">Overview</Link></li>

                      </ul>
                    </li>

                    {/* Head Academic Control */}
                    <li className={activeSection === 'aca' ? 'mm-active' : ''}>
                      <a className="anchor" href="#aca">
                        <i className="mdi mdi-sort-ascending " />
                        <span> Head Academic</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'aca' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'aca'}>
                        <li><Link to="/hac/dashboard">Dashboard</Link></li>
                        <li><Link to="/hac/academic-reports">Academic Reports</Link></li>
                        <li><Link to="/hac/result-approval">Result Approval</Link></li>
                        <li><Link to="/hac/semester">Semester</Link></li>
                        <li><Link to="/hac/curriculum">Curriculum</Link></li>
                        <li><Link to="/hac/attendance">Attendance</Link></li>
                        <li><Link to="/hac/examination">Examination</Link></li>
                        <li><Link to="/hac/reports-analytics">Reports & Analytics</Link></li>
                        <li><Link to="/hac/announcement">Announcement</Link></li>
                        <li><Link to="/hac/result-overview">Result Overview</Link></li>
                        <li><Link to="/hac/student-transcript">Student Transcript</Link></li>
                        <li><Link to="/hac/timetable">Timetable</Link></li>
                        <li><Link to="/hac/course">Courses</Link></li>
                        <li><Link to="/hac/programme">Programmes</Link></li>
                        <li><Link to="/hac/hod">Heads of Department</Link></li>
                        <li><Link to="/hac/request">Requests</Link></li>

                      </ul>
                    </li>

                    {/* Head Admin Control */}
                    <li className={activeSection === 'adm' ? 'mm-active' : ''}>
                      <a className="anchor" href="#adm">
                        <i className="mdi mdi-sort-ascending " />
                        <span> Head Admin</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'adm' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'adm'}>
                        <li><Link to="/had/dashboard">Dashboard</Link></li>
                        <li><Link to="/had/staff">Staff</Link></li>
                        <li><Link to="/had/student">Student</Link></li>
                        <li><Link to="/had/events">Events</Link></li>
                        <li><Link to="/had/schedules">Schedules</Link></li>
                        <li><Link to="/had/admission">Admission</Link></li>
                        <li><Link to="/had/admin-reports">Admin Reports</Link></li>
                        <li><Link to="/had/announcement">Announcement</Link></li>
                        <li><Link to="/had/exeat">Exeat</Link></li>
                        <li><Link to="/had/request">Request</Link></li>

                      </ul>
                    </li>

                    {/* Head Domestic Control */}
                    <li className={activeSection === 'do' ? 'mm-active' : ''}>
                      <a className="anchor" href="#do">
                        <i className="mdi mdi-sort-ascending " />
                        <span> Head Domestic</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'do' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'do'}>
                        <li><Link to="/domestic/dashboard">Dashboard</Link></li>
                        <li><Link to="/domestic/facilities">Facilities</Link></li>
                        <li><Link to="/domestic/request">Request</Link></li>
                        <li><Link to="/domestic/inventory">Inventory</Link></li>
                        <li><Link to="/domestic/inventory-stock-tracking">Inventory Stock Tracking</Link></li>
                        <li><Link to="/domestic/procurement">Procurement</Link></li>
                        <li><Link to="/domestic/inventory-requests">Inventory Requests</Link></li>
                        <li><Link to="/domestic/inventory-reports">Inventory Reports</Link></li>
                        <li><Link to="/domestic/menu">Menu</Link></li>
                        <li><Link to="/domestic/vendors">Vendors</Link></li>
                        <li><Link to="/domestic/canteen">Canteen</Link></li>
                        <li><Link to="/domestic/vendors-report">Vendors Report</Link></li>
                        <li><Link to="/domestic/maintenance">Maintenance</Link></li>
                        <li><Link to="/domestic/maintenance-requests">Maintenance Requests</Link></li>
                        <li><Link to="/domestic/maintenance-schedules">Maintenance Schedules</Link></li>
                        <li><Link to="/domestic/maintenance-reports">Maintenance Reports</Link></li>
                        <li><Link to="/domestic/cost-tracking">Cost Tracking</Link></li>

                      </ul>
                    </li>

                    {/* Principal Control */}
                    <li className={activeSection === 'p' ? 'mm-active' : ''}>
                      <a className="anchor" href="#p">
                        <i className="mdi mdi-sort-ascending " />
                        <span> Principal</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'p' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'p'}>
                        <li><Link to="/head/dashboard">Dashboard</Link></li>
                        <li><Link to="/head/staff-overview">Staff Overview</Link></li>
                        <li><Link to="/head/principal-reports">Principal Reports</Link></li>
                        <li><Link to="/head/disciplinary-overview">Disciplinary Overview</Link></li>
                        <li><Link to="/head/school-performance-metrics">Performance Metrics</Link></li>
                        <li><Link to="/head/principal-meetings">Principal Meetings</Link></li>
                        <li><Link to="/head/approvals">Approvals</Link></li>
                        <li><Link to="/head/requests">Requests</Link></li>
                        <li><Link to="/head/concerns">Concerns</Link></li>
                        <li><Link to="/head/analytics">Analytics</Link></li>

                      </ul>
                    </li>

                    {/* Nurse Control */}
                    <li className={activeSection === 'ha' ? 'mm-active' : ''}>
                      <a className="anchor" href="#ha">
                        <i className="mdi mdi-sort-ascending " />
                        <span>Health Admin</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'ha' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'ha'}>
                        <li><Link to="/nurse/infirmary">Infirmary</Link></li>
                        <li><Link to="/nurse/registration">Registration</Link></li>
                        <li><Link to="/nurse/records">Records</Link></li>
                        <li><Link to="/nurse/consultation">Consultation</Link></li>
                        <li><Link to="/nurse/treatment">Treatment</Link></li>
                        <li><Link to="/nurse/referral-manager">Referral Manager</Link></li>
                        <li><Link to="/nurse/medical-records">Medical Records</Link></li>
                        <li><Link to="/nurse/infirmary-reports">Infirmary Reports</Link></li>
                        <li><Link to="/nurse/pharmacy">Pharmacy</Link></li>
                        <li><Link to="/nurse/drug">Drug</Link></li>
                        <li><Link to="/nurse/procurement">Procurement</Link></li>
                        <li><Link to="/nurse/dispensing">Dispensing</Link></li>
                        <li><Link to="/nurse/billing">Billing</Link></li>
                        <li><Link to="/nurse/pharmacy-reports">Pharmacy Reports</Link></li>

                      </ul>
                    </li>

                    {/* Accountant Control */}
                    <li className={activeSection === 'ac' ? 'mm-active' : ''}>
                      <a className="anchor" href="#ac">
                        <i className="mdi mdi-sort-ascending " />
                        <span> Accountant</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'ac' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'ac'}>
                        <li><Link to="/accountant/dashboard">Dashboard</Link></li>
                        <li><Link to="/accountant/fees">Fees</Link></li>
                        <li><Link to="/accountant/fee-preparation">Fee Preparation</Link></li>
                        <li><Link to="/accountant/disbursement">Disbursement</Link></li>
                        <li><Link to="/accountant/purchasing">Purchasing</Link></li>
                        <li><Link to="/accountant/expenses">Expenses</Link></li>
                        <li><Link to="/accountant/accounting-reports">Account Reports</Link></li>
                        <li><Link to="/accountant/students">Students</Link></li>
                        <li><Link to="/accountant/bills">Bills</Link></li>
                        <li><Link to="/accountant/payment">Payment</Link></li>
                        <li><Link to="/accountant/payment-history">Payment History</Link></li>
                        <li><Link to="/accountant/reports">Reports</Link></li>

                      </ul>
                    </li>

                    {/* Bursar Control */}
                    <li className={activeSection === 'bs' ? 'mm-active' : ''}>
                      <a className="anchor" href="#bs">
                        <i className="mdi mdi-sort-ascending " />
                        <span> Bursar</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul className={`nav-second-level nav-control ${activeSection === 'bs' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'bs'}>
                        <li><Link to="/bursar/dashboard">Dashboard</Link></li>
                        <li><Link to="/bursar/items">Items</Link></li>
                        <li><Link to="/bursar/item-requests">Item Requests</Link></li>
                        <li><Link to="/bursar/disbursement">Disbursement</Link></li>
                        <li><Link to="/bursar/stock-tracking">Stock Tracking</Link></li>
                        <li><Link to="/bursar/store-reports">Store Reports</Link></li>
                        <li><Link to="/bursar/students">Students</Link></li>

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
    </>
  )

}

export default SidebarStaff
