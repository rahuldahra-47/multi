
import Services from '@/components/Services'
import Features from '@/components/Features'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Head from 'next/head'


import Typewriter from 'typewriter-effect';
export default function Home() {
  return (
    <>
      <div className="main">
        <Head>
          <title>AIO - Management</title>
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <div className="gradient" />
      </div>
      <main className='app'>
        <Nav />
        <section className='w-full flex-center flex-col md:h-[500px] py-5'>
          <h1 className='head_text text-center'>
            Welcome to
            <br className='max-md:hidden' />
            <span className='text-center indigo_gradient block p-4'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("All In One Management System").pauseFor(2000).deleteAll().typeString("3 in 1 Management System").pauseFor(2000).deleteAll().typeString("Attendance Management System").pauseFor(2000).deleteAll().typeString("Library Management System").pauseFor(2000).deleteAll().typeString("Inventory Management System").pauseFor(2000).start();
                }}
                options={{loop:true}}
              />
            </span>
          </h1>
          <p className='desc text-center'>
            Library Management System, Inventory Management System, Attendance
            Management System
          </p>


        </section>
        <Services />
        <Features />
        <About />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
