// import React from 'react'
import { useLocation } from 'react-router-dom'
import Config from '../../helpers/config';

// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ title }) => {

  const location = useLocation()
  const pathName = location.pathname;

  return (
    <>


      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="#"> <i className="fa fa-home" /> </a>
                </li>
                <li className="breadcrumb-item"><a href="#!">{pathName == '/' ? 'Dashboard' : pathName}</a>
                </li>
              </ol>
            </div>
            <h4 className="page-title">{title}</h4>
            <small className="page-sub-title text-monospace text-truncate">{Config[0].APP_ALLIASE} a product from {Config[0].BRAND_NAME}</small>
          </div>
        </div>
      </div>

    </>



  )
}

export default Breadcrumb
