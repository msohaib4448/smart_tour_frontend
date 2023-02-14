import React from 'react'
import NavBar from '../../components/Header/Header'
import PopularPage from '../../components/PopularPage/PopularPage'
import ExploreDestination from '../../components/ExploreDestination/ExploreDestination'
import ExplorePage from '../../components/ExplorePage/ExplorePage'
import CustomerReview from '../../components/CustomerReviews/CustomerReview'
import Footer from '../../components/footer/Footer'
export default function Home() {
  return (
    <div>
      <NavBar />
      <PopularPage/>
      <ExplorePage/>
      <ExploreDestination/>
      <CustomerReview/>
      <Footer/>       
    </div>
  )
}