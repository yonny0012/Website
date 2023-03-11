import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { useState } from 'react';

export const CoustomProgrssBar = (props) =>{
  const [value, setValue] = useState(0);

  // chatGpt
    // Actualiza el valor de la barra de progreso
    const updateProgress = (value) => {
      setValue(value);
    }
    window.onscroll = () =>{
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      updateProgress((winScroll / height) * 100);
    }


  return(   
    <MDBProgress height={props.height} >
      <MDBProgressBar width={value} valuemin={0} valuemax={100} striped animated/>
    </MDBProgress>
  );
}
