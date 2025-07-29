import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/men/mens_kurta'
import { gounsPage1 } from '../../../Data/women/goun'
import { kurtaPage1 } from '../../../Data/women/kurta'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  
   
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>

         <HomeSectionCarousel data={mens_kurta}  sectionName={"Men's Kurtas"}/>
         <HomeSectionCarousel data={gounsPage1} sectionName={"Women's Goun"}/>
         <HomeSectionCarousel data={kurtaPage1} sectionName={"Women's Kurti"}/>
        

                  
      </div>
    </div>

  )
}

export default HomePage
