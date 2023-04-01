import React from 'react'
import Container from '../../component/container/Container'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import Cards from '../../component/cards/Cards'

function Home() {
  return (
    <>
    
        <main>
        <Header>
           <Navbar/>
        </Header>
        
        <section className='se_best_sell w-full h-fit my-10 '>
            <Container>
              <h2 className='xsm:h4 sm:h4 md:h4 h3 black-text text-align text-center'>SALE BEST SELLERS</h2>
              <Cards/>

            </Container>
        </section>

        </main>
        
    </>
  )
}

export default Home