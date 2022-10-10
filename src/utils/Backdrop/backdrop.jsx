import React from "react";
import '../Backdrop/backdrop.css'

const backdrop = (props) => {

  return (
    <div className="backdrop_pro_backdrop" onClick={props.backdropClicked} style={{
        display : props.isBackdrop ? 'block' : 'none'
    }}>

    </div>
  );
};

export default backdrop;
