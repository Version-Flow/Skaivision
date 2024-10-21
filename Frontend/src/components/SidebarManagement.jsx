import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const SidebarManagement = () => {

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
                    <img src="/temp/assets/images/users/avatar-1.jpg" height={25} />
                    <h5 className="school-aliase">Nickname</h5>
                </div>
                <div className="slimscroll-menu">

                    <div className="card-box">
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
                                        <li className="line-border" />

                                        <li className="menu-title">Apps</li>
                                        <li><a href="#"><i className="fe-life-buoy" /> <span> Tickets </span></a>
                                        </li>
                                        <li><a href="#"><i className="fe-layers" /><span> Todo </span></a></li>
                                        <li className="line-border" />


                                        <li className="menu-title">Elements</li>

                                        {/*App Settings */}
                                        <li className={activeSection === 'asc' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#asc">
                                                <i className="icon-wrench" />
                                                <span>App Settings</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'asc' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'asc'}>
                                                <li><Link to="/settings/app-package">Packages</Link></li>
                                            </ul>
                                        </li>

                                        {/* System Settings */}
                                        <li className={activeSection === 'sys' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#sys">
                                                <i className="mdi mdi-cogs" />
                                                <span>System Settings</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'sys' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'sys'}>
                                                <li><Link to="/settings/system-roles">Roles</Link></li>
                                                <li><Link to="/settings/system-permission">Permissions</Link></li>
                                                <li><Link to="/settings/system-school_type">School Types</Link></li>
                                                <li><Link to="/settings/system-school_status">School Status</Link></li>
                                                <li><Link to="/settings/system-country">Countries</Link></li>
                                                <li><Link to="/settings/system-region">Regions</Link></li>
                                                <li><Link to="/settings/system-district">Districts</Link></li>
                                                <li><Link to="/settings/system-institution">Institutions</Link></li>
                                                <li><Link to="/settings/system-class">Classes</Link></li>
                                                <li><Link to="/settings/system-accreditation_body">Accreditation Bodies</Link></li>
                                                <li><Link to="/settings/system-relationship">Relationships</Link></li>
                                                <li><Link to="/settings/system-ethnicity">Ethnicities</Link></li>
                                                <li><Link to="/settings/system-religion">Religions</Link></li>
                                            </ul>
                                        </li>

                                        {/* Manage Schools */}
                                        <li className={activeSection === 'sch' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#sch">
                                                <i className="icon-wrench" />
                                                <span>Manage Schools</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'sch' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'sch'}>
                                                <li><Link to="/staff/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Academic Concerns */}
                                        <li className={activeSection === 'aca' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#aca">
                                                <i className="dripicons-graduation" />
                                                <span>Academic Concerns</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'aca' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'aca'}>
                                                <li><Link to="/hod/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Manage Admission */}
                                        <li className={activeSection === 'adm' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#adm">
                                                <i className="dripicons-wallet" />
                                                <span>Manage Admission</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'adm' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'adm'}>
                                                <li><Link to="/had/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Manage Domestics */}
                                        <li className={activeSection === 'dom' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#dom">
                                                <i className="mdi mdi-database" />
                                                <span>Manage Domestics</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'dom' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'dom'}>
                                                <li><Link to="/domestic/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Health Concerns */}
                                        <li className={activeSection === 'hea' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#hea">
                                                <i className="dripicons-toggles" />
                                                <span>Health Concerns</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'hea' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'hea'}>
                                                <li><Link to="/nurse/infirmary">Infirmary</Link></li>
                                            </ul>
                                        </li>

                                        {/* Manage Finances */}
                                        <li className={activeSection === 'fin' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#fin">
                                                <i className="fe-layers" />
                                                <span>Manage Finances</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'fin' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'fin'}>
                                                <li><Link to="/accountant/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Manage Users */}
                                        <li className={activeSection === 'usr' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#usr">
                                                <i className="icon-wrench" />
                                                <span>Manage Users</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'usr' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'usr'}>
                                                <li><Link to="/staff/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Biometric */}
                                        <li className={activeSection === 'bio' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#bio">
                                                <i className="icon-wrench" />
                                                <span>Biometric</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'bio' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'bio'}>
                                                <li><Link to="/staff/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Payroll */}
                                        <li className={activeSection === 'pay' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#pay">
                                                <i className="icon-wrench" />
                                                <span>Payroll</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'pay' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'pay'}>
                                                <li><Link to="/staff/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Chat App */}
                                        <li className={activeSection === 'cha' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#cha">
                                                <i className="icon-wrench" />
                                                <span>Chat App</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'cha' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'cha'}>
                                                <li><Link to="/staff/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* eVoting */}
                                        <li className={activeSection === 'evt' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#evt">
                                                <i className="icon-wrench" />
                                                <span>eVoting</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'evt' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'evt'}>
                                                <li><Link to="/staff/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>

                                        {/* Manage Siren */}
                                        <li className={activeSection === 'sir' ? 'mm-active' : ''}>
                                            <a className="anchor" href="#sir">
                                                <i className="icon-wrench" />
                                                <span>Manage Siren</span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul className={`nav-second-level nav-control ${activeSection === 'sir' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={activeSection === 'sir'}>
                                                <li><Link to="/staff/dashboard">Dashboard</Link></li>
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

export default SidebarManagement
