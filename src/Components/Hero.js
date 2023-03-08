import avatar from "../Items/img/We.jpg";
export const Hero = ()=>{
  return(
    <section class="hero align-items-strtch">

      
      
      
      <div class="hero-main d-flex flex-column justify-content-center align-items-center">
        <img class="hero-img-main rounded-pill" src={ avatar }  width="200" alt="I am" />
        <svg viewbox="0 0 100 20">
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stop-color="#326384"/>
              <stop offset="95%" stop-color="#123752"/>
            </linearGradient>
            <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
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
          <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="0.6">Hola, soy la Molécula Jankince</text>
          <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.1">Hola, soy la Molécula Jankince</text>
        </svg>


        {/* <h1 id="h1">Hola, soy la Molécula Jankince</h1> */}
        {/* <h2>Aprendo desarrollo web front-end</h2> */}
      </div>
      <div class="hero-inferior">
        <img class="hero-img-inf img-fluid" width="300" src="src/img/laptop.svg" alt="Logo_laptop" />
      </div>
    </section>
  )
}