import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

export const CoustomProgrssBar = () =>{
  return(   
      <MDBProgress height={5} >
        <MDBProgressBar width={75} valuemin={0} valuemax={100} striped animated/>
      </MDBProgress>
  );
}