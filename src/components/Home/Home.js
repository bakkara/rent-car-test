import React from 'react'
import BgCar from '../../img/BgCar.jpg';
import { HomeButton, HomeImg, HomeText, HomeTextLi, HomeTextTitle, HomeTextUl, HomeWrapper, TextTitle } from './Home.styled'

const Home = () => {
  return (
    <HomeWrapper>
          <HomeTextTitle>Welcome to "Mobile Freedom" – Your Premier Car Rental Partner!</HomeTextTitle>

          <TextTitle>
            Why Choose "Mobile Freedom"?
          </TextTitle>
          <HomeTextUl>
              <HomeTextLi>Smart Rates. We offer competitive prices for all our services.</HomeTextLi>
              <HomeTextLi>Reliability. Our fleet is always well-maintained, ensuring the quality of our vehicles.</HomeTextLi>
              <HomeTextLi>Convenience. We work to provide you with maximum comfort and convenience during your rental.</HomeTextLi>
          </HomeTextUl>
          <HomeText>Choose "Mobile Freedom" - where your journey becomes even more enjoyable! Book your car today and experience the freedom on the road.</HomeText>
          <HomeButton to={'/catalog'}>Try it!</HomeButton>
          <HomeImg src={BgCar} alt='car' />
    </HomeWrapper>
  )
}

export default Home
