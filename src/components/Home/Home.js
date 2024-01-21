import React from 'react'
import BgCar from '../../img/BgCar.jpg';
import { HomeButton, HomeImg, HomeText, HomeWrapper } from './Home.styled'

const Home = () => {
  return (
    <HomeWrapper>
      <HomeText>Car rental in Ukraine</HomeText>
          <HomeButton to={'/catalog'}>Try it!</HomeButton>
          <HomeImg src={BgCar} alt='car' />
    </HomeWrapper>
  )
}

export default Home
