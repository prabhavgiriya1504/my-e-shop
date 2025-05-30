import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
         <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtas"}/>
         <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
         <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
         <HomeSectionCarousel data={mens_kurta} sectionName={" Sarees "}/>
         <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
         <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Kurtas"}/>

                  
      </div>
    </div>

  )
}

export default HomePage
