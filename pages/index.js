
import Services from '@/components/Services'
import Features from '@/components/Features'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'




export default function Home() {
  return (
    <>
      <Nav/>
    <section className='w-full flex-center flex-col md:mt-[120px] md:pt-10 md:mb-[100px] py-5'>
    <h1 className='head_text text-center'>
      Welcome to
      <br className='max-md:hidden' />
      <span className= 'text-center indigo_gradient'> All In One Management System</span>
    </h1>
    <p className='desc text-center'>
    Library Management System, Inventory Management System, Attendance
            Management System
    </p>

    
  </section>
  <Services/>
    <Features/>
    <About />
    <Faq/>
    <Contact />
    <Footer/>
  </>
  )
}
