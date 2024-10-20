import { useEffect} from 'react'
import Config from '../../../helpers/config';

const Dashboard = () => {

  useEffect(()=>{
    var titles = "Dashboard";
    Config[0].currentPage = titles
    document.getElementById("pageTitle").innerHTML = Config[0].currentPage + Config[0].APP_TITLE;
    
  },[])


  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-sm-6">
          <div className="card-box widget-box-two widget-two-custom">
            <div className="media">
              <div className="avatar-lg rounded-circle bg-primary widget-two-icon align-self-center">
                <i className="mdi mdi-currency-usd avatar-title font-30 text-white" />
              </div>
              <div className="wigdet-two-content media-body">
                <p className="m-0 text-uppercase font-weight-medium text-truncate" title="Statistics">Total Revenue</p>
                <h3 className="font-weight-medium my-2">$ <span data-plugin="counterup">65,841</span></h3>
                <p className="m-0">Jan - Apr 2019</p>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="col-xl-3 col-sm-6">
          <div className="card-box widget-box-two widget-two-custom ">
            <div className="media">
              <div className="avatar-lg rounded-circle bg-primary widget-two-icon align-self-center">
                <i className="mdi mdi-account-multiple avatar-title font-30 text-white" />
              </div>
              <div className="wigdet-two-content media-body">
                <p className="m-0 text-uppercase font-weight-medium text-truncate" title="Statistics">Total Unique Visitors</p>
                <h3 className="font-weight-medium my-2"> <span data-plugin="counterup">26,521</span></h3>
                <p className="m-0">Jan - Apr 2019</p>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="col-xl-3 col-sm-6">
          <div className="card-box widget-box-two widget-two-custom ">
            <div className="media">
              <div className="avatar-lg rounded-circle bg-primary widget-two-icon align-self-center">
                <i className="mdi mdi-crown avatar-title font-30 text-white" />
              </div>
              <div className="wigdet-two-content media-body">
                <p className="m-0 text-uppercase font-weight-medium text-truncate" title="Statistics">Number of Transactions</p>
                <h3 className="font-weight-medium my-2"><span data-plugin="counterup">7,842</span></h3>
                <p className="m-0">Jan - Apr 2019</p>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="col-xl-3 col-sm-6">
          <div className="card-box widget-box-two widget-two-custom ">
            <div className="media">
              <div className="avatar-lg rounded-circle bg-primary widget-two-icon align-self-center">
                <i className="mdi mdi-auto-fix  avatar-title font-30 text-white" />
              </div>
              <div className="wigdet-two-content media-body">
                <p className="m-0 text-uppercase font-weight-medium text-truncate" title="Statistics">Conversation Rate</p>
                <h3 className="font-weight-medium my-2"><span data-plugin="counterup">2.07</span>%</h3>
                <p className="m-0">Jan - Apr 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
