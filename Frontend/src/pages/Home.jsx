import React, { useEffect } from 'react'

const Home = () => {



  useEffect(()=>{
    document.getElementById("pageTitle").innerHTML = " | Home";

  },[])
  
  return (
    <div className="row">
    {/* Material statustic card start */}
    <div className="col-xl-4 col-md-12">
      <div className="card mat-stat-card">
        <div className="card-block">
          <div className="row align-items-center b-b-default">
            <div className="col-sm-6 b-r-default p-b-20 p-t-20">
              <div className="row align-items-center text-center">
                <div className="col-4 p-r-0">
                  <i className="far fa-user text-c-purple f-24" />
                </div>
                <div className="col-8 p-l-0">
                  <h5>10K</h5>
                  <p className="text-muted m-b-0">Visitors</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-b-20 p-t-20">
              <div className="row align-items-center text-center">
                <div className="col-4 p-r-0">
                  <i className="fas fa-volume-down text-c-green f-24" />
                </div>
                <div className="col-8 p-l-0">
                  <h5>100%</h5>
                  <p className="text-muted m-b-0">Volume</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6 p-b-20 p-t-20 b-r-default">
              <div className="row align-items-center text-center">
                <div className="col-4 p-r-0">
                  <i className="far fa-file-alt text-c-red f-24" />
                </div>
                <div className="col-8 p-l-0">
                  <h5>2000+</h5>
                  <p className="text-muted m-b-0">Files</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-b-20 p-t-20">
              <div className="row align-items-center text-center">
                <div className="col-4 p-r-0">
                  <i className="far fa-envelope-open text-c-blue f-24" />
                </div>
                <div className="col-8 p-l-0">
                  <h5>120</h5>
                  <p className="text-muted m-b-0">Mails</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-12">
      <div className="card mat-stat-card">
        <div className="card-block">
          <div className="row align-items-center b-b-default">
            <div className="col-sm-6 b-r-default p-b-20 p-t-20">
              <div className="row align-items-center text-center">
                <div className="col-4 p-r-0">
                  <i className="fas fa-share-alt text-c-purple f-24" />
                </div>
                <div className="col-8 p-l-0">
                  <h5>1000</h5>
                  <p className="text-muted m-b-0">Share</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-b-20 p-t-20">
              <div className="row align-items-center text-center">
                <div className="col-4 p-r-0">
                  <i className="fas fa-sitemap text-c-green f-24" />
                </div>
                <div className="col-8 p-l-0">
                  <h5>600</h5>
                  <p className="text-muted m-b-0">Network</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6 p-b-20 p-t-20 b-r-default">
              <div className="row align-items-center text-center">
                <div className="col-4 p-r-0">
                  <i className="fas fa-signal text-c-red f-24" />
                </div>
                <div className="col-8 p-l-0">
                  <h5>350</h5>
                  <p className="text-muted m-b-0">Returns</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-b-20 p-t-20">
              <div className="row align-items-center text-center">
                <div className="col-4 p-r-0">
                  <i className="fas fa-wifi text-c-blue f-24" />
                </div>
                <div className="col-8 p-l-0">
                  <h5>100%</h5>
                  <p className="text-muted m-b-0">Connections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-md-12">
      <div className="card mat-clr-stat-card text-white green ">
        <div className="card-block">
          <div className="row">
            <div className="col-3 text-center bg-c-green">
              <i className="fas fa-star mat-icon f-24" />
            </div>
            <div className="col-9 cst-cont">
              <h5>4000+</h5>
              <p className="m-b-0">Ratings Received</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mat-clr-stat-card text-white blue">
        <div className="card-block">
          <div className="row">
            <div className="col-3 text-center bg-c-blue">
              <i className="fas fa-trophy mat-icon f-24" />
            </div>
            <div className="col-9 cst-cont">
              <h5>17</h5>
              <p className="m-b-0">Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Material statustic card end */}
    {/* order-visitor start */}
    {/* order-visitor end */}
    {/*  sale analytics start */}
    <div className="col-xl-6 col-md-12">
      <div className="card table-card">
        <div className="card-header">
          <h5>Member’s performance</h5>
          <div className="card-header-right">
            <ul className="list-unstyled card-option">
              <li><i className="fa fa fa-wrench open-card-option" /></li>
              <li><i className="fa fa-window-maximize full-card" /></li>
              <li><i className="fa fa-minus minimize-card" /></li>
              <li><i className="fa fa-refresh reload-card" /></li>
              <li><i className="fa fa-trash close-card" /></li>
            </ul>
          </div>
        </div>
        <div className="card-block">
          <div className="table-responsive">
            <table className="table table-hover m-b-0 without-header">
              <tbody>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img src="temp/assets/images/avatar-4.jpg" alt="user image" className="img-radius img-40 align-top m-r-15" />
                      <div className="d-inline-block">
                        <h6>Shirley Hoe</h6>
                        <p className="text-muted m-b-0">Sales executive , NY</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="f-w-700">$78.001<i className="fas fa-level-down-alt text-c-red m-l-10" /></h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img src="temp/assets/images/avatar-2.jpg" alt="user image" className="img-radius img-40 align-top m-r-15" />
                      <div className="d-inline-block">
                        <h6>James Alexander</h6>
                        <p className="text-muted m-b-0">Sales executive , EL</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="f-w-700">$89.051<i className="fas fa-level-up-alt text-c-green m-l-10" /></h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img src="temp/assets/images/avatar-4.jpg" alt="user image" className="img-radius img-40 align-top m-r-15" />
                      <div className="d-inline-block">
                        <h6>Shirley Hoe</h6>
                        <p className="text-muted m-b-0">Sales executive , NY</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="f-w-700">$89.051<i className="fas fa-level-up-alt text-c-green m-l-10" /></h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img src="temp/assets/images/avatar-2.jpg" alt="user image" className="img-radius img-40 align-top m-r-15" />
                      <div className="d-inline-block">
                        <h6>Nick Xander</h6>
                        <p className="text-muted m-b-0">Sales executive , EL</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="f-w-700">$89.051<i className="fas fa-level-up-alt text-c-green m-l-10" /></h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-md-12">
      <div className="row">
        {/* sale card start */}
        <div className="col-md-6">
          <div className="card text-center order-visitor-card">
            <div className="card-block">
              <h6 className="m-b-0">Total Subscription</h6>
              <h4 className="m-t-15 m-b-15"><i className="fa fa-arrow-down m-r-15 text-c-red" />7652</h4>
              <p className="m-b-0">48% From Last 24 Hours</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center order-visitor-card">
            <div className="card-block">
              <h6 className="m-b-0">Order Status</h6>
              <h4 className="m-t-15 m-b-15"><i className="fa fa-arrow-up m-r-15 text-c-green" />6325</h4>
              <p className="m-b-0">36% From Last 6 Months</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-c-red total-card">
            <div className="card-block">
              <div className="text-left">
                <h4>489</h4>
                <p className="m-0">Total Comment</p>
              </div>
              <span className="label bg-c-red value-badges">15%</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-c-green total-card">
            <div className="card-block">
              <div className="text-left">
                <h4>$5782</h4>
                <p className="m-0">Income Status</p>
              </div>
              <span className="label bg-c-green value-badges">20%</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center order-visitor-card">
            <div className="card-block">
              <h6 className="m-b-0">Unique Visitors</h6>
              <h4 className="m-t-15 m-b-15"><i className="fa fa-arrow-down m-r-15 text-c-red" />652</h4>
              <p className="m-b-0">36% From Last 6 Months</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center order-visitor-card">
            <div className="card-block">
              <h6 className="m-b-0">Monthly Earnings</h6>
              <h4 className="m-t-15 m-b-15"><i className="fa fa-arrow-up m-r-15 text-c-green" />5963</h4>
              <p className="m-b-0">36% From Last 6 Months</p>
            </div>
          </div>
        </div>
        {/* sale card end */}
      </div>
    </div>
    {/*  sale analytics end */}
    {/* Project statustic start */}
    <div className="col-xl-12">
      <div className="card proj-progress-card">
        <div className="card-block">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <h6>Published Project</h6>
              <h5 className="m-b-30 f-w-700">532<span className="text-c-green m-l-10">+1.69%</span></h5>
              <div className="progress">
                <div className="progress-bar bg-c-red" style={{width: '25%'}} />
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <h6>Completed Task</h6>
              <h5 className="m-b-30 f-w-700">4,569<span className="text-c-red m-l-10">-0.5%</span></h5>
              <div className="progress">
                <div className="progress-bar bg-c-blue" style={{width: '65%'}} />
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <h6>Successfull Task</h6>
              <h5 className="m-b-30 f-w-700">89%<span className="text-c-green m-l-10">+0.99%</span></h5>
              <div className="progress">
                <div className="progress-bar bg-c-green" style={{width: '85%'}} />
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <h6>Ongoing Project</h6>
              <h5 className="m-b-30 f-w-700">365<span className="text-c-green m-l-10">+0.35%</span></h5>
              <div className="progress">
                <div className="progress-bar bg-c-yellow" style={{width: '45%'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Project statustic end */}
  </div>

  )
}

export default Home
