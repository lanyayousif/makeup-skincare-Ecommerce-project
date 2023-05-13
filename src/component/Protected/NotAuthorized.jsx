import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function NotAuthorized() {
  return (
    <>
    <main className=" relative">
      <Navbar />
      <section className=" mt-[7vh] pb-16 px-4 min-h-[50vh]">
      <div className="w-full max-w-3xl px-8 py-6 bg-bg-main mx-auto rounded">
      <h1 className='h1 text-center'>403</h1>
         <h1 className='h1 section_title'>Not Authorized</h1>
         <h5 className='h5 font-semibold text-center my-11'>sorry the page were looking for does not exit</h5>
      </div>
      </section>
    </main>
    <Footer />
  </>
  )
}

export default NotAuthorized