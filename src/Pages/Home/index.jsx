import React from 'react'
import Slider from '../../Components/slider'
import "./index.scss"
import OfferCard from '../../Components/offerCard'
import Text from '../../Components/Text'

function Home() {
  return (
    <div className='homePage'>
        <Slider></Slider>
        <OfferCard></OfferCard>
        <Text></Text>
    </div>
  )
}

export default Home