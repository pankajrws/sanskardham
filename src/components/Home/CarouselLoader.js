import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselLoader(props) {
  // const [index, setIndex] = useState(0);

  // setInterval(function () {
  //   if (index == props.imageData.length - 1) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // }, 3000);

  return (
    <div style = {{display : "flex", width : "100%", justifyContent: "center" }}>
      {/* {
         {props.imageData.map(function(data){
        return <CarouselItem image_url={data.image_url}/>
      })}
      <CarouselItem image_url = {props.imageData[index].image_url}/>


      } */}
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <Carousel>
          {props.imageData.map((data) => {
            return (
              (data.image_url!="" && 
              <Carousel.Item key={Math.random(1000)} interval={3000}>
                <img className="d-block w-100" src={data.image_url} alt="Image One" />
              </Carousel.Item>)
            );
          })}
        </Carousel>
      </div>

    </div>
  );
}

export default CarouselLoader;
