import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopLawyers from '../components/TopLawyers'
import { lawyers } from '../assets/assets';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopLawyers />
      <Banner />
      <br/>
    </div>
  )
}

export default Home