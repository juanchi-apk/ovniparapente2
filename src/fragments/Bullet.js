import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Fade from 'react-reveal/Fade';

import'./bullet.scss';






const BulletItem = ({content}) => {

 
    
    return(
        <Fade duration={3000} bottom distance="50px"  >
        <div className = "bullet_container">
            <CheckCircleIcon style={{color : "#42f934"}}/>
            <div className = "bullet_text">{content}</div>
        </div>
        </Fade>


    )
}

export default BulletItem