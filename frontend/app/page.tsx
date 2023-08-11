import * as React from 'react'
import Categories from './components/categories.tsx'
import Carousal from './components/carousals/mainCarousal.tsx'
import { offerProducts1,offerProducts2,offerProducts3 } from './components/utilities/constants.ts'
import DynamicCarousal from './components/carousals/dynamicCarousal.tsx'

const Page = () => {
  return (
    <div>
      <Categories/>
      <Carousal/>
      <DynamicCarousal title={"Our Best Deals For You"} productList={offerProducts1}/>
      <DynamicCarousal title={"Hurry!!! Grab them all"} productList={offerProducts2}/>
      <DynamicCarousal title={"Budget Sale Special"} productList={offerProducts3}/>
    </div>
  )
}

export default Page;
