const RightDialogue = ({ visible, onClose }) => {
    return (
      <div className={`right-bar ${visible ? 'show' : ''}`}>
        <div className="rightbar-title">
          <a href="#" className="right-bar-toggle float-right" onClick={onClose}>
            <i className="mdi mdi-close" />
          </a>
          <h4 className="font-16 m-0 text-white">Tittle here</h4>
        </div>
        <div className="slimscroll-menu">
          <div className="p-3">
            <div className="alert alert-warning" role="alert">
              <strong>Customize </strong> the overall color scheme, layout, etc.
            </div>
           
            
           
            
          </div>
        </div> 
      </div>
    );
  };
  
  export default RightDialogue;
  