import "../Styles/TextOcean.css";
// generado por chatGpt
import { useState, useRef, useEffect } from 'react';

export const TextOcean = ({ text })=>{
  
  // @cahtGpt
  const [width, setWidth] = useState(0);
  const textRef = useRef();
  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.getBBox().width);
    }
  }, [text]);

  return(
    <svg className="text-ocean" viewBox={`0 0 ${width} 20`} width={width} height="35px">
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="3">
          <stop offset="5%" stopColor="#41edf3"/>
          <stop offset="95%" stopColor="#35e66a"/>
        </linearGradient>
        <pattern id="wave" x="0" y="4" width="120" height="20" patternUnits="userSpaceOnUse">
          <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite" />
          </path>
        </pattern>
      </defs>
      <text ref={textRef} className="text" textAnchor="middle" x="50%" y="15" fontSize="30" fill="url(#wave)"  fillOpacity="0.6" alignmentBaseline="middle">{ text }</text>
      <text ref={textRef} className="text" textAnchor="middle" x="50%" y="15" fontSize="30" fill="url(#gradient)" fillOpacity="0.1" alignmentBaseline="middle" >{ text }</text>
    </svg>
  );
}