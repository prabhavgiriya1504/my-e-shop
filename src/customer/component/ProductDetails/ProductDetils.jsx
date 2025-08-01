



"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';
import { Box, Grid } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../../Data/men/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { store } from "../../../State/store";
import { addItemToCart } from "../../../State/Cart/Action";
const producti = {
name: "Basic Tee 6-Pack",
price: "$192",
href: "#",
breadcrumbs: [
  { id: 1, name: "Men", href: "#" },
  { id: 2, name: "Clothing", href: "#" },
],
images: [
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    alt: "Two each of gray, white, and black shirts laying flat.",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
    alt: "Model wearing plain black basic tee.",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
    alt: "Model wearing plain gray basic tee.",
  },
  {
    src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
    alt: "Model wearing plain white basic tee.",
  },
],
colors: [
  { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
  { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
  { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
],
sizes: [
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true }
],
description:
  'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
highlights: [
  "Hand cut and sewn locally",
  "Dyed with our proprietary colors",
  "Pre-washed & pre-shrunk",
  "Ultra-soft 100% cotton",
],
details:
  'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
const [selectedSize, setSelectedSize] = useState("");
const navigate = useNavigate();


const handleAddToCart = (e) => {
     
  const data = {productId:params.productId , size:selectedSize.name}
  console.log("data of product as per your selection is sent to server.....")
  dispatch(addItemToCart(data))
    navigate("/cart");
}

const params = useParams();
const dispatch = useDispatch();
const {product} = useSelector(store=>store)


useEffect(() => {
   const data = {productId:params.productId}
  dispatch(findProductsById(data))
} , [params.productId])
return (
  <div className="bg-white">
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          {producti.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a
              href={producti.href}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {producti.name}
            </a>
          </li>
        </ol>
      </nav>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
        {/* Image gallery */}
       
          <div className="flex justify-center overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] ">
              <img
              alt={producti.images[0].alt}
              src={product.product?.imageUrl}
              className=" size-full rounded-lg object-cover "
              />
          </div>
          {/* <div className="flex flex-wrap space-x-5 justify-center">
              {producti.images.map((item) => <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img 
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center"
                  />
              </div>)}
          </div> */}
       

        {/* Product info */}
        <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
          <div className="lg:col-span-2 ">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900 ">
              {product.product?.brand}
            </h1>
            <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
              {product.product?.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">{product.product?.description}</h2>
            <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
              <p className="font-semibold">Rs.{product.product?.discountedPrice}</p>
              <p className="opacity-50 line-through">Rs.{product.product?.price}</p>
              <p className="text-green-600 font-semibold">{product.product?.discountPercent}% Off</p>              
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center space-x-3">
                <Rating name="read-only" value={4} readOnly />
                <p className="opacity-50 text-sm">5540 Ratings</p>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">3890 Reviews</p>
              </div>
            </div>

            <form className="mt-10">
              

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {producti.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6"
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                            >
                              <line
                                x1={0}
                                x2={100}
                                y1={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                onClick={handleAddToCart}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Add To Cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {producti.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Highlights
              </h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {producti.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{producti.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ratings and reviews */}
      <section>
        <h1 className="font-semibold text-lg pb-4">Recent reviews and ratings </h1>
        <div className="border p-5">
          <Grid container spacing={7}>
            <Grid item xs={7}>
              <div className="space-y-5">
                {[1,1,1].map(() => <ProductReviewCard />)}
              </div>
            </Grid>
            
            <Grid item xs={5}>
              <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
              <div className="flex items-center space-x-3">
                <Rating value={4.6} precision={0.5} readOnly />
                <p className="opacity-60">5555 Ratings</p>
              </div>

              <Box className="mt-5 space-y-3">
                <Grid container justifyContent="center" alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Excellent</p>
                  </Grid>
                  <Grid item xs={7}>
                    
                    <LinearProgress variant="determinate" value={40} color="success" sx={{bgcolor: "lightgray", borderRadius:4,height: 10}}/>
                      
                  </Grid>
                </Grid>

                <Grid container justifyContent="center" alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Very Good</p>
                  </Grid>
                  <Grid item xs={7}>
                    
                    <LinearProgress variant="determinate" value={30} color="success" sx={{bgcolor: "lightgray", borderRadius:4,height: 10}}/>
                      
                  </Grid>
                </Grid>

                <Grid container justifyContent="center" alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Good</p>
                  </Grid>
                  <Grid item xs={7}>
                    
                    <LinearProgress variant="determinate" value={25} color="success" sx={{bgcolor: "lightgray", borderRadius:4,height: 10}}/>
                      
                  </Grid>
                </Grid>

                <Grid container justifyContent="center" alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Average</p>
                  </Grid>
                  <Grid item xs={7}>
                    
                    <LinearProgress variant="determinate" value={20} color="warning" sx={{bgcolor: "lightgray", borderRadius:4,height: 10}}/>
                      
                  </Grid>
                </Grid>

                <Grid container justifyContent="center" alignItems="center" gap={2}>
                  <Grid item xs={2}>
                    <p>Poor</p>
                  </Grid>
                  <Grid item xs={7}>
                    
                    <LinearProgress variant="determinate" value={15} color="error" sx={{bgcolor: "lightgray", borderRadius:4,height: 10}}/>
                      
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          
        </div>
      </section>

      <section className="pt-10">
        <h1 className="py-5 ml-10 text-xl font-bold">Similar Products</h1>

        <div className="flex flex-wrap space-y-5 justify-around">
          {
            mens_kurta.map((item) => <HomeSectionCard product={item}/>)
          }
        </div>
      </section>
    </div>
  </div>
);
}