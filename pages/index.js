
import Services from '@/components/Services'
import Features from '@/components/Features'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'



import Typewriter from 'typewriter-effect';
export default function Home() {
  return (
    <>
    <div className="main">
        <div className="gradient" />
      </div> 
      <main className='app'>
      <Nav/>
    <section className='w-full flex-center flex-col h-[500px] py-5'>
    <h1 className='head_text text-center'>
      Welcome to
      <br className='max-md:hidden' />
      <span className= 'text-center indigo_gradient block p-4'>
      <Typewriter
            onInit={(typewriter)=>{
              typewriter.typeString("All In One Management System").pauseFor(2000).start();
            }}
            
          />
</span>
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
    </main>
  </>
  )
}
