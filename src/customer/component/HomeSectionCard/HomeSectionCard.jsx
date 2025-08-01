import React from 'react'
import { useNavigate } from 'react-router-dom';


const HomeSectionCard = ({ product , sectionName }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    switch(sectionName){
      case "Men's Kurtas":
        navigate("/men/clothing/mens_kurta");
        break;
      case "Women's Goun":
        navigate("/women/clothing/gown");
        break;
      case "Women's Kurti":
        navigate("/women/clothing/kurta");
        break;
      default: 
         navigate("/");
    }
  }

  return (
    <div onClick={handleCardClick} className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard;
