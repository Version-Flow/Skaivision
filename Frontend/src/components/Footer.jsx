import Config from '../../helpers/config';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>



            <footer className="footer"  style={{backgroundColor: 'transparent'}}>
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-12" style={{ height: 0 }}>
                            <p>All right reserved ©  {currentYear} {Config[0].APP_ALLIASE} | {Config[0].APP_VERSION} Powered with <i className="mdi mdi-heart text-danger" /> by {Config[0].BRAND_NAME} Team</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
