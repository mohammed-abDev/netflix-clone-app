import React from 'react'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import Banner from '../../componentes/Banner/Banner'
import Rowlist from '../../componentes/Row\'s/RowList/Rowlist'
import ReasonsToJoinList from '../../componentes/WhyJoine/ReasonsToJoinList/ReasonsToJoinList'
import FAQlist from '../../componentes/FAQSection/FAQlist/FAQlist'

function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Rowlist/>
      <ReasonsToJoinList/>
      <FAQlist/>
      <Footer/>
    </>
  )
}

export default Home
