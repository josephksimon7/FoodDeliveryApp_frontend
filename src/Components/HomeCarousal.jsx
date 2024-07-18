import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { assets } from "../assets/assets";
import { Button, Container } from 'react-bootstrap';
import "./HomeCarousal.css";



const HomeCarousal = () => {
  return (
    <div>


<Container>
  <Carousel >
          <Carousel.Item>
  
            <img
              src={assets.carousal}
              alt="First slide"
              className="d-block mx-auto "
              height="400px"
            />
            <Carousel.Caption>
          <h1 className='anim text-left'>Order Your <br />Favourite Food Here</h1>
          <p className='anim text-left'>Choose from a diverse menu featuring a delectable array of dishes crafteed with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate youe dining experience,onedelicious meal at a time</p>
        </Carousel.Caption>
           </Carousel.Item>
  
         
         
          <Carousel.Item>
           
  
            <img
              src={assets.carousal}
              alt="First slide"
              className="d-block mx-auto "
              height="400px"
            />
            <Carousel.Caption>
          <h1 className='anim text-left'>Order Your <br />Favourite Food Here</h1>
          <p className='anim text-left'>Choose from a diverse menu featuring a delectable array of dishes crafteed with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate youe dining experience,onedelicious meal at a time</p>
        </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            
  
            <img
              src={assets.carousal}
              alt="First slide"
              className="d-block mx-auto "
              height="400px"
            />
            <Carousel.Caption>
          <h1 className='anim text-left'>Order Your <br />Favourite Food Here</h1>
          <p className='anim text-left'>Choose from a diverse menu featuring a delectable array of dishes crafteed with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate youe dining experience,onedelicious meal at a time</p>
        </Carousel.Caption>

          </Carousel.Item>
        </Carousel>
</Container>




    </div>
  )
}

export default HomeCarousal