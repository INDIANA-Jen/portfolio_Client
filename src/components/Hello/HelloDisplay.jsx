import React from "react";
import './HelloStyleDisplay.scss';

import Presentation from './helloComponents/Presentation';

function Hello() {
  
    return (
      <>
        <div className="ContainerHello">
          
          <Presentation />
          
        </div>
      </>
    )
  }

export default Hello;