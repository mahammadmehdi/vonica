import React from 'react'
import { Carousel } from 'react-carousel-minimal';

function Slider() {
    const data = [
      {
        image: "https://vonica.novaworks.net/wp-content/uploads/2023/01/slider_01_2.png",
        caption:  `<div class='SliderText'>
       <h1 class='Vonica Trek Series Bike'>Vonica Trek Series Bike</h1>
       <div class='view'>VIEW COLLECTION</div>
       </div>`
      },
      {
        image: "https://vonica.novaworks.net/wp-content/uploads/2023/01/slider_01_3.png",
        caption: `<div class='SliderText'>
        <h1 class='Vonica Trek Series Bike'>Vonica Trek Series Bike</h1>
        <div class='view'>VIEW COLLECTION</div>
        </div>`
      },
      {
        image: "https://vonica.novaworks.net/wp-content/uploads/2023/01/slider_01_1.png",
        caption: `<div class='SliderText'>
        <h1 class='Vonica Trek Series Bike'>Vonica Trek Series Bike</h1>
        <div class='view'>VIEW COLLECTION</div>
        </div>`
      },
    ];
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
      display:'flex',
      justifyContent:'start',
      alignItems:'end',
      marginTop: '-70px',
      marginBottom:'100px',
      marginLeft:'-150px',
      color:'black'
      
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
    return (
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <div style={{
           
          }}>
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="90vh"
              captionStyle={captionStyle}
              captionPosition="center"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="transparent"
              slideImageFit="cover"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "90vh",
              
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  export default Slider;